import DrawerMenuBase from "./DrawerMenu.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class DrawerMenu extends DrawerMenuBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    theme: {
      type: String,
      undefinedValueSubstitution: DrawerMenu.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DrawerMenu.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DrawerMenu.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: DrawerMenu.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: DrawerMenu.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DrawerMenu.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DrawerMenu.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: DrawerMenu.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DrawerMenu.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DrawerMenu.DecorativeVariations.${ key }`, value })
          )
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    opened: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    }

  };

}
