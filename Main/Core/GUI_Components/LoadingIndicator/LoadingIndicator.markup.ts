import LoadingIndicatorBase from "./LoadingIndicator.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export class LoadingIndicator extends LoadingIndicatorBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    type: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.values(LoadingIndicator.Types)
    }

  };

}
