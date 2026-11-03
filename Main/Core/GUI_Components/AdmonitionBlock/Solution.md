# Question

Suggest the correction for `mixedInToInheritorOf` method of `AdmonitionBlock` class in "GUI_Components/AdmonitionBlock/AdmonitionBlock.base.ts". 

How it will be used:

```ts
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";
import { AdmonitionBlockBase } from "@yamato-daiwa/frontend";


class AdmonitionBlock extends AdmonitionBlockBase.mixedInToInheritorOf(VueComponent) {

}
```

where `AdmonitionBlockBase` is the alias of `AdmonitionBlock` from "GUI_Components/AdmonitionBlock/AdmonitionBlock.base.ts"

As result of above corrections, the Vue component `AdmonitionBlock` must be correctly inherited from `VueComponent` as in `class AdmonitionBlock extends VueComponent` case, but also all static members of `AdmonitionBlock` class in ""GUI_Components/AdmonitionBlock/AdmonitionBlock.base.ts" (except `shareStaticMembers` and `mixedInToInheritorOf`) must be available (not just from the viewpoint of JavaScript, but TypeScript also must detect the inherited static members).

It is the question, do not edit the code yet.


# Answer 1

Configured authentication: JetBrains

I'm checking how TypeScript handles this pattern, especially protected static members, by compiling a small test outside the repo.

I tested the typing with your TypeScript 6.0.3 in a scratch folder outside the repo. I haven't changed any project files.

## What's wrong with the current `mixedInToInheritorOf`

1. **`TargetClass: object` loses the constructor type.** `typeof TargetClass` is just `object`. So the result isn't a constructor TypeScript can extend, and `VueComponent`'s instance members (`$props`, `$emit`, …) are lost. That is why both `@ts-ignore` comments are there.
2. **`Omit<typeof AdmonitionBlock, …>` can't include protected statics.** Mapped types only see public keys, so `counterForInstanceID_Generating`, `counterForCustomSVG_IconsIDs_Generating`, `customSVG_IconCurrentID` and `getActualRootElementModifierCSS_Classes` don't exist for TypeScript. It also brings `prototype` along.
3. **Simply intersecting `TargetClass & typeof AdmonitionBlock` doesn't work either.** I tried it and got `TS2510: Base constructors must all have the same return type`. TypeScript only merges constructor types in an intersection when one of them is a mixin-style constructor, i.e. `new (...args: any[]) => …`.
4. **`Object.defineProperties` with `value` copies a snapshot.** That's fine for shared objects like `Themes`, because `defineThemes` mutates them in place. It's wrong for primitives and reassigned values:
   - `considerThemesAsCommon()` sets `AdmonitionBlock.areThemesCSS_ClassesCommon`, but the inheritor keeps the old `false`.
   - The counters on the inheritor are non-writable copies, frozen at `0`.
5. **`generateCustomIconNewID` uses `this.counterFor…`.** When called as `Inheritor.generateCustomIconNewID()`, `this` is the inheritor, whose copied counter never changes, so every ID ends in `-0`. Called detached, `this` is `undefined`.
6. **`getActualRootElementModifierCSS_Classes` is missing** from both property lists (here and in `shareStaticMembers`). Two hand-written lists will keep drifting apart.

## Suggested correction

```ts
/* eslint-disable-next-line max-classes-per-file -- The mixin creates an anonymous inheritor class. */
import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";
import AdmonitionBlockLocalization__English from "./AdmonitionBlockLocalization.english";


export abstract class AdmonitionBlock {

  // ... all existing static members unchanged, except `generateCustomIconNewID` (see below) ...

  /**
   * @description
   * Required for the mixing: a constructor of the form `(...args: any[])` makes `typeof AdmonitionBlock` a
   * "mixin constructor type", so TypeScript can merge it with the target class in an intersection
   * (otherwise TS2510 "Base constructors must all have the same return type").
   * The class is abstract and has no instance members, so this has no other effect.
   */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-useless-constructor -- See above. */
  public constructor(..._parameters: Array<any>) {}


  public static generateCustomIconNewID(): string {
    AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating++;
    AdmonitionBlock.customSVG_IconCurrentID =
        `ADMONITION_BLOCK--YDF-SVG_ICON-${ AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating }`; // ← not `this`
    return AdmonitionBlock.customSVG_IconCurrentID;
  }


  /* ━━━ Mixing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /** @experimental */
  public static mixedInToInheritorOf<
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- `any[]` is required by TypeScript for mixins. */
    TargetClass extends abstract new (...parameters: Array<any>) => object
  >(
    TargetClass: TargetClass,
    options?: Readonly<{ mustSkipLocalization: boolean; }>
  ): AdmonitionBlock.MixedInClass<TargetClass> {

    abstract class Inheritor extends TargetClass {}

    const NON_INHERITABLE_KEYS: ReadonlySet<PropertyKey> = new Set<PropertyKey>([
      "length", "name", "prototype",
      "shareStaticMembers", "mixedInToInheritorOf",
      ...options?.mustSkipLocalization === true ? [ "localization" ] : []
    ]);

    for (const key of Reflect.ownKeys(AdmonitionBlock)) {

      if (NON_INHERITABLE_KEYS.has(key)) {
        continue;
      }

      const value: unknown = Reflect.get(AdmonitionBlock, key);

      Object.defineProperty(
        Inheritor,
        key,
        typeof value === "function" ?
            /* Methods address `AdmonitionBlock` explicitly, so sharing the reference is enough. */
            { value, writable: false, enumerable: false, configurable: true } :
            /* Data: delegate to the single source of truth instead of copying a snapshot. */
            {
              get: (): unknown => Reflect.get(AdmonitionBlock, key),
              set: (newValue: unknown): void => { Reflect.set(AdmonitionBlock, key, newValue); },
              enumerable: false,
              configurable: true
            }
      );

    }

    return Inheritor as unknown as AdmonitionBlock.MixedInClass<TargetClass>;

  }

}


export namespace AdmonitionBlock {

  /**
   * `typeof AdmonitionBlock` (not `Omit<…>`) keeps the *protected* static members, so they stay accessible
   * inside the inheriting class but not outside it. The helper methods are masked with `never`
   * because `Omit` would drop the protected members.
   */
  export type MixedInClass<TargetClass> =
      TargetClass &
      typeof AdmonitionBlock &
      Readonly<{
        shareStaticMembers: never;
        mixedInToInheritorOf: never;
      }>;

  // ... GeometricVariations, DecorativeVariations, Localization unchanged ...

}
```

## What I verified with tsc (`--strict --declaration`, target ES2022)

I used a stand-in typed exactly like vue-facing-decorator's `VueCons` (`new (optionBuilder, vueInstance) => ComponentPublicInstance & …`):

- `class X extends Base.mixedInToInheritorOf(Vue)` compiles without any `@ts-ignore`.
- Instance members of `Vue` (`this.$emit()`, `x.$props`) are typed, and `new X(optionBuilder, vueInstance)` keeps Vue's constructor signature.
- Public statics (`X.CSS_NAMESPACE`, `X.generateInstanceID()`) are visible.
- Protected statics (`X.counterForInstanceID_Generating`, `X.getActualRootElementModifierCSS_Classes(…)`) work inside `X`, and outside it you get `TS2445`.
- `X.mixedInToInheritorOf(…)` is rejected because it's typed `never`.
- Removing the `(...args: any[])` constructor brings back `TS2510`.
- The `.d.ts` emits cleanly (no `TS4094`, because the return type is written out explicitly).

On the runtime side, vue-facing-decorator's `getSuperSlot` walks up the prototype chain and skips classes that aren't decorated. So the anonymous `Inheritor` is transparent and `@VueComponentConfiguration` behaves as with `extends VueComponent`.

## Things to keep in mind

- **Class fields shadow the inherited accessors.** With ES2022 class fields, a field in the Vue class such as `public static localization = …` becomes the Vue class's own property. So `mustSkipLocalization` is no longer strictly needed; I kept it for compatibility.
- **Assignments go to the shared base.** `VueAdmonitionBlock.areThemesCSS_ClassesCommon = true` writes to `AdmonitionBlock`, which matches what `considerThemesAsCommon()` already does.
- **The `define*` methods still return `typeof AdmonitionBlock`.** Chaining `VueAdmonitionBlock.defineThemes(…)` gives you the base class, not the Vue one. If you want it to return the Vue class, the `define*` methods would need a `this` parameter, `<Self>(this: Self, …): Self`, and to pass `this` to the coordinator.
- **The same fix applies to `shareStaticMembers`.** It has the same snapshot and missing-member problems. Both methods could use the same loop so there's one list of members, not two.


# Answer 2

You're right, and this changes the solution more than just the annotations. TypeScript only merges two constructor types when one of them is exactly `new (...args: any[]) => …`. I checked `unknown[]` and `never[]` in place of `any[]`, and both still fail with `TS2510: Base constructors must all have the same return type`. So the fix has to avoid that rule entirely, not just rename the type.

## Approach without `any`

1. **Constrain `TargetClass` with `never` parameters.** Use `TargetClass extends abstract new (...parameters: never) => object`. Any constructor is assignable to that, including vue-facing-decorator's `new (optionBuilder: OptionBuilder, vueInstance: any) => …` (that `any` is in the library, not in your code).
2. **Write the construct signature of the result yourself.** Infer the target's parameters and instance type, and return `new (...parameters: P) => I & AdmonitionBlock<unknown>`. Because the instance type includes `AdmonitionBlock`, TypeScript treats your Vue class as derived from `AdmonitionBlock`, which is what allows access to the protected statics.
3. **Keep `typeof AdmonitionBlock` in the result type for the statics, but give `AdmonitionBlock` a type parameter with no default.** When TypeScript resolves `extends X(...)` with no type arguments, it ignores construct signatures that need a type argument. So `typeof AdmonitionBlock` adds only its static members, public and protected, and no longer clashes with Vue's constructor. Without this type parameter, `TS2510` comes back; I checked.
4. **Inside the method, extend through an `unknown` cast** instead of `@ts-ignore`. The public type comes from the explicit return type.

## Suggested code

```ts
/* eslint-disable-next-line max-classes-per-file -- The mixin creates an inheritor class expression. */
import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";
import AdmonitionBlockLocalization__English from "./AdmonitionBlockLocalization.english";


/**
 * @description
 * The type parameter is never used. Because it has no default, the construct signature of `typeof AdmonitionBlock`
 * is skipped when an inheritor class is resolved, so `typeof AdmonitionBlock` can be intersected with
 * the target class in `mixedInToInheritorOf` without the "TS2510" error.
 */
export abstract class AdmonitionBlock<_TypeParameterForConstructorSignatureExclusion> {

  // ... existing static members unchanged, except `generateCustomIconNewID` below ...

  public static generateCustomIconNewID(): string {
    AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating++;
    AdmonitionBlock.customSVG_IconCurrentID =
        `ADMONITION_BLOCK--YDF-SVG_ICON-${ AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating }`;
    return AdmonitionBlock.customSVG_IconCurrentID;
  }


  /* ━━━ Mixing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /** @experimental */
  public static mixedInToInheritorOf<TargetClass extends abstract new (...parameters: never) => object>(
    TargetClass: TargetClass,
    options?: Readonly<{ mustSkipLocalization: boolean; }>
  ): AdmonitionBlock.MixedInClass<TargetClass> {

    const Inheritor: abstract new () => object =
        class extends (TargetClass as unknown as abstract new () => object) {};

    const NON_INHERITABLE_KEYS: ReadonlySet<PropertyKey> = new Set<PropertyKey>([
      "length", "name", "prototype",
      "shareStaticMembers", "mixedInToInheritorOf",
      ...options?.mustSkipLocalization === true ? [ "localization" ] : []
    ]);

    for (const key of Reflect.ownKeys(AdmonitionBlock)) {

      if (NON_INHERITABLE_KEYS.has(key)) {
        continue;
      }

      const value: unknown = Reflect.get(AdmonitionBlock, key);

      Object.defineProperty(
        Inheritor,
        key,
        typeof value === "function" ?
            /* Methods address `AdmonitionBlock` explicitly, so sharing the reference is enough. */
            { value, writable: false, enumerable: false, configurable: true } :
            /* Data: delegate to `AdmonitionBlock` instead of copying a snapshot. */
            {
              get: (): unknown => Reflect.get(AdmonitionBlock, key),
              set: (newValue: unknown): void => { Reflect.set(AdmonitionBlock, key, newValue); },
              enumerable: false,
              configurable: true
            }
      );

    }

    return Inheritor as unknown as AdmonitionBlock.MixedInClass<TargetClass>;

  }

}


export namespace AdmonitionBlock {

  export type MixedInClass<TargetClass extends abstract new (...parameters: never) => object> =

      /* Constructor and instance members of the target class, plus derivation from `AdmonitionBlock`
       * (needed to access the protected static members from the inheritor). */
      (
        TargetClass extends abstract new (...parameters: infer Parameters) => infer Instance ?
            new (...parameters: Parameters) => Instance & AdmonitionBlock<unknown> :
            never
      ) &

      /* Static members of the target class. */
      Omit<TargetClass, "prototype"> &

      /* Static members of `AdmonitionBlock`, public and protected (`Omit` would drop the protected ones). */
      typeof AdmonitionBlock &

      /* Helper methods which must not be available on the inheritor. */
      Readonly<{
        shareStaticMembers: never;
        mixedInToInheritorOf: never;
      }>;

  // ... GeometricVariations, DecorativeVariations, Localization unchanged ...

}
```

Compared with my previous suggestion, I removed the `public constructor(..._parameters: Array<any>)` and the `any[]` constraint. The runtime part (accessors instead of snapshot copies, and `AdmonitionBlock` instead of `this` in `generateCustomIconNewID`) is the same.

## What I verified

I compiled this with your TypeScript 6.0.3 against the real `vue-facing-decorator` types from `AdaptationsToFrameworks/Vue/Core/node_modules`, in a scratch folder outside the repo. Flags were `--strict --noUnusedLocals --noUnusedParameters --experimentalDecorators --declaration`, and `@ComponentBase` was applied to the class. No project files were changed.

- `class AdmonitionBlock extends AdmonitionBlockBase.mixedInToInheritorOf(VueComponent)` compiles with no `any` and no `@ts-ignore`.
- Vue instance members (`$props`, `$el`, `$emit`) are typed, and the constructor keeps Vue's parameters (`new X()` with no arguments is rejected).
- Public statics (`CSS_NAMESPACE`, `generateInstanceID`, `localization`, …) are visible.
- Protected statics (`counterForInstanceID_Generating`, `getActualRootElementModifierCSS_Classes`, …) work inside the class, and outside it you get `TS2445`.
- Calling `shareStaticMembers` or `mixedInToInheritorOf` on the inheritor is rejected.
- The `.d.ts` emits cleanly.
- The unused type parameter passes `noUnusedParameters` because of the `_` prefix.

## Side effects of the type parameter

- **Using `AdmonitionBlock` as an instance type now needs a type argument** (`AdmonitionBlock<unknown>`). `typeof AdmonitionBlock` and the namespace types (`AdmonitionBlock.Localization` etc.) don't change. I searched `AdaptationsToFrameworks` and found nothing that uses `AdmonitionBlockBase` as an instance type, so nothing breaks today.
- **The type parameter is a workaround for how TypeScript resolves base classes, not documented behaviour.** The JSDoc comment on the class explains why it's there, so no one removes it as unused.
