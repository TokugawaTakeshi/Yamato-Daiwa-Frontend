<template lang="pug">

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { Badge } from "../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";


  @VueComponentOptions({
    components: {
      Badge
    }
  })
  export default class BadgeComponentTestSite extends VueComponent {}

</script>
