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
  },

  {
    files: [
      "Source/GUI_Components/_VuePropertiesValidators/VuePropertyValidator.ts",
      "Source/GUI_Components/Controls/Validatables/ValidatableControl.ts"
    ],
    rules: {

      /* The merging of type/interface and namespace is completely valid TypeScript,
       * but @typescript-eslint community does not wish to support it.
       * https://github.com/eslint/eslint/issues/15504 */
      "@typescript-eslint/no-redeclare": "off"

    }
  },

  /* Not actual for Browser JavaScript. */
  {

    files: [
      "Source/**",
      "Workbenches/**"
    ],

    rules: {
      "n/no-unsupported-features/node-builtins": "off"
    }

  }

];
