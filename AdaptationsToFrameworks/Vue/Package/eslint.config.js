const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [

  {
    ignores: [
      ".idea/",
      "Distributable/**",
      "Workbenches/Build/"
    ]
  },

  ...YamatoDaiwaStyleGuides,

  {
    files: [ "Source/SVG_Icons/**/*.vue" ],
    rules: {

      /* The imports from Pug could be long but could not be split */
      "@stylistic/max-len": "off",

      /* The import from the Pug must not be counted as element */
      "vue/valid-template-root": "off"

    }
  }

];
