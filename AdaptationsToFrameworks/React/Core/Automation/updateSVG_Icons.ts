import { SVG_IconsAdapter } from "@yamato-daiwa/frontend-automation";
import { explodeStringToLines } from "@yamato-daiwa/es-extensions";


export class SVG_IconsAdapterForReact extends SVG_IconsAdapter {

  static {
    SVG_IconsAdapter.generateSVG_IconsFiles(new SVG_IconsAdapterForReact());
  }


  protected override outputFileNameExtension: string = "tsx";
  protected override outputBaseDirectoryPathRelativeToProjectRoot: string = "Source/SVG_Icons";

  protected override generateOutputCode(
    {
      SVG_IconPugMixinName,
      SVG_IconSourcePugCode
    }: SVG_IconsAdapter.CodeTemplateVariables
  ): string {

    const initialHTML_Code: string = SVG_IconsAdapterForReact.getHTML_Output(SVG_IconSourcePugCode, SVG_IconPugMixinName);

    const interimJSX_LineCode: string = initialHTML_Code.replace("></path>", "/>");

    const HTML_CodeLines: ReadonlyArray<string> =
        explodeStringToLines({
          targetString: interimJSX_LineCode,
          mustIgnoreCarriageReturn: false
        });

    const reactComponentName: string =
        SVG_IconsAdapter.getSVG_IconClassNameWithoutVendorPostfixByPugMixinName(SVG_IconPugMixinName);

    return [
      "import React from \"react\";",
      "import type SVG_IconComponent from \"../SVG_IconComponent\";",
      "",
      "",
      `const ${ reactComponentName }: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>`,
      "",
      "    (",
      ...HTML_CodeLines.map(
        (codeLine: string): string => {

          if ((/^\s*?<svg/u).test(codeLine)) {
            return `      ${ codeLine.replace(/>\s*?/u, " className={ className }>") }`;
          }


          return `      ${ codeLine }`;

        }
      ),
      "    );",
      "",
      "",
      `export default ${ reactComponentName };`,
      ""
    ].join("\n");
  }

}
