<template lang="pug">

  Snackbar

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { Snackbar } from "../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";

  /* ─── Utils ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  import AccessibleFromTemplateAsNonReactive
      from "../../../../Source/GUI_Components/_Decorators/AccessibleFromTemplateAsNonReactive";


  @VueComponentOptions({
    name: "SnackbarWorkbench",
    components: {
      Snackbar
    }
  })
  class SnackbarWorkbench extends VueComponent {

    @AccessibleFromTemplateAsNonReactive
    protected static readonly Snackbar: typeof Snackbar = Snackbar;

  }

  export default transformToOptionAPI_VueComponent(SnackbarWorkbench);

</script>


<style lang="stylus">

  @require "../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset--YDF()
  InitialGlobalCSS_Rules--YDF()


  Snackbar--YDF-generateStyles()

</style>
