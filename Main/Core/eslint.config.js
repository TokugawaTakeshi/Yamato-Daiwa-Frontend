const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [

  {
    ignores: [
      "LogicDistributable/",
      "Tests/Build/",
      "Workbenches/Build/",
      "Markup/InlineECMAScript/Temporary/",
      ".idea"
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

  },

  /* Organizing of members by semantic categories. */
  {

    files: [
      "GUI_Components/**/*base.ts",
      "GUI_Components/**/*markup.ts"
    ],

    rules: {
      "@typescript-eslint/member-ordering": "off"
    }

  },

  /* [ Local Convention] Allow eponymous type and single-instance object type structure-like variable. */
  {

    files: [ "GUI_Components/**/*DOM_AccessResources.ts" ],

    rules: {
      "@typescript-eslint/no-redeclare": "off"
    }

  },

  /* [ Local Convention] Allow leading underscore for the specified below properties which have eponymous getters. */
  {

    files: [ "GUI_Components/**/*base.ts" ],

    rules: {
      "no-underscore-dangle": [
        "warn",
        {
          allow: [
            "_selfAndChildrenComponentsThemesCorrespondence",
            "_selfAndChildrenComponentsGeometricVariationsCorrespondence",
            "_selfAndChildrenComponentsDecorativeVariationsCorrespondence"
          ]
        }
      ]
    }

  }

];
