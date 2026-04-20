const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [

  {
    ignores: [
      "LogicDistributable/",
      "Tests/Build/",
      "Workbenches/Build/",
      "Markup/InlineECMAScript/Temporary/"
    ]
  },

  ...YamatoDaiwaStyleGuides,

  /* Not actual for Browser JavaScript. */
  {

    files: [
      "Animations/**",
      "Logic/**",
      "GUI_Components/**"
    ],

    rules: {
      "n/no-unsupported-features/node-builtins": "off"
    }

  }

];
