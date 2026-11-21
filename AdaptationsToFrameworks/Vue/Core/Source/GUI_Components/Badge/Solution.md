# Question 

I have the following error in `Source/GUI_Components/Badge/BadgeLogic.vue.ts`:

```
TS2345: Argument of type typeof Badge is not assignable to parameter of type
Readonly<{
  GeometricModifiers: Readonly<{
    [key: string]: string;
  }>;
  CSS_NAMESPACE: string;
}>
Types of property GeometricModifiers are incompatible.
Type
import("C:/Users/admin/Documents/Development/torres-f/Main/Core/LogicDistributable/GUI_Components/Badge/Badge.base").Badge.GeometricModifiers
is not assignable to type Readonly<{ [key: string]: string; }>
```

I haven't expect this error because `Readonly<{ [key: string]: string; }>` should be compatible with `enum` with string values. Note that in `GeometricModifiersVuePropertyValidator` we can not change `Readonly<{ [key: string]: string; }>;` to `typeof Badge.GeometricModifiers` because the enumeration will be different depending on user of `GeometricModifiersVuePropertyValidator`.

It is the question, do not edit the code yet.


# Answer 

You're right that a string enum object fits `Readonly<{ [key: string]: string; }>`. The problem is that `Badge.GeometricModifiers` in your declaration doesn't refer to the enum object. It refers to the enum's member type.
### The cause
`BadgeLogic.vue.ts:119`:
```ts
declare public static readonly GeometricModifiers: Badge.GeometricModifiers;
```

and in the namespace (`BadgeLogic.vue.ts:196`):

```ts
export type GeometricModifiers = BadgeBase.GeometricModifiers;
```

In `Badge.base.ts:178`, `GeometricModifiers` is an `enum`. An enum name means two different things depending on where you use it:

| Position | `BadgeBase.GeometricModifiers` means |
|---|---|
| Value position (`BadgeBase.GeometricModifiers.pillShape`) | the enum **object** `{ pillShape: "...", singleLine: "..." }` |
| Type position (`x: BadgeBase.GeometricModifiers`) | the **union of member types**, i.e. `GeometricModifiers.pillShape \| GeometricModifiers.singleLine` (string subtypes) |

So the static property is typed as if it held one enum member, a single string. A string isn't assignable to `{ [key: string]: string }`, so `typeof Badge` fails at `GeometricModifiersVuePropertyValidator(Badge)`.

You don't see this with `GeometricVariations` because `BadgeBase.GeometricVariations` is a type alias for an object type (`YDF_Component.GeometricVariations<…>`), not an enum. That means `Badge.GeometricVariations` already describes an object there. `Badge.base.ts` itself has no problem because the enum is declaration-merged into the `Badge` class via the namespace, so `Badge.GeometricModifiers` there really is the enum object.

### What it should be

You don't need to change the validator. The static property's type in the Vue class needs to be the type of the enum object:

```ts
declare public static readonly GeometricModifiers: typeof BadgeBase.GeometricModifiers;
```

The member-type uses stay as they are, e.g. `ReadonlyArray<Badge.GeometricModifiers>` on lines 122 and 126, because there you really do mean "an enum member".
`typeof BadgeBase.GeometricModifiers` is `{ readonly pillShape: …; readonly singleLine: … }`. With string values, that satisfies `Readonly<{ [key: string]: string }>`, so the validator stays generic.

The same thing almost certainly applies to `DecorativeModifiers` on line 141 if `BadgeBase.DecorativeModifiers` is also an enum. It probably also applies to the other components that call `GeometricModifiersVuePropertyValidator` (the Button, ClosingButton, HamburgerMenuButton, TextBox and LoadingPlaceholder logic files) if they declare it the same way. I haven't checked those files.

I haven't edited anything, as you asked.
