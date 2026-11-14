# LanguageDropDownList

Highly specialized drop down only for language selecting.
It is implied that once other language will be selected, the redirection will occur thus no need in JavaScript
  processings anymore.


## Usage

### Markup

#### Initialization

Before invoke the mixin, the initialization must be executed.

##### Common part

```pug
LanguageDropDownList__YDF_DK.initialize({
  english: {
    localizedName: "English",
    SVG_FlagHTML_ID: "FLAG_OF_UNITED_KINGDOM--SVG_IMAGE"
  },
  japanese: {
    localizedName: "日本語",
    SVG_FlagHTML_ID: "FLAG_OF_JAPAN--SVG_IMAGE"
  },
  russian: {
    localizedName: "Русский",
    SVG_FlagHTML_ID: "RUSSIAN_FLAG--SVG_IMAGE"
  }
});
```

##### Page-dependent part

```pug
-

  LanguageDropDownList__YDF_DK.setLinks({
    english: "./addElementsToArray.english.html",
    japanese: "./addElementsToArray.japanese.html"
  });
```

#### Mixin invocation

```pug
+LanguageDropDownList--YDF_DK.Header--YDPD-DropDownList#LANGUAGE_DROP_DOWN_LIST
    +Japan__2x3--FlagSVG_Icon#FLAG_OF_JAPAN--SVG_IMAGE
    +Russia__2x3--FlagSVG_Icon#RUSSIAN_FLAG--SVG_IMAGE
    +UnitedKingdom__2x3--FlagSVG_Icon#FLAG_OF_UNITED_KINGDOM--SVG_IMAGE
```


### Styles

The styles could be customized as below.

```stylus
provideLanguageDropDownListYDF_DK_Component({

  borderColor: YDF_ColorPalette.deepSkyBlue.bright,
  textColor: YDF_ColorPalette.deepSkyBlue.mediumDark,
  backgroundColor: YDF_ColorPalette.deepSkyBlue.pastelMediumLight,

  stateDependent: {
    hover: {
      backgroundColor: YDF_ColorPalette.deepSkyBlue.pastelBright
    },
    focus: {
      shadowColor: YDF_ColorPalette.deepSkyBlue.bright
    },
    active: {
      textColor: white,
      backgroundColor: YDF_ColorPalette.deepSkyBlue.mediumDark
    }
  }

})
```


### Logic

```typescript
LanguageDropDownList.pickBySelector("#LANGUAGE_DROP_DOWN_LIST");
```
