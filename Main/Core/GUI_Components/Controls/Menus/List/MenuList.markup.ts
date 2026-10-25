import MenuListBadge from "./MenuList.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class MenuList extends MenuListBadge {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    theme: {
      type: String,
      undefinedValueSubstitution: MenuList.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(MenuList.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `MenuList.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: MenuList.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: MenuList.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(MenuList.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `MenuList.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: MenuList.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(MenuList.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `MenuList.DecorativeVariations.${ key }`, value })
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
