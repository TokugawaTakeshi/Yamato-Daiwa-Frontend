import { SVG_IconsAdapter } from "@yamato-daiwa/frontend-automation";


export class SVG_IconsAdapterForVue extends SVG_IconsAdapter {

  static {
    SVG_IconsAdapter.generateSVG_IconsFiles(new SVG_IconsAdapterForVue());
  }


  protected override outputFileNameExtension: string = "vue";
  protected override outputBaseDirectoryPathRelativeToProjectRoot: string = "Source/SVG_Icons";

  protected override generateOutputCode(
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
      `  export default { name: "${ SVG_IconPugMixinName }" };`,
      "",
      "</script>",
      ""
    ].join("\n");
  }

}
