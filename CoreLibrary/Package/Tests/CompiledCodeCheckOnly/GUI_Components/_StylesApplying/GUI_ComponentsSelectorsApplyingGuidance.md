# How to apply the styles in component development

Depending on the count of themes, geometric and decorative variations, inside 

```stylus
applyGeometricVariation(themeName, variationName, variation)

  // ...
```

or

```stylus
applyDecorativeVariation(themeName, variationName, variation)
```

the **context selector** could be or could not be.

```stylus
applyGeometricVariation(themeName, variationName, variation)

  CONTEXT_SELECTOR = selector() == "&" ? null : selector()
```

This context dependent selector is the optimization measure: when the theme and/or geometric variation is only one,
  there is no need to generate the modifier classes for them.


## Common patterns

### Root element

```stylus
applyGeometricVariation(themeName, variationName, variation)

  // ...

  +provideDefaultSelectorWhenRootAndApply(".Sample--YDF")

    border-width: variation.rootElement.borderWidth
```

#### Individual themes

When **1 theme** and **1 geometric variation**, there is _no_ need to use the CSS modifier classes for them, thus
  styles will be applied directly to the **root element**:

```css
.Sample--YDF {
  border-width: 1px;
}
```

When **1 theme** and **multiple geometric variations** the styles will be applied to geometric variation
  **modifier CSS class** because _no_ in the theme CSS class when the theme is only one:

```css
.Sample--YDF__RegularGeometry {
  border-width: 1px;
}

.Sample--YDF__AnotherGeometry {
  border-width: 2px;
}
```

Also, there is _no_ need in the selectors like `.Sample--YDF.Sample--YDF__RegularGeometry` for the root element because
  according to BEM the `.Sample--YDF__RegularGeometry` has block prefix `Sample--YDF` making this class/selector actual 
  only for one specific component.


As default, the geometric variations are not depends on themes, so even with **multiple themes** and **1 geometric variation**, 
  the rules will be applied to root element: 

```css
.Sample--YDF {
  border-width: 1px;
}
```

As long as the **geometric variations** are _not_ depends on **themes**, even with _multiple_ **themes** and _multiple_ 
  **geometric** variations, the geometric variations modifier CSS classes will _not_ depend on themes modifying CSS classes: 

```css
.Sample--YDF__RegularGeometry {
  border-width: 1px;
}

.Sample--YDF__AnotherGeometry {
  border-width: 2px;
}
```

If to activate the **theme** _dependent_ **geometric variations**, it will become to:

```css
.Sample--YDF__RegularTheme.Sample--YDF__RegularGeometry {
  border-width: 1px;
}

.Sample--YDF__RegularTheme.Sample--YDF__AnotherGeometry {
  border-width: 2px;
}

.Sample--YDF__AnotherTheme.Sample--YDF__RegularGeometry {
  border-width: 1px;
}

.Sample--YDF__AnotherTheme.Sample--YDF__AnotherGeometry {
  border-width: 2px;
}
```

with **multiple geometric variations** case and theme independent **1 geometric variation**, there is not need in
  the geometric **variation modifier CSS class**:


```css
.Sample--YDF__RegularTheme {
  border-width: 1px;
}

.Sample--YDF__AnotherTheme {
  border-width: 2px;
}
```


#### Common themes

While theme is only one, it's modifier CSS class will not appear in output CSS code.

With _multiple_ **themes** and **1** _theme dependent_ **geometric variation**, it will be 

```css
.SampleTheme1--YDF .Sample--YDF {
  border-width: 1px; 
}
```


[//]: # (=== TODO ===============================================================================================================)
#### Apply modifier CSS class to root

```stylus
applyGeometricVariation(themeName, variationName, variation)

  VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING = buildString(
    "Badge.${ themeName }Theme.${ variationName }Geometry",
    { themeName: themeName, variationName: variationName }
  )

  
  &.Badge--YDF__PillShapeGeometricModifier

    TEXT_SIZE_TO_BORDER_RADIUS_RATIO = extractAndValidateObjectProperties({
      targetObject: variation,
      targetObjectName: VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING,
      extracts: {
        borderRadiusToValueTextSizeRatio: {
          dotSeparatedPath: "rootElement.modifiers.pillShape.borderRadiusToValueTextSizeRatio", required: true
        }
      }
    }).borderRadiusToValueTextSizeRatio

    border-radius cachedValidReusables.valueLabelTextSize * TEXT_SIZE_TO_BORDER_RADIUS_RATIO
```

**1 theme** and **1 geometric variation**:

```css
.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```

**1 theme** & **multiple theme independent geometric variations**:

```css
.Badge--YDF__RegularGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}

.Badge--YDF__AnotherGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```

**Multiple themes** & **1 theme independent geometric variation**:

```css
.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```

**Multiple themes** & **multiple theme independent geometric variations**:

```css
.Badge--YDF__RegularGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2rem;
}

.Badge--YDF__AnotherGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```

**Multiple themes** & **1 theme dependent geometric variation**:

```css
.Badge--YDF__RegularTheme.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}

.Badge--YDF__AnotherTheme.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```


Multiple themes & multiple theme dependent geometric variation:

```css
.Badge--YDF__RegularTheme.Badge--YDF__RegularGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}

.Badge--YDF__RegularTheme.Badge--YDF__AnotherGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}

.Badge--YDF__AnotherTheme.Badge--YDF__RegularGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}

.Badge--YDF__AnotherTheme.Badge--YDF__AnotherGeometry.Badge--YDF__PillShapeGeometricModifier {
  border-radius: 2em;
}
```


### Children element

```stylus
applyGeometricVariation(themeName, variationName, variation)

  // ...
  .Badge--YDF-SVG_Icon

    // ...
```

**1 theme** & **1 geometric variation**:

```css
.Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```

**1 theme** & **multiple geometric variations**:

```css
.Badge--YDF__RegularGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__AnotherGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```

**Multiple themes** & **1 theme independent geometric variation**:

```css
.Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```

**Multiple themes** & **multiple theme independent geometric variations**:

```css
.Badge--YDF__RegularGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__AnotherGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```

**Multiple themes** & **1 theme dependent geometric variation**:

```css
.Badge--YDF__RegularTheme .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__AnotherTheme .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```


**Multiple themes** & **multiple theme dependent geometric variation**:

```css
.Badge--YDF__RegularTheme.Badge--YDF__RegularGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__RegularTheme.Badge--YDF__AnotherGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__AnotherTheme.Badge--YDF__RegularGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}

.Badge--YDF__AnotherTheme.Badge--YDF__AnotherGeometry .Badge--YDF-SVG_Icon {
  height: 1em;
  margin-left: 0.5em;
}
```

[//]: # (TODO 再開点)


#### Pseudo elements

```stylus
applyGeometricVariation(themeName, variationName, variation)

  VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING = buildString(
    "Badge.${ themeName }Theme.${ variationName }Geometry",
    { themeName: themeName, variationName: variationName }
  )

  .Badge--YDF-Key

    &:first-child

      validateAndAssignStoredInObjectCSS_Properties({
        targetObject: variation,
        targetObjectName: VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING,
        assigments: {
          margin-left: { dotSeparatedPath: "keyLabel.spacing.leftWhenGoingFirst", required: true }
        }
      })
```

1 theme & 1 geometric variation:

```stylus
.Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}
```

1 theme & multiple geometric variations:

```stylus
.Badge--YDF__RegularGeometry .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}

.Badge--YDF__AnotherGeometry .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}
```

Multiple themes & 1 geometric variation:

```stylus
.Badge--YDF__RegularTheme .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}

.Badge--YDF__AnotherTheme .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}
```

Multiple themes & multiple geometric variations, herewith the geometric variations are themes independent:

```stylus
.Badge--YDF__RegularGeometry .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}

.Badge--YDF__AnotherGeometry .Badge--YDF-Key:first-child {
  margin-left: 0.8em;
}
```

[//]: # (TODO 再開点)


#### Positional relationship

All of `targetElementSelector`, `contextSelector` and `referenceElementSelector` must be specified. 

```stylus
applyGeometricVariation(themeName, variationName, variation)

    VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING = buildString(
      "Badge.${ themeName }Theme.${ variationName }Geometry",
      { themeName: themeName, variationName: variationName }
    )

    CONTEXT_SELECTOR = selector() == "&" ? null : selector()

    .Badge--YDF-Key

      retireFrom({
        targetElementSelector: ".Badge--YDF-SVG_Icon",
        contextSelector: CONTEXT_SELECTOR,
        referenceElementSelector: ".Badge--YDF-Key",
        x: extractAndValidateObjectProperties({
          targetObject: variation,
          targetObjectName: VARIATION_FULLY_QUALIFIED_NAME_FOR_LOGGING,
          extracts: {
            spacingAfterSVG_Icon: { dotSeparatedPath: "keyLabel.spacing.afterSVG_Icon", required: true },
          }
        }).spacingAfterSVG_Icon
      })

```

1 theme & 1 geometric variation:

```stylus
.Badge--YDF-SVG_Icon + .Badge--YDF-Key {
  margin-left: 0.4em;
}
```
