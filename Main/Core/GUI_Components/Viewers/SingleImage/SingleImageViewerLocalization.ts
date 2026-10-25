export type SingleImageViewerLocalization = Readonly<{

  buttons: Readonly<{

    [
      key in
          "fullScreenViewActivating" |
          "fullScreenViewDeactivating" |
          "zoomingIn" |
          "zoomingOut" |
          "widthFitting" |
          "heightFitting" |
          "fitting"
    ]: Readonly<{ label: string; }>

  }>;

}>;
