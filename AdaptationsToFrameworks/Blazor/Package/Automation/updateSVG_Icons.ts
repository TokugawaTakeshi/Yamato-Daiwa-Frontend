import { SVG_IconsAdapter } from "@yamato-daiwa/frontend-automation";
import { explodeStringToLines } from "@yamato-daiwa/es-extensions";


export class SVG_IconsAdapterForReact extends SVG_IconsAdapter {

  static {
    SVG_IconsAdapter.generateSVG_IconsFiles(new SVG_IconsAdapterForReact());
  }


  protected override outputFileNameExtension: string = "razor";
  protected override outputBaseDirectoryPathRelativeToProjectRoot: string = "SVG_Icons";


  protected override generateOutputCode(
    {
      SVG_IconPugMixinName,
      SVG_IconSourcePugCode
    }: SVG_IconsAdapter.CodeTemplateVariables
  ): string {

    const initialHTML_Code: string = SVG_IconsAdapterForReact.getHTML_Output(SVG_IconSourcePugCode, SVG_IconPugMixinName);

    const HTML_CodeLines: ReadonlyArray<string> =
        explodeStringToLines({
          targetString: initialHTML_Code,
          mustIgnoreCarriageReturn: false
        });

    return [
      "@using YamatoDaiwa.CSharpExtensions",
      "",
      "@implements YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough",
      "",
      "",
      ...HTML_CodeLines.map(
        (codeLine: string): string => {

          if ((/^\s*?<svg/u).test(codeLine)) {
            return codeLine.
                replace(
                    />\s*?/u,
                    " " +
                    [
                      "class=@(rootElementHTML_Attributes?." +
                          "TryGetValue(\"class\", out object? classValue) == true ? classValue : null)",
                      "@attributes=@rootElementHTML_Attributes?.DeleteOnePairFromSwallowCopy(\"class\").UpdatedDictionary"
                    ].join(" ") +
                    ">"
                  ).
                replace("svg xmlns", "svg\n  xmlns").
                replace(" viewBox", "\n  viewBox").
                replace(" class", "\n  class").
                replace(" @attributes", "\n  @attributes").
                replace("UpdatedDictionary>", "UpdatedDictionary\n>");
          }


          return codeLine;

        }
      ),
      "",
      "@code {",
      "",
      "  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]",
      "  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }",
      "",
      "}"
    ].join("\n");
  }

}
