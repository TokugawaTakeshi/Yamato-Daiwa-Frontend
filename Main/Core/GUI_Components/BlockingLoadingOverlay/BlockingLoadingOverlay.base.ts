import BlockingLoadingOverlayLocalization__English from "./BlockingLoadingOverlayLocalization.english";


export abstract class BlockingLoadingOverlay {

  public static localization: BlockingLoadingOverlay.Localization =
      BlockingLoadingOverlayLocalization__English;

}


export namespace BlockingLoadingOverlay {

  export type Localization = Readonly<{ defaultAccessibilityGuidance: string; }>;

}


export default BlockingLoadingOverlay;
