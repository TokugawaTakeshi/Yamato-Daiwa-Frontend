const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [

  {
    ignores: [
      ".idea/",
      "Distributable/",
      "Tests/Build/"
    ]
  },

  ...YamatoDaiwaStyleGuides,

  {
    files: [ "Source/GUI_Components/**/*.tsx", "Source/SVG_Icons/**/*.tsx" ],
    rules: {

    /* The merging of type/interface/class/function and namespace is completely valid TypeScript, but
     * @typescript-eslint community does not wish to support it.
     * https://github.com/eslint/eslint/issues/15504 */
    "@typescript-eslint/no-redeclare": "off"

    }
  },

  {
    files: [ "Source/GUI_Components/**/*.tsx" ],
    rules: {

      /* The ordering by access modifiers basically is not suited with GUI components classes */
      "@typescript-eslint/member-ordering": "off"
    }
  },

  {
    files: [ "Source/SVG_Icons/**/*.tsx" ],
    rules: {

      /* The imports from Pug could be long but could not be split */
      "@stylistic/max-len": "off"
    }
  }

];
