import type { Vue as VueComponent } from "vue-facing-decorator";


class Snackbar extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

}


namespace Snackbar {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

}


export default Snackbar;
