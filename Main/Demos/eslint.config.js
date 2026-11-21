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
    files: [ "eslint.config.js" ],
    rules: {
      "n/no-unpublished-require": "off"
    }
  },

  {
    files: [ "PartialDemosGenerator.ts" ],
    rules: {
      "n/no-unpublished-import": "off"
    }
  }

];
