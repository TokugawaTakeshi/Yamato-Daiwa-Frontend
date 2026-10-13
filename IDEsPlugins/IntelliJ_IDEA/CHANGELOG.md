<!-- Keep a Changelog guide -> https://keepachangelog.com -->
<!-- ⚠️ "kbd" tag will not be displayed in Jet Brains Marketplace -->

# Yamato-Daiwa Frontend IntelliJ IDEA plugin changelog

## [0.1.0]

### Added 

+ **CenteredContentWithDynamicInlinePaddings**, alias **ccwdip**  - live template for `CenteredContentWithDynamicInlinePaddings--YDF` mixin

### Removed

The following Live templates has been removed because they actually not related with YDF, and the splitting to 
  media queries methodology is organization-specific.

+ **med2c** - the media queries definitions for 2-pattern layout
+ **med3c** - the media queries definitions for 3-patterns layout
+ **med4c** - the media queries definitions for 4-patterns layout
+ **med3c** - the media queries definitions for 5-patterns layout
+ **wsc** - **+WideScreensConfiguration()** mixin (must be preliminarily defined) invocation.
+ **msc** - **+MediumScreensConfiguration()** mixin (must be preliminarily defined) invocation.
+ **nsc** - **+NarrowScreensConfiguration()** mixin (must be preliminarily defined) invocation.
+ **wmsc** - **+WideAndMediumScreensConfiguration()** mixin (must be preliminarily defined) invocation.
+ **mnsc** - **+MediumAndNarrowScreensConfiguration()** mixin (must be preliminarily defined) invocation.


## [0.0.11]

### Added

- **bdg-ydf** — alias for **Badge--YDF** Live Template
- The Live Templates for [Button](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Controls/Buttons/Plain/Button.english.html)
  component (Core Package + Vue adaptation + React adaptation)
- **Button.styl** — file template for providing and customizing styles of the [Button--YDF](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Controls/Buttons/Plain/Button.english.html)

### Changed

- Rename Live Templates for **AdmonitionBlock** component for naming unification
- Rename Live Templates for **Badge** component for naming unification
- Rename Live Templates for **Badge** component has been updated according the newest API
- Update **Badge.styl** file template according the newest API


## [0.0.10]

### Added

- Support IntelliJ platform **2024.2-2025.1**.
- **PugEntryPointExtendedFromRegularWebPageTemplate** — Pug entry point extended from the
  [Regular WebPage Template](https://frontend.yamato-daiwa.com/CoreLibrary/PagesTemplates/Children/RegularWebPage/RegularWebPageTemplate.english.html).
- **AdmonitionBlock--YDF** — Live template inserting the examples of 
  [**AdmonitionBlock** component](https://frontend.yamato-daiwa.com/AdaptationsToFrameworks/React/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-React.english.html) 
  usage.
  Previously added **ab-ydf** one now is the alias of **AdmonitionBlock--YDF**. 
- **AdmonitionBlock--YDF-V-P**, alias: **ab-ydf-vue-p** — Live template for 
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToFrameworks/Vue/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-Vue.english.html)
  component (Vue framework, Pug syntax).
- **AdmonitionBlock--YDF-V-H**, alias: **ab-ydf-vue-h** — Live template for 
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToFrameworks/Vue/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-Vue.english.html)
  component (Vue framework, HTML syntax).
- **AdmonitionBlock**, alias: **ab-ydf-react** — Live template for
  [AdmonitionBlock](https://frontend.yamato-daiwa.com/AdaptationsToFrameworks/React/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock-React.english.html)
  component.
- **NARROWEST_SCREEN_WIDTH_UNIT--YDF** — autocomplete imitator type Live template for the [eponymous constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#narrowest_screen_width_unit--ydf---the-narrowest-screen-width-unit).
  Previously added **nswu** one now is the alias of **NARROWEST_SCREEN_WIDTH_UNIT--YDF**. 
- **DataTypes--YDF** — autocomplete imitator type Live template for the [eponymous constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#datatypes--ydf---stylus-data-types).
  Previously added **dt** one now is the alias of **DataTypes--YDF**.
- **SMALLEST_DIVISION_OF_CSS_PIXEL--YDF**, alias: **sdocp** — Live template for
  [`SMALLEST_DIVISION_OF_CSS_PIXEL--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#smallest_division_of_css_pixel--ydf---the-smallest-division-of-css-pixel)
- **PracticalColorCoordinateSystem--YDF** — Live template for
  [`PracticalColorCoordinateSystem--YDE` two-level object](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/PracticalColorCoordinateSystem.md).
  Previously added **pccs** one now it the alias of **PracticalColorCoordinateSystem--YDF**. 
- **TemporarySemitransparentHighlighting--YDF**, alias: **tsh** — Live template for the
  [`TemporarySemitransparentHighlighting--YDF` object-type constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/TemporarySemitransparentHighlighting.md)
  There is also the **bgc-tsh** pasting same content with `background-color` key at once.
- **W3C_39_ShadesOfGray--YDF** — Live template for the
  [`W3C_39_ShadesOfGray--YDF` array](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/W3C_39_ShadesOfGray.md)
  Previously added **sogw3c** one now is the alias of **DataTypes--YDF**.
- **YDF_ColorPalette** — autocomplete imitator type Live template for the 
  [`YDF_ColorPalette` object](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Styles/01-Assets/02-Colors/YDF_ColorPalette.styl).
  Previously added **ydfcp** one now is the alias of **YDF_ColorPalette**.
  Also, the following related ones which allows to input some value of `YDF_ColorPalette` along with CSS properties has been added:
  - `c-ydfcp` — with `color` property
  - `bgc-ydfcs` — with `background-color` property
  - `bgi-ydfcp` — with `background-image` property (in this case, the value of gradient group must be inputted)
- **YDF_Configuration**, alias: **ydfc** — autocomplete for `YDF_Configuration` object. Related ones:
  - **ydfc-fs** — accessing to selected value of [`YDF_Configuration.fontsStacks` associative array](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-FONTS_STACKS--SECTION)
  - **ydfc-tg** — accessing to selected value of [`YDF_Configuration.textGeometry` object](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-TEXT_GEOMETRY--SECTION)
  - **ydfc-z** — accessing to selected value of [`YDF_Configuration.zIndexes` associative array](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/YDF_Configuration/YDF_Configuration.english.html#PROPERTIES-Z_INDEXES--SECTION)
  - **oydfc** — YDF configuration overriding

### Changed

- **nswu** Live template now adds `NARROWEST_SCREEN_WIDTH_UNIT--YDF` instead of `NARROWEST_SCREEN_WIDTH_UNIT`.
- **dt** Live template now adds `DataTypes--YDF` instead of `DataTypes`
- **sogw3c** Live template now adds `W3C_39_ShadesOfGray--YDF` instead of `ShadesOfGray__W3C_Palette`
- **badge-ydf** and **badge-lp-ydf** Live templates has been renamed to **Badge--YDF** and **Badge--YDF-LoadingPlaceholder**
   respectively.

### Removed

- Drop support for IntelliJ platform of **2023.X** versions.
- **th** Live template has been replaced with **TemporarySemitransparentHighlighting--YDF**, **tsh**, and **bgc-tsh**.
- **pl** and **plg** Live templates has been removed because of changed API of 
  [`StaticPreviewAnywherePageTemplate`](https://frontend.yamato-daiwa.com/CoreLibrary/PagesTemplates/Children/StaticPreviewAnywherePage/StaticPreviewAnywherePageTemplate.english.html)

## [0.0.9]

### Added

- **appendUnit** — autocomplete imitator type Live template for the eponymous function
- **computeExtraSpaceCausedByLineHeightAtTopOrBottom** - autocomplete imitator type Live template for the eponymous function
- **getLineHeightByFontSizeAndLineSpacing** - autocomplete imitator type Live template for the eponymous function
- **getLineSpacingByFontSizeAndLineHeight** - autocomplete imitator type Live template for the eponymous function
- **processObjectTypeParameterOfPugMixin** — Autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/processObjectTypeParameterOfPugMixin/processObjectTypeParameterOfPugMixin.english.html)
- **removeUnitFromAmount** - autocomplete imitator type Live template for the eponymous function
- **ab-ydf** — Live template for the inserting of invocation of **AdmonitionBlock--YDF** Pug mixin corresponding to the
  [**AdmonitionBlock** component](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Components/Children/AdmonitionBlock/AdmonitionBlock.english.html)
- **AdmonitionBlock.styl** — file template for providing and customizing styles of the [**AdmonitionBlock** component](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Components/Children/AdmonitionBlock/AdmonitionBlock.english.html)
- **createObjectWithComputedProperties** — autocomplete imitator type Live template for the eponymous function

### Changed

- **bs** Live template has been replaced with **buildString** autocomplete imitator type Live template for the [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/Strings/buildString/buildString.english.html)
- **cflc** Live template has been replaced with **capitalizeFirstLatinCharacter** autocomplete imitator type Live template for the [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/03-Strings/capitalizeFirstLatinCharacter.md)
- **Badge.styl**  file template for providing and customizing styles of the **Badge** component has been improved
- **dcaoo** Live template has been replaced with **deeplyCloneAndOverrideObject** autocomplete imitator
- **dco** Live template has been replaced with **deeplyCloneObject** autocomplete imitator
- **fo** Live template has been replaced with **formatObject** autocomplete imitator
- **gnnovc** Live template has been replaced with **getObjectNonNullValuesCount** autocomplete imitator
- **govbdsps** Live template has been replaced with **getObjectValueByDotSeparatedPathSafely** autocomplete imitator
- **iosnv** Live template has been replaced with **iterateObjectSkippingNullValues** autocomplete imitator
- **oo** Live template has been replaced with **overrideObject** autocomplete imitator


## [0.0.8]

### Added

- **BordersSizingSpecificationSchema--YDF** - autocomplete imitator type Live template for eponymous object
- **fs** - accessing to selected value of `YDF_Configuration.fontsStacks` associative array
- **isIdentifier** autocomplete imitator type Live template for the eponymous function
- **isObject** autocomplete imitator type Live template for the eponymous function
- **oydfc** - overriding of `YDF_Configuration` object
- **PaddingsSpecificationSchema--YDF** - autocomplete imitator type Live template for eponymous object
- **tg** - accessing to selected value of `YDF_Configuration.textGeometry` associative array
- **TextElementHeightSizingSpecificationSchema--YDF** - autocomplete imitator type Live template for eponymous object
- **WidthSizingSpecificationSchema--YDF** - autocomplete imitator type Live template for eponymous object
- **ydfc** - autocomplete for `YDF_Configuration` object


### Changed 

- **zi**, previously the live template for the `ZIndexes` associative array-like mutable object, now associated with similar `YDF_Configuration.zIndexes` object 
- Drop support for IntelliJ IDEA 2022.X

### Removed

- **MAIN_SANS_SERIF_FONT_STACK** - autocomplete imitator for eponymous variable
- **MAIN_SERIF_FONT_STACK** - autocomplete imitator for eponymous variable
- **MAIN_MONOSPACED_FONT_STACK** - autocomplete imitator for eponymous variable
- **MAIN_FONT_STACK** - autocomplete imitator for eponymous variable
- **BASIC_FONT_SIZE** - autocomplete imitator for eponymous variable
- **BASIC_LINE_HEIGHT** - autocomplete imitator for eponymous variable
- **BASIC_LINE_HEIGHT_IN_MULTILINE_TEXT_BLOCKS** - autocomplete imitator for eponymous variable
- **BASIC_FONT_SIZE_IN_MULTILINE_TEXT_BLOCKS** - autocomplete imitator for eponymous variable
- **BEM_ELEMENT_SEPARATOR** - autocomplete imitator for eponymous variable
- **BEM_MODIFIER_SEPARATOR** - autocomplete imitator for eponymous variable


## [0.0.7]

### Added

- **th-bgc** - same as **th**, but in the position of the value of `background-color` property

### Changed

- Some elements of <kbd>dt</kbd> live template has been updated according 2.X API of **@yamato-daiwa/frontend**. 
- **th** has been updated according 2.X API of **@yamato-daiwa/frontend**.

### Removed

- **isDimensionalOrDimensionlessAmount** has been replaced with **isDimensionalOrDimensionlessQuantity**
- **isDimensionalAmount** has been replaced with **isDimensionalQuantity**
- **isDimensionlessAmount** has been replaced with **isDimensionlessQuantity**


## [0.0.6]

### Added

- Support IntelliJ IDEA platform build 232 
- [File template](https://www.jetbrains.com/help/idea/using-file-and-code-templates.html) for **Badge** components styles customization
- **buildEmailLinkHREF_AttributeValue** - autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildEmailLinkHrefAttributeValue/buildEmailLinkHrefAttributeValue.english.html)
- **buildPhoneNumberLinkHrefAttributeValue** - autocomplete imitator for [eponymous function](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildPhoneNumberLinkHrefAttributeValue/buildPhoneNumberLinkHrefAttributeValue.english.html)

### Changed

- Update **badge-ydf** and **badge-lp-ydf** Live templates
- Update <kbd>badge-ydf-vue</kbd>, <kbd>badge-lp-ydf-vue</kbd> - live templates for the Vue adaptation **Badge** component and its loading placeholder respectively
- Remove `screen` keyword from <kbd>med2p</kbd>, <kbd>med3p</kbd>, <kbd>med4p</kbd>, <kbd>med5px</kbd> live templates
- Improve <kbd>fbv</kbd> live template


## [0.0.5]
### Changed

- Support the IntelliJ IDEA platform 2023.1


## [0.0.4]
### Added

- **badge-ydf**, **badge-lp-ydf** — Live templates for the inserting of invocation of **Badge--YDF** and
    **Badge--YDF-LoadingPlaceholder** Pug mixins corresponding to **Badge** component and its loading placeholder
    respectively
- <kbd>badge-ydf-vue</kbd>, <kbd>badge-lp-ydf-vue</kbd> - live templates for the Vue adaptation **Badge** component and its loading placeholder respectively
- <kbd>dius</kbd> - **DummyImagesURIs** enumeration
- <kbd>hd</kbd> - live template inserting the heading tag and dedicated CSS class provided by <code>provideYDF_Typography</code> Stylus mixin
- <kbd>ossll</kbd> (Markup) - live template for **OverflowSafeSingleLineLabel** component markup 
- <kbd>ossll</kbd> (Styles) - live template for **OverflowSafeSingleLineLabel** component styles
- <kbd>ossll</kbd> (Vue) - live template for Vue adaptation of **OverflowSafeSingleLineLabel** component
- <kbd>par</kbd> - live template inserting the <code>p</code> tag and dedicated CSS class provided by <code>provideYDF_Typography</code> Stylus mixin
- <kbd>shd</kbd> - live template inserting the <code>div</code> tag with subheading CSS class provided by <code>provideYDF_Typography</code> Stylus mixin
- <kbd>ydfcp</kbd> - live template for YDF Color Palette


## [0.0.3]
### Added

- <kbd>tost</kbd> - live template for [**textOverflowSafetyTest** constant](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Markup/ConstantsAssets/textOverflowSafetyTest/textOverflowSafetyTest.md)
- <kbd>pl</kbd> - live template for [**PageLink**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/PagesTemplates/StaticPreviewAnywherePage/StaticPreviewAnywherePage.md#pagelink) mixin usage
- <kbd>plg</kbd> - live template for [**PagesLinksGroup**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/PagesTemplates/StaticPreviewAnywherePage/StaticPreviewAnywherePage.md#pagelinksgroup) mixin usage
- <kbd>dt</kbd> - live template for [**DataTypes**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#datatypes---stylus-data-types) enumeration
- <kbd>nswu</kbd> - live template for [**NARROWEST_SCREEN_WIDTH_UNIT**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#narrowest_screen_width_unit---the-narrowest-screen-width-unit) constant
- <kbd>sogw3c</kbd> - live template for [**ShadesOfGray__W3C_Palette**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/W3C_39_ShadesOfGray.md) array
- <kbd>th</kbd> - live template for [**TemporaryHighlighting**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/TemporarySemitransparentHighlighting.md) object
- <kbd>pccs</kbd> - live template for [**PracticalColorCoordinateSystem**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/PracticalColorCoordinateSystem.md) object
- <kbd>fuic</kbd> - live template for [**FlatUI_Colors**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/03-BuildInPlugins/ColorPalettes/FlatUI/FlatUI_ColorsPalette.md) enumeration
- <kbd>zi</kbd> - live template for [**ZIndexes**](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/01-BasicVariables/01-BasicVariables.md#zindexes) mutable object
- <kbd>MAIN_SANS_SERIF_FONT_STACK</kbd> - autocomplete imitator for eponymous variable
- <kbd>MAIN_SERIF_FONT_STACK</kbd> - autocomplete imitator for eponymous variable
- <kbd>MAIN_MONOSPACED_FONT_STACK</kbd> - autocomplete imitator for eponymous variable
- <kbd>MAIN_FONT_STACK</kbd> - autocomplete imitator for eponymous variable
- <kbd>BASIC_FONT_SIZE</kbd> - autocomplete imitator for eponymous variable
- <kbd>BASIC_LINE_HEIGHT</kbd> - autocomplete imitator for eponymous variable
- <kbd>BASIC_FONT_SIZE_IN_MULTILINE_TEXT_BLOCKS</kbd> - autocomplete imitator for eponymous variable
- <kbd>BASIC_LINE_HEIGHT_IN_MULTILINE_TEXT_BLOCKS</kbd> - autocomplete imitator for eponymous variable
- <kbd>BEM_ELEMENT_SEPARATOR</kbd> - autocomplete imitator for eponymous variable
- <kbd>BEM_MODIFIER_SEPARATOR</kbd> - autocomplete imitator for eponymous variable
- **isNull** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isnull--isnotnull)
- **isNotNull** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isnull--isnotnull)
- **isString** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **isEmptyString** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **isNonEmptyString** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **isDimensionalOrDimensionlessAmount** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isdimensionalamount--isdimensionlessamount--isdimensionalordimensionlessamount)
- **isDimensionalAmount** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isdimensionalamount--isdimensionlessamount--isdimensionalordimensionlessamount)
- **isDimensionlessAmount** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isdimensionalamount--isdimensionlessamount--isdimensionalordimensionlessamount)
- **isNaturalNumber** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#isnaturalnumber)
- **isTrue** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#istrue--isfalse)
- **isFalse** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md#istrue--isfalse)
- **isBoolean** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **isObject** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **isIdentifier** - autocomplete imitator for [eponymous value checker](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/01-ValueCheckers.md)
- **emptyStringToNull** — autocomplete imitator type Live template for the eponymous function
- **nullToZero** — autocomplete imitator type Live template for the eponymous function
- **nullToEmptyString** — autocomplete imitator type Live template for the eponymous function
- **nullToEmptyObject** — autocomplete imitator type Live template for the eponymous function
- **bs** — live template for [buildString](https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/Strings/buildString/buildString.english.html) function
- **cflc** — live template for [capitalizeFirstLatinCharacter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/03-Strings/capitalizeFirstLatinCharacter.md) function
- <kbd>dcaoo</kbd> - live template for [deeplyCloneAndOverrideObject](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/deeplyCloneAndOverrideObject.md) function
- <kbd>dco</kbd> - live template for [deeplyCloneObject](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/deeplyCloneObject.md) function
- <kbd>fo</kbd> - live template for [formatObject](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/formatObject.md) function
- <kbd>gnnovc</kbd> - live template for [getObjectNonNullValuesCount](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/getObjectNonNullValuesCount.md) function
- <kbd>govbdsps</kbd> - live template for [getObjectValueByDotSeparatedPathSafely](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/getObjectValueByDotSeparatedPathSafely.md) function
- <kbd>iosnv</kbd> - live template for [iterateObjectSkippingNullValues](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/iterateObjectSkippingNullValues.md) function
- <kbd>oo</kbd> - live template for [overrideObject](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/04-Objects/overrideObject.md) function
- <kbd>arrayConstructor__POLYFILL</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/arrayConstructor__POLYFILL.md)
- <kbd>getFirstNonNullArrayElement</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/getFirstNonNullArrayElement.md)
- <kbd>getLengthOfPrimitivesArray</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/getLengthOfPrimitivesArray.md)
- <kbd>hasPrimitivesArraySpecifiedElement</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/hasPrimitivesArraySpecifiedElement.md)
- <kbd>iterate2DimensionalArray</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/iterate2DimensionalArray.md)
- <kbd>iterateAssociativeArray</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/05-Arrays/iterateAssociativeArray.md)
- <kbd>votp</kbd> - live template for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
- <kbd>votp-a</kbd> - live template for amount property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
- <kbd>votp-s</kbd> - live template for string property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
- <kbd>votp-p</kbd> - live template for any other property specification for [validateObjectTypeParameter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/06-ParametersValidation/validateObjectTypeParameter.md) function
- <kbd>bbcn</kbd> - live template for [buildBEM_ClassName](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/buildBEM_ClassName.md) function
- <kbd>sn</kbd> - live template for [substituteNull](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/substituteNull.md) function
- <kbd>bce</kbd> - live template for [buildCalcExpression](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/buildCalcExpression.md) function
- <kbd>log</kbd> - autocomplete imitator for [log](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/02-Functions/07-OtherFunctions/log.md) function
- <kbd>ainn</kbd> - live template for [applyIfNotNull](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/00-GeneralUtils/applyIfNotNull.md) mixin
- <kbd>ainz</kbd> - live template for [applyIfNotZero](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/00-GeneralUtils/applyIfNotZero.md) mixin
- <kbd>ws</kbd> - live template for [widthSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/WidthSizing.md) mixin
- <kbd>fillViewportWidthIgnoringParentPaddings</kbd> - autocomplete imitator for [eponymous function](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/fillViewportWidthIgnoringParentPaddings.md)
- <kbd>tcws</kbd> - [TableCellWidthSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/01-Width/TableCellWidthSizing.md) mixin
- <kbd>bds</kbd> - live template for [BordersSizing](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/03-Borders/BordersSizing.md) mixin
- <kbd>bfr</kbd> - unified template for [4 mixins for the border fillets radius defining](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/03-Borders/BordersFilletsRadius.md) mixin
- <kbd>pd</kbd> - live template for [Paddings](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/04-Paddings/Paddings.md) mixin
- <kbd>chww</kbd> - live template for [centerHorizontallyWithoutWrapper](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/centerHorizontallyWithoutWrapper.md) mixin
- <kbd>ptr</kbd> - live template for [placeToRight](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/placeToRight.md) mixin
- <kbd>vcapb</kbd> - template for [VerticallyCenteredAbsolutelyPositionedBlock](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/02-Positioning/VerticallyCenteredAbsolutelyPositionedBlock.md) mixin
- <kbd>ccwchp</kbd> - live template for [CenteredContentWithComputedHorizontalPaddings](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/CenteredContentWithComputedHorizontalPaddings.md) mixin
- <kbd>cnt</kbd> - live template for [Centerer](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/Centerer.md) mixin
- <kbd>fbv</kbd> - live template for [fillBodyVertically](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/fillBodyVertically.md) mixin
- <kbd>ftdl</kbd> - live template for [bds](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/05-Layout/FixedTranslucentDimLayer.md) mixin
- <kbd>slteos</kbd> - live template for [SingleLineTextElementOverflowSafety](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/05-TypographyUtils/SingleLineTextElementOverflowSafety.md) mixin
- <kbd>mlt</kbd> - live template for [MultiLineTextElementOverflowSafetyWithoutExtraSpaceCausedByLineHeight](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/05-TypographyUtils/MultiLineTextElementOverflowSafetyWithoutExtraSpaceCausedByLineHeight.md) mixin
- <kbd>pcsaov</kbd> - live template for [provideClippedShadowsAndOutlinesVisibility](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/06-RestUtils/provideClippedShadowsAndOutlinesVisibility.md) mixin
- <kbd>sprt</kbd> - live template for [Sprite](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/06-RestUtils/Sprite.md) mixin
- <kbd>si</kbd> - live template for [InitialGlobalCSS_Rules--YDF](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/InitialGlobalCSS_Rules.md) and [CrossBrowserStylesReset--YDF](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/CrossBrowserStylesReset.md) mixins
- <kbd>blep</kbd> - live template for [ButtonLikeElementsPrimer--YDF`](https://github.com/TokugawaTakeshi/yamato_daiwa-frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/ButtonLikeElementsPrimer.md) mixins
- <kbd>med2c</kbd> - the media queries definitions for 2-pattern layout
- <kbd>med3c</kbd> - the media queries definitions for 3-patterns layout
- <kbd>med4c</kbd> - the media queries definitions for 4-patterns layout
- <kbd>med3c</kbd> - the media queries definitions for 5-patterns layout
- <kbd>wsc</kbd> - Inserts **+WideScreensConfiguration()** block mixin invocation (must be preliminarily defined)
- <kbd>msc</kbd> - Inserts **+MediumScreensConfiguration()** block mixin invocation (must be preliminarily defined)
- <kbd>nsc</kbd> - Inserts **+NarrowScreensConfiguration()** block mixin invocation (must be preliminarily defined)
- <kbd>wmsc</kbd> - Inserts **+WideAndMediumScreensConfiguration()** block mixin invocation (must be preliminarily defined)
- <kbd>mnsc</kbd> - Inserts **+MediumAndNarrowScreensConfiguration()** block mixin invocation (must be preliminarily defined)
- <kbd>iydf</kbd> - live template inserting the import (from **@yamato-daiwa/frontend** package) declaration


### Removed

- <kbd>cbsr</kbd> - live template [CrossBrowserStylesReset--YDF](https://github.com/TokugawaTakeshi/yamato_daiwa-frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/CrossBrowserStylesReset.md) mixin; replaced with <kbd>si</kbd> 
- <kbd>igcr</kbd> - live template [InitialGlobalCSS_Rules--YDF](https://github.com/TokugawaTakeshi/yamato_daiwa-frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/04-StylesInitialization/InitialGlobalCSS_Rules.md) mixin; replaced with <kbd>si</kbd> 
- Drop support of IntelliJ IDEA 2021.X


## [0.0.2]
### Added 

- <kbd>pd</kbd> - live template for [Paddings](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/01-Sizing/04-Paddings/Paddings.md) mixin
- <kbd>wigf</kbd> - live template for [whenItGoingFirst](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitgoingfirst-mixin) mixin
- <kbd>wigl</kbd> - live template for [whenItGoingLast](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitgoinglast-mixin) mixin
- <kbd>wija</kbd> - live template for [whenItJustAfter](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whenitjustafter) mixin
- <kbd>wtgjai</kbd> - live template for [whenTargetGoingJustAfterIt](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whentargetgoingjustafterit) mixin
- <kbd>wtwssgjat</kbd> - live template for [whenTargetWithSameSelectorGoingJustAfterIt](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/Documentation/Styles/02-Kernel/03-UtilityMixins/03-PositionalRelationship.md#whentargetwithsameselectorgoingjustafterit) mixin
