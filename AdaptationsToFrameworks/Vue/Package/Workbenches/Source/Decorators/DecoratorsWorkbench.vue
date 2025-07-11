<template lang="pug">

  button(
    type="button"
    @click="updateFields"
  ) Change

  span {{ reactiveFiled }}
  span {{ nonReactiveFiled }}

  span {{ staticField1 }}
  span {{ staticField2 }}

</template>


<script lang="ts">

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";

  /* ─── Utils ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    AccessibleFromTemplateAsNonReactive,
    NonReactiveVueData
  } from "../../../Source";

  @VueComponentOptions({ name: "DecoratorsWorkbench" })
  class DecoratorsWorkbench extends VueComponent {

    protected reactiveFiled = "ALPHA";

    @NonReactiveVueData("ALPHA")
    protected nonReactiveFiled!: string;

    @AccessibleFromTemplateAsNonReactive
    protected static staticField1: string = "STATIC_FIELD_1";

    @AccessibleFromTemplateAsNonReactive
    protected static staticField2: string = "STATIC_FIELD_2";

    protected updateFields(): void {
      this.reactiveFiled = "BRAVO";
      this.nonReactiveFiled = "CHARLIE";
      DecoratorsWorkbench.staticField1 = "UPDATED_STATIC_FIELD_1";
      DecoratorsWorkbench.staticField2 = "UPDATED_STATIC_FIELD_2";
    }

  }

  export default transformToOptionAPI_VueComponent(DecoratorsWorkbench);

</script>


<style lang="stylus">

  @require "../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()

</style>
