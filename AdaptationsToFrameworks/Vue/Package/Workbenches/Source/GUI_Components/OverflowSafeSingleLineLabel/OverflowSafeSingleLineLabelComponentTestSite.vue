<template lang="pug">

.TestSite

  OverflowSafeSingleLineLabel.PlainLabelTest
    | YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa

  dl.DefinitionsListTest
    dt.DefinitionsListTest-Key ID
    OverflowSafeSingleLineLabel.DefinitionsListTest-Value(rootElementTag="dd")
      | YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa
    dt.DefinitionsListTest-Key Displaying name
    OverflowSafeSingleLineLabel.DefinitionsListTest-Value(rootElementTag="dd")
      | YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa

</template>


<script lang="ts">

  /* ─── GUI GUI_Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { OverflowSafeSingleLineLabel } from "../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentOptions({
    name: "OverflowSafeSingleLineLabelComponentTestSite",
    components: {
      OverflowSafeSingleLineLabel
    }
  })
  class OverflowSafeSingleLineLabelComponentTestSite extends VueComponent {}

  export default transformToOptionAPI_VueComponent(OverflowSafeSingleLineLabelComponentTestSite);

</script>


<style lang="stylus">

  @require "../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  OverflowSafeSingleLineLabel--YDF-generateStyles()


  .TestSite

    width 320px
    padding-top 24px

    margin-left auto
    margin-right auto

    background tan


  .PlainLabelTest

    OverflowSafeSingleLineLabel({
      fontSize: 14px,
      displayEllipsis: true
    })


  .DefinitionsListTest

    display grid
    grid-template-columns auto minmax(0, 1fr)
    gap 6px 12px

    retireFrom({ targetElementSelector: ".PlainLabelTest", y: 24px })


    &-Key

      font-weight bold

      justify-self end


    &-Value

      OverflowSafeSingleLineLabel({
        fontSize: 14px,
        displayEllipsis: true
      })

</style>
