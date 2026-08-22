const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [

  {
    ignores: [
      "Distributions/*",
      "LocalGalleriesBuild/*"
    ]
  },

  ...YamatoDaiwaStyleGuides,

  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.eslint.json"
      }
    }
  },

  {
    files: [ "eslint.config.js" ],
    rules: {
      "n/no-unpublished-require": "off"
    }
  },

  {
    files: [ "YDF_VueAdaptationPackageDebuggingProvider.ts" ],
    rules: {

      "n/no-unpublished-import": "off",

      "n/no-unsupported-features/node-builtins": [
        "error",
        { version: ">=22.3.0" }
      ]

    }
  }

];
