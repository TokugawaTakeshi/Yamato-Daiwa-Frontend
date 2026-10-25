import BlockingLoadingOverlayBase from "./BlockingLoadingOverlay.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class BlockingLoadingOverlay extends BlockingLoadingOverlayBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    loadingIndicatorType: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      minimalCharactersCount: 1
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    displaying: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    }

  };

}
