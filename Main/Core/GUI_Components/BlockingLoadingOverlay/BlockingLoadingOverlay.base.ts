import BlockingLoadingOverlayYDF_GUI_ComponentLocalization__English from "./BlockingLoadingOverlayLocalization.english";


export abstract class BlockingLoadingOverlay {

  public static localization: BlockingLoadingOverlay.Localization =
      BlockingLoadingOverlayYDF_GUI_ComponentLocalization__English;

}


export namespace BlockingLoadingOverlay {

  export type Localization = Readonly<{ defaultAccessibilityGuidance: string; }>;

}


export default BlockingLoadingOverlay;
