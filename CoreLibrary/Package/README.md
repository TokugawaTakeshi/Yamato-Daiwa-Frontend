# Yamato Daiwa Frontend (YDF)

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@yamato-daiwa/frontend)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/README.md)
[![MIT](https://img.shields.io/badge/MIT-green?style=for-the-badge)](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/master/CoreLibrary/Package/LICENSE)

[![Pug](https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black)](https://pugjs.org/api/getting-started.html)
[![Stylus](https://img.shields.io/badge/Stylus-333333?style=for-the-badge&logo=stylus&logoColor=white)](https://stylus-lang.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![IntelliJ IDEA plugin](https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

[![NPM Version](https://img.shields.io/npm/v/@yamato-daiwa/frontend)](https://www.npmjs.com/package/@yamato-daiwa/frontend)
![No any type](https://img.shields.io/badge/Type_safety-No_any-brightgreen.svg?style=flat)

[![GitHub Sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend?sponsor=1)
[![PAYPAL](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/tokugawatakeshi)
[![LIBERAPAY](	https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)](https://liberapay.com/TokugawaT-YD)

The toolkit for the high-quality frontend development with [Pug](https://pugjs.org/api/getting-started.html), 
  [Stylus](https://github.com/stylus/stylus/) pre-processors and [TypeScript](https://www.typescriptlang.org/).

![Hero image of @yamato-daiwa/frontend](https://repository-images.githubusercontent.com/376180981/885d8a83-98a8-47d0-b2e2-5abf042ef184)


## Installation

```
npm i @yamato-daiwa/frontend -E
```

To avoid the API incompatability problems and for the optimization purposes, the
  [@yamato-daiwa/es-extensions](https://www.npmjs.com/package/@yamato-daiwa/es-extensions) and 
  [@yamato-daiwa/es-extensions-browserjs](https://www.npmjs.com/package/@yamato-daiwa/es-extensions-browserjs)
  of version **1.9.0** or patch one of this version has been made peer dependencies.
For modern version of **npm**, basically these dependencies will be installed automatically without warnings.


## Documentation

### Pug Markup

#### Functionality

##### Inline JavaScript 

+ [YDEE Integration](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/YDEE_Integration/YDEE_Integration.english.html)


###### Functions and Classes

+ [`buildEmailLinkHrefAttributeValue`](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildEmailLinkHrefAttributeValue/buildEmailLinkHrefAttributeValue.english.html)
+ [`buildPhoneNumberLinkHrefAttributeValue`](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/buildPhoneNumberLinkHrefAttributeValue/buildPhoneNumberLinkHrefAttributeValue.english.html)
+ [`processObjectTypeParameterOfPugMixin`](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/FunctionsAndClasses/processObjectTypeParameterOfPugMixin/processObjectTypeParameterOfPugMixin.english.html)


###### Assets

+ [`DummyImageURLs`](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/Functionality/InlineJavaScript/Assets/DummyImagesURIs/DummyImagesURIs.english.html)


##### Pages Templates 

+ [`RegularWebPageTemplate`](https://frontend.yamato-daiwa.com/CoreLibrary/PagesTemplates/Children/RegularWebPage/RegularWebPageTemplate.english.html)
+ [`StaticPreviewAnywherePageTemplate`](https://frontend.yamato-daiwa.com/CoreLibrary/PagesTemplates/Children/StaticPreviewAnywherePage/StaticPreviewAnywherePageTemplate.english.html)


##### Other

+ [Usage on Server Side](https://frontend.yamato-daiwa.com/CoreLibrary/Markup/UsageOnServerSide/UsageOnServerSide.english.html)


### Styles
#### Assets

##### Fundamental Constants and Enumerations

+ [`DataTypes--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#datatypes--ydf---stylus-data-types)
+ [`NARROWEST_SCREEN_WIDTH_UNIT--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#narrowest_screen_width_unit--ydf---the-narrowest-screen-width-unit)
+ [`SMALLEST_DIVISION_OF_CSS_PIXEL--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/01-FundamentalConstantsAndEnums/FundamentalConstantsAndEnums.md#smallest_division_of_css_pixel--ydf---the-smallest-division-of-css-pixel)

##### Colors

+ [`PracticalColorCoordinateSystem--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/PracticalColorCoordinateSystem.md)
+ [`TemporarySemitransparentHighlighting--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/TemporarySemitransparentHighlighting.md)
+ [`W3C_39_ShadesOfGray--YDF`](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Documentation/Styles/01-Assets/02-Colors/W3C_39_ShadesOfGray.md)  


#### Kernel

+ [Configuration](https://github.com/TokugawaTakeshi/Yamato-Daiwa-Frontend/blob/%40v2.0/CoreLibrary/Package/Styles/02-Kernel/01-Configuration.styl)


###### Functions

###### Value Checkers

<dl>

  <dt>Strings</dt>
  <dd>
    <ul>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isEmptyString--SECTION"><code>isEmptyString</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNonEmptyString--SECTION"><code>isNonEmptyString</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isString--SECTION"><code>isString</code></a></li>
    </ul>
  </dd>

  <dt>Quantities</dt>
  <dd>
    <ul>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionalOrDimensionlessQuantity--SECTION"><code>isDimensionalOrDimensionlessQuantity</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionalQuantity--SECTION"><code>isDimensionalQuantity</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isDimensionlessQuantity--SECTION"><code>isDimensionlessQuantity</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNaturalNumber--SECTION"><code>isNaturalNumber</code></a></li>
    </ul>
  </dd>

  <dt>Booleans</dt>
  <dd>
    <ul>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isBoolean--SECTION"><code>isBoolean</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isFalse--SECTION"><code>isFalse</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isTrue--SECTION"><code>isTrue</code></a></li>
    </ul>
  </dd>

  <dt>Nullables</dt>
  <dd>
    <ul>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNotNull--SECTION"><code>isNotNull</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isNull--SECTION"><code>isNull</code></a></li>
    </ul>
  </dd>

  <dt>Others</dt>
  <dd>
    <ul>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isCalcExpression--SECTION"><code>isCalcExpression</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isFunction--SECTION"><code>isFunction</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isIdentifier--SECTION"><code>isIdentifier</code></a></li>
      <li><a href="https://frontend.yamato-daiwa.com/CoreLibrary/Styles/Kernel/Functions/TypeCheckers/TypeCheckers.english.html#isObject--SECTION"><code>isObject</code></a></li>
    </ul>
  </dd>

</dl>


##### GUI Components

+ [AdmonitionBlock](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/AdmonitionBlock/AdmonitionBlock.english.html)
+ [Badge](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Badge/Badge.english.html)

###### Controls

+ Buttons 
  + [Plain (Button)](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Controls/Buttons/Plain/Button.english.html)
+ [ValidatableControlShell](https://frontend.yamato-daiwa.com/CoreLibrary/GUI_Components/Children/Controls/ValidatableControlShell/ValidatableControlShell.english.html)
+ Validatables
  + [TextBox](https://frontend.yamato-daiwa.com/AdaptationsToFrameworks/Vue/GUI_Components/Children/Controls/Validatables/Children/TextBox/TextBox-Vue.english.html)
