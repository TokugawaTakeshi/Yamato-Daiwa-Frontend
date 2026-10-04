import type { Vue as VueComponent } from "vue-facing-decorator";


class BlockingLoadingOverlay extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static display(options: Readonly<{ customAccessibilityGuidance?: string; }>): void;

  public static hide(): void;

}


namespace BlockingLoadingOverlay {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

}


export default BlockingLoadingOverlay;
