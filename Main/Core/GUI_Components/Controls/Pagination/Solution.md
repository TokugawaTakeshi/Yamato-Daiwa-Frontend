# Question

Consider 

```
public static defineThemes(
  definitions: Array<
    {
      ownThemeKey: string;
      themeModifierCSS_Class?: string;
      correspondenceByChildren: {
        button: { [ childrenComponentKey: string ]: string; };
      };
    }
  >
): typeof Pagination {
  return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(Pagination, definitions);
}
```

in GUI_Components/Controls/Pagination/Pagination.base.ts.
For `Pagination` class, `button`, the fixed key in above object is critical.
But for the `YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents`,
the following generalized form is fine:

```
export namespace OwnAndCorrespondingChildrenThemesDefinition {

  export type Theme = {
    ownThemeKey: string;
    themeModifierCSS_Class?: string;
    correspondenceByChildren: Readonly<{
      [ childComponentKey: string ]: { [ownThemeValue: string]: string; };
    }>;
  };

}
```

because it just iterates the childred components.
However, in the comonents other than `Pagination` the `childredComponentsKey`s set will be different.
Besides above generalized form, I want the generic type for specific components, for example:

```
public static defineThemes(
  definitions: ThemesDefinition<"button" | "checkbox">
): typeof Pagination {
  return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(Pagination, definitions);
```

which will be mapped to:

```
Array<
    {
      ownThemeKey: string;
      themeModifierCSS_Class?: string;
      correspondenceByChildren: {
        button: { [ childrenComponentKey: string ]: string; };
        checkbox { [ childrenComponentKey: string ]: string; };
      };
    }
  >
```

What `ThemesDefinition` will be?


## Answer

Use a mapped type over the key union:

```ts
export type ThemesDefinition<ChildComponentKey extends string> = Array<
  {
    ownThemeKey: string;
    themeModifierCSS_Class?: string;
    correspondenceByChildren: {
      [K in ChildComponentKey]: { [ownThemeValue: string]: string; };
    };
  }
>;
```

`ThemesDefinition<"button" | "checkbox">` then expands to exactly the shape you wrote. Both `button` and `checkbox` are required. If you leave one out, or add a key like `radioButton` in an object literal, you get a compile error.

### Merging it with the generalized form

You don't need two separate definitions. Make the existing `Theme` generic and give the parameter a default of `string`:

```ts
export namespace OwnAndCorrespondingChildrenThemesDefinition {

  export type Theme<ChildComponentKey extends string = string> = {
    ownThemeKey: string;
    themeModifierCSS_Class?: string;
    correspondenceByChildren: Readonly<{
      [K in ChildComponentKey]: { [ownThemeValue: string]: string; };
    }>;
  };

}
```

- **With no type argument** (`Theme`): a mapped type over `string` becomes `{ [x: string]: … }`. That's identical to your current generalized form, so `YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents` can keep accepting `ReadonlyArray<OwnAndCorrespondingChildrenThemesDefinition.Theme>` unchanged.
- **In a component:**
  ```ts
  public static defineThemes(
    definitions: ReadonlyArray<OwnAndCorrespondingChildrenThemesDefinition.Theme<"button" | "checkbox">>
  ): typeof Pagination { … }
  ```
  You could also add an alias: `type ThemesDefinition<K extends string> = ReadonlyArray<OwnAndCorrespondingChildrenThemesDefinition.Theme<K>>`.

### Why passing the specific form to the general one compiles

A mapped type produces an anonymous object type. TypeScript gives anonymous object types an implicit index signature, so `{ button: X; checkbox: X }` can be assigned to `{ [key: string]: X }`. This only works because the type isn't declared as an `interface`. If you ever turn it into one, the assignment breaks.

### A naming detail

In the current `Pagination` signature, the inner key is called `childrenComponentKey`. In that inner object, the keys are your component's own theme values and the values are the child's theme values. So a name like `ownThemeValue`, as in your generalized form, describes it more accurately.
