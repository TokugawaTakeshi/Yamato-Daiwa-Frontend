import CodeViewerBase from "./CodeViewer.base";
import CodeViewerDOM_AccessResources from "./CodeViewerDOM_AccessResources";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class CodeViewer extends CodeViewerBase {

  public static readonly DOM_AccessResources: CodeViewerDOM_AccessResources = CodeViewerDOM_AccessResources;


  /* ━━━ Properties Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    title: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    resultWebViewURI: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    inlineFrameTitle: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    defaultPaddingsInViewport: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    }

  };

  public static readonly tabPanelPropertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    fileLabel: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    isActive: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    codeLanguage: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives:
          Object.
              entries(CodeViewer.SupportedCodesLanguages).
              map(
                ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                    ({ key: `CodeViewer.SupportedCodesLanguages.${ key }`, value })
              )

    }

  };

}
