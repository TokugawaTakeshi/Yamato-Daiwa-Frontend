class SVG_IconsAdapterForVue extends SVG_IconsAdapter {

  protected outputFileNameExtension: string = "vue";

  protected generateOutputCode(
    {
      sourceFilePathRelativeOutputOne,
      SVG_IconPugMixinName
    }: SVG_IconsAdapter.CodeTemplateVariables
  ): string {
    return [
      "<template lang=\"pug\">",
      "",
      `  include ${ sourceFilePathRelativeOutputOne }`,
      "",
      `  +${ SVG_IconPugMixinName }`,
      "",
      "</template>",
      "",
      "",
      "<script>",
      "",
      `export default { name: "${ SVG_IconPugMixinName }" };`,
      "",
      "</script>",
      ""
    ].join("\n");
  }

}


SVG_IconsAdapter.generateSVG_IconsFiles(new SVG_IconsAdapterForVue());
