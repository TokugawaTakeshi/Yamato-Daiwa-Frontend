import ModalDialogBase from "./ModalDialog.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class ModalDialog extends ModalDialogBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    theme: {
      type: String,
      undefinedValueSubstitution: ModalDialog.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ModalDialog.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ModalDialog.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: ModalDialog.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: ModalDialog.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ModalDialog.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ModalDialog.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: ModalDialog.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ModalDialog.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ModalDialog.DecorativeVariations.${ key }`, value })
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
