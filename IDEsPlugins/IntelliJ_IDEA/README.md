# Yamato Daiwa Frontend — Official Plugin for IntelliJ IDEA Family IDEs

[![Version](https://img.shields.io/jetbrains/plugin/v/17677.svg)](https://plugins.jetbrains.com/plugin/17677)
[![Downloads](https://img.shields.io/jetbrains/plugin/d/17677.svg)](https://plugins.jetbrains.com/plugin/17677)


<!-- Plugin description -->

<!-- ⚠️ Don't use `kbd` tag because it has no appropriate styles in Jet Brains Marketplace -->
<!-- ⚠️ Don't use `dl` tag because it has no appropriate styles in Jet Brains Marketplace -->

Adds the [live templates](https://www.jetbrains.com/help/idea/using-live-templates.html) and
  [files templates](https://www.jetbrains.com/help/idea/using-file-and-code-templates.html) for the
  [Yamato Daiwa Frontend](https://frontend.yamato-daiwa.com/) libraries.


## Live Templates
### Markup (Pug)
#### Inline JavaScript

- **buildEmailLinkHREF_AttributeValue** — Autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildEmailLinkHrefAttributeValue/buildEmailLinkHrefAttributeValue.english.html)
- **buildPhoneNumberLinkHrefAttributeValue** — Autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildPhoneNumberLinkHrefAttributeValue/buildPhoneNumberLinkHrefAttributeValue.english.html)
- **processObjectTypeParameterOfPugMixin** —Autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/processObjectTypeParameterOfPugMixin/processObjectTypeParameterOfPugMixin.english.html)
- **tost** — Autocomplete imitator for [`textOverflowSafetyTest` constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Markup/ConstantsAssets/textOverflowSafetyTest/textOverflowSafetyTest.md)
- **dius** — Autocomplete imitator for [`DummyImagesURIs` enumeration](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/Assets/DummyImagesURIs/DummyImagesURIs.english.html) 


#### GUI Components

- **AdmonitionBlock--YDF**, alias: **ab-ydf** — 
  [AdmonitionBlock--YDF](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock.english.html)
  component.
- **Badge--YDF**, alias: **bdg-ydf**  —
  [Badge--YDF](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Badge/Badge.english.html)
  component. The loading placeholder version **Badge--YDF-LoadingPlaceholder** is also available.
- **Button--YDF**, alias **btn-ydf** —
  [Button--YDF](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Controls/Buttons/Plain/Button.english.html)
  component. The loading placeholder version **Button--YDF-LoadingPlaceholder** is also available.


### Adaptations to JavaScript frameworks

#### Vue

##### GUI Components

- **AdmonitionBlock--YDF-V-P**, alias: **ab-ydf-vue-p** — Live template for 
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToJavaScriptFrameworks/Vue/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-Vue.english.html)
  component (Pug syntax).
- **AdmonitionBlock--YDF-V-H**, alias: **ab-ydf-vue-h** — Live template for 
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToJavaScriptFrameworks/Vue/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-Vue.english.html)
  component (HTML syntax).


#### React

##### GUI Components

- **AdmonitionBlock**, alias: **ab-ydf-react** — Live template for
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToJavaScriptFrameworks/React/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-React.english.html)
  component.

### Styles (Stylus)

#### Assets

##### Fundamental Constants and Enumerations

- **DataTypes--YDF**, alias: **dt** — Live template for 
  [`DataTypes--YDF` enumeration](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#datatypes--ydf---stylus-data-types)
- **NARROWEST_SCREEN_WIDTH_UNIT--YDF**, alias: **nswu** — The Live template for the 
  [`NARROWEST_SCREEN_WIDTH_UNIT--YDF` constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#narrowest_screen_width_unit--ydf---the-narrowest-screen-width-unit)
- **SMALLEST_DIVISION_OF_CSS_PIXEL--YDF**, alias: **sdocp** — Live template for
  [`SMALLEST_DIVISION_OF_CSS_PIXEL--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#smallest_division_of_css_pixel--ydf---the-smallest-division-of-css-pixel)
 
##### Colors

- **PracticalColorCoordinateSystem--YDF**, alias: **pccs** — Live template for 
  [`PracticalColorCoordinateSystem--YDE` two-level object](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/PracticalColorCoordinateSystem.md)
- **TemporarySemitransparentHighlighting--YDF**, alias: **tsh** — Live template for the 
  [`TemporarySemitransparentHighlighting--YDF` object-type constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/TemporarySemitransparentHighlighting.md)
  There is also the **bgc-tsh** pasting same content with `background-color` key at once.
- **W3C_39_ShadesOfGray--YDF**, alias: **sogw3c** — Live template for the
  [`W3C_39_ShadesOfGray--YDF` array](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/W3C_39_ShadesOfGray.md)
- **YDF_ColorPalette**, alias: **ydfcp** — Live template for the
  [`YDF_ColorPalette` object](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Styles/01-Assets/02-Colors/YDF_ColorPalette.styl).
  The related ones which allows to input some value of `YDF_ColorPalette` along with CSS properties:
  - `c-ydfcp` — with `color` property
  - `bgc-ydfcs` — with `background-color` property
  - `bgi-ydfcp` — with `background-image` property (in this case, the value of gradient group must be inputted)

[//]: # (* <kbd>fuic</kbd> The Live template for the [`FlatUI_Colors` enumeration]&#40;https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/03-BuildInPlugins/ColorPalettes/FlatUI/FlatUI_ColorsPalette.md&#41;)
[//]: # (* <kbd>mdc</kbd> The Live template for the [`MaterialDesignColors` object]&#40;https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/03-BuildInPlugins/ColorPalettes/MaterialDesign/MaterialDesignColorsPalette.md&#41;)


#### Kernel
##### Configuration

- **YDF_Configuration**, alias: **ydfc** — autocomplete for 
  [`YDF_Configuration` object](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html).
  To access to properties of the second level immideatly after Live template expanding, the following Live templates 
  available:
  - **ydfc-fs** — accessing to selected value of [`YDF_Configuration.fontsStacks` associative array](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-FONTS_STACKS--SECTION) 
  - **ydfc-tg** — accessing to selected value of [`YDF_Configuration.textGeometry` object](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-TEXT_GEOMETRY--SECTION)
  - **ydfc-z** — accessing to selected value of [`YDF_Configuration.zIndexes` associative array](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-Z_INDEXES--SECTION)
- **oydfc** — YDF configuration overriding

[//]: # (=== TODO ===================================================================================================)

##### Specification schemas

- **BordersSizingSpecificationSchema--YDF** — autocomplete imitator type Live template for eponymous object
- **PaddingsSpecificationSchema--YDF** — autocomplete imitator type Live template for eponymous object
- **TextElementHeightSizingSpecificationSchema--YDF** — autocomplete imitator type Live template for eponymous object
- **WidthSizingSpecificationSchema--YDF** — autocomplete imitator type Live template for eponymous object

##### Functions
###### Type checkers

- Strings
  - **isEmptyString** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
  - **isNonEmptyString** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
  - **isString** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
  
  <!-- - **isEmptyString** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isEmptyString--SECTION) -->
  <!-- - **isNonEmptyString** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNonEmptyString--SECTION) -->
  <!-- - **isString** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isString--SECTION) -->

- Quantities
  - **isDimensionalOrDimensionlessQuantity** — autocomplete imitator type Live template for the eponymous function
  - **isDimensionalQuantity** — autocomplete imitator type Live template for the eponymous function
  - **isDimensionlessQuantity** — autocomplete imitator type Live template for the eponymous function
  - **isNaturalNumber** — autocomplete imitator type Live template for the eponymous function

  <!-- - **isDimensionalOrDimensionlessQuantity** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionalOrDimensionlessQuantity--SECTION) -->
  <!-- - **isDimensionalQuantity** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionalQuantity--SECTION) -->
  <!-- - **isDimensionlessQuantity** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionlessQuantity--SECTION) -->
  <!-- - **isNaturalNumber** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNaturalNumber--SECTION) -->

- Booleans
  - **isBoolean** — autocomplete imitator type Live template for the eponymous function
  - **isFalse** — autocomplete imitator type Live template for the eponymous function
  - **isTrue** — autocomplete imitator type Live template for the eponymous function

  <!-- - **isBoolean** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isBoolean--SECTION) -->
  <!-- - **isFalse** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isFalse--SECTION) -->
  <!-- - **isTrue** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isTrue--SECTION) -->

- Nullables
  - **isNotNull** — autocomplete imitator type Live template for the eponymous function
  - **isNull** — autocomplete imitator type Live template for the eponymous function 
  
  <!-- - **isNotNull** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNotNull--SECTION) -->
  <!-- - **isNull** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNull--SECTION) -->

- Others
  - **isCalcExpression** autocomplete imitator type Live template for the eponymous function
  - **isFunction** autocomplete imitator type Live template for the eponymous function
  - **isIdentifier** autocomplete imitator type Live template for the eponymous function
  - **isObject** — autocomplete imitator type Live template for the eponymous function

  <!-- - **isCalcExpression** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isCalcExpression--SECTION) -->
  <!-- - **isFunction** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isFunction--SECTION) -->
  <!-- - **isIdentifier** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isIdentifier--SECTION) -->
  <!-- - **isObject** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isObject--SECTION) -->


###### Value converters

- **emptyStringToNull** — autocomplete imitator type Live template for the eponymous function
- **nullToZero** — autocomplete imitator type Live template for the eponymous function
- **nullToEmptyString** — autocomplete imitator type Live template for the eponymous function
- **nullToEmptyObject** — autocomplete imitator type Live template for the eponymous function
      

###### Strings 

- **buildString** — autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/Strings/buildString/buildString.english.html)
- **capitalizeFirstLatinCharacter** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/03-Strings/capitalizeFirstLatinCharacter.md)

###### Quantities

- **appendUnit** — autocomplete imitator type Live template for the eponymous function
- **computeExtraSpaceCausedByLineHeightAtTopOrBottom** - autocomplete imitator type Live template for the eponymous function
- **getLineHeightByFontSizeAndLineSpacing** - autocomplete imitator type Live template for the eponymous function
- **getLineSpacingByFontSizeAndLineHeight** - autocomplete imitator type Live template for the eponymous function
- **removeUnitFromAmount** - autocomplete imitator type Live template for the eponymous function

###### Objects

- **createObjectWithComputedProperties** — autocomplete imitator type Live template for the eponymous function
- **deeplyCloneAndOverrideObject** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/deeplyCloneAndOverrideObject.md)
- **deeplyCloneObject** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/deeplyCloneObject.md)
- **formatObject** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/formatObject.md)
- **getObjectNonNullValuesCount** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/getObjectNonNullValuesCount.md)
- **getObjectValueByDotSeparatedPathSafely** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/getObjectValueByDotSeparatedPathSafely.md)
- **iterateObjectSkippingNullValues** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/iterateObjectSkippingNullValues.md)
- **overrideObject** — autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/overrideObject.md)

* Autocomplete imitators (no abbreviations) for value converters array functions
  * <kbd>arrayConstructor__POLYFILL</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/arrayConstructor__POLYFILL.md))
  * <kbd>getFirstNonNullArrayElement</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/getFirstNonNullArrayElement.md))
  * <kbd>getLengthOfPrimitivesArray</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/getLengthOfPrimitivesArray.md))
  * <kbd>hasPrimitivesArraySpecifiedElement</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/hasPrimitivesArraySpecifiedElement.md))
  * <kbd>iterate2DimensionalArray</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/iterate2DimensionalArray.md))
  * <kbd>iterateAssociativeArray</kbd> ([check documentation](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/iterateAssociativeArray.md))
      
* Parameters validation
  * <kbd>votp</kbd> - live template for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
  * <kbd>votp-a</kbd> - live template for amount property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
  * <kbd>votp-s</kbd> - live template for string property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
  * <kbd>votp-p</kbd> - live template for any other property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
       
* Other functions
  * <kbd>bbcn</kbd> - live template for [buildBEM_ClassName](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/buildBEM_ClassName.md) function
  * <kbd>sn</kbd> - live template for [substituteNull](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/substituteNull.md) function
  * <kbd>bce</kbd> - live template for [buildCalcExpression](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/buildCalcExpression.md) function
  * <kbd>log</kbd> - autocomplete imitator for [log](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/log.md) function


##### Mixins

* General
    
  * <kbd>ainn</kbd> - live template for [applyIfNotNull](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/00-GeneralUtils/applyIfNotNull.md) mixin 
  * <kbd>ainz</kbd> - live template for [applyIfNotZero](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/00-GeneralUtils/applyIfNotZero.md) mixin 

  * Sizing
    * Width
      * <kbd>ws</kbd> - live template for [widthSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/WidthSizing.md) mixin
      * <kbd>fillViewportWidthIgnoringParentPaddings</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/fillViewportWidthIgnoringParentPaddings.md)
      * <kbd>tcws</kbd> - [TableCellWidthSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/TableCellWidthSizing.md) mixin
    * Borders
      * <kbd>bds</kbd> - live template for [BordersSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/03-Borders/BordersSizing.md) mixin
      * <kbd>bfr</kbd> - unified template for [4 mixins for the border fillets radius defining](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/03-Borders/BordersFilletsRadius.md) mixin 
    * Paddings
      * <kbd>pd</kbd> - live template for [Paddings](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/04-Paddings/Paddings.md) mixin
      
  * Positioning
    * <kbd>chww</kbd> - live template for [centerHorizontallyWithoutWrapper](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/centerHorizontallyWithoutWrapper.md) mixin
    * <kbd>ptr</kbd> - live template for [placeToRight](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/placeToRight.md) mixin
    * <kbd>vcapb</kbd> - live template for [VerticallyCenteredAbsolutelyPositionedBlock](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/VerticallyCenteredAbsolutelyPositionedBlock.md) mixin

  * Positional relationship
    * <kbd>prs</kbd> - live template for [PositionalRelationship](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#positionalrelationship-mixin) mixin
    * <kbd>rf</kbd> - live template for [retireFrom](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#retirefrom-mixin) mixin
    * <kbd>ptfs</kbd> - live template for [pushTargetFromSelf](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#pushtargetfromself-mixin) mixin
    * <kbd>rfewss</kbd> - live template for [retireFromElementWithSameSelector](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#retirefromelementwithsameselector-mixin) mixin
    * <kbd>wigf</kbd> - live template for [whenItGoingFirst](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitgoingfirst-mixin) mixin
    * <kbd>wigl</kbd> - live template for [whenItGoingLast](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitgoinglast-mixin) mixin
    * <kbd>wija</kbd> - live template for [whenItJustAfter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitjustafter) mixin
    * <kbd>wtgjai</kbd> - live template for [whenTargetGoingJustAfterIt](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whentargetgoingjustafterit) mixin
    * <kbd>wtwssgjat</kbd> - live template for  [whenTargetWithSameSelectorGoingJustAfterIt](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whentargetwithsameselectorgoingjustafterit) mixin

  * Layout
    * <kbd>ccwchp</kbd> - live template for [CenteredContentWithComputedHorizontalPaddings](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/CenteredContentWithComputedHorizontalPaddings.md) mixin
    * <kbd>cnt</kbd> - live template for [Centerer](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/Centerer.md) mixin
    * <kbd>fbv</kbd> - live template for [fillBodyVertically](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/fillBodyVertically.md) mixin
    * <kbd>ftdl</kbd> - live template for [FixedTranslucentDimLayer](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/FixedTranslucentDimLayer.md) mixin

  * Typography
    * <kbd>slteos</kbd> - live template for [SingleLineTextElementOverflowSafety](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/05-TypographyUtils/SingleLineTextElementOverflowSafety.md) mixin
    * <kbd>mlt</kbd> - live template for [MultiLineTextElementOverflowSafetyWithoutExtraSpaceCausedByLineHeight](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/05-TypographyUtils/MultiLineTextElementOverflowSafetyWithoutExtraSpaceCausedByLineHeight.md) mixin

  * Other
    * <kbd>pcsaov</kbd> - live template for [provideClippedShadowsAndOutlinesVisibility](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/06-RestUtils/provideClippedShadowsAndOutlinesVisibility.md) mixin
    * <kbd>sprt</kbd> - live template for [Sprite](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/06-RestUtils/Sprite.md) mixin
    
* Styles initialization

  * <kbd>si</kbd> - live template for [InitialGlobalCSS_Rules](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/InitialGlobalCSS_Rules.md) and [CrossBrowserStylesReset](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/CrossBrowserStylesReset.md) mixins
  * <kbd>blep</kbd> - live template for [ButtonLikeElementsPrimer`](https://github.com/TokugawaTakeshi/yamato_daiwa-frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/ButtonLikeElementsPrimer.md) mixins


##### Idioms templates

* Media queries definitions 
  * <kbd>med2c</kbd> - the media queries definitions for 2-pattern layout
  * <kbd>med3c</kbd> - the media queries definitions for 3-patterns layout
  * <kbd>med4c</kbd> - the media queries definitions for 4-patterns layout
  * <kbd>med3c</kbd> - the media queries definitions for 5-patterns layout
* Media queries
  * <kbd>wsc</kbd> - **+WideScreensConfiguration()** mixin (must be preliminarily defined) invocation.
  * <kbd>msc</kbd> - **+MediumScreensConfiguration()** mixin (must be preliminarily defined) invocation.
  * <kbd>nsc</kbd> - **+NarrowScreensConfiguration()** mixin (must be preliminarily defined) invocation.
  * <kbd>wmsc</kbd> - **+WideAndMediumScreensConfiguration()** mixin (must be preliminarily defined) invocation.
  * <kbd>mnsc</kbd> - **+MediumAndNarrowScreensConfiguration()** mixin (must be preliminarily defined) invocation.

* Typography
  * <kbd>hd</kbd> - live template inserting the heading tag and dedicated CSS class provided by <code>provideYDF_Typography</code> Stylus mixin
  * <kbd>shd</kbd> - live template inserting the <code>div</code> tag with subheading CSS class provided by <code>provideYDF_Typography</code> Stylus mixin
  * <kbd>par</kbd> - live template inserting the <code>p</code> tag and dedicated CSS class provided by <code>provideYDF_Typography</code> Stylus mixin 

* Other 
  * <kbd>iydf</kbd> - live template inserting the import (from **@yamato-daiwa/frontend** package) declaration 

* Vue
  * <kbd>badge-ydf-vue</kbd>, <kbd>badge-lp-ydf-vue</kbd> - live templates for the Vue adaptation **Badge** component and its loading placeholder respectively
  * <kbd>ossll</kbd> - live template for Vue adaptation of **OverflowSafeSingleLineLabel** component


## Files Templates
### Web Pages

- **PugEntryPointExtendedFromRegularWebPageTemplate** — Pug entry point extended from the 
  [Regular WebPage Template](https://frontend.yamato-daiwa.com/CoreLibrary/PagesTemplates/Children/RegularWebPage/RegularWebPageTemplate.english.html).

### Styles customizing

- [**AdmonitionBlock** component](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Components/Children/AdmonitionBlock/AdmonitionBlock.english.html):
  `Files and Code Templates/Other/YDF GUI Components/AdmonitionBlock.styl`
- **Badge** component: `Files and Code Templates/Other/YDF GUI Components/Badge.styl`

<!-- Plugin description end -->


## Installation

- Using IDE built-in plugin system:
  
  <kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd> > <kbd>Search for "temp"</kbd> >
  <kbd>Install Plugin</kbd>
  
- Manually:

  Download the [latest release](https://github.com/TokugawaTakeshi/temp/releases/latest) and install it manually using
  <kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>⚙️</kbd> > <kbd>Install plugin from disk...</kbd>


---
Plugin based on the [IntelliJ Platform Plugin Template][template].

[template]: https://github.com/JetBrains/intellij-platform-plugin-template
