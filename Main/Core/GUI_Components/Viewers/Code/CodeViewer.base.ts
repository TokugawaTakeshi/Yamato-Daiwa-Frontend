import CodeViewerLocalization__English from "./CodeViewerLocalization.english";

export abstract class CodeViewer {

  public static readonly CSS_NAMESPACE: string = "CodeViewer--YDF";

  public static localization: CodeViewer.CodeViewer = CodeViewerLocalization__English;

}


export namespace CodeViewer {

  export enum SupportedCodesLanguages {
    Bash = "bash",
    CSS = "css",
    CPP = "cpp",
    CSharp = "cs",
    Handlebars = "handlebars",
    HTML = "html",
    HTTP = "http",
    Java = "java",
    JavaScript = "js",
    JSON = "json",
    JSON5 = "json5",
    Markdown = "md",
    PHP = "php",
    Pug = "pug",
    SASS = "sass",
    SCSS = "scss",
    Stylus = "stylus",
    TypeScript = "ts",
    TSX = "tsx",
    YAML = "yaml",
    XML = "xml"
  }

  export const languagesAndTitlesMap:
      Readonly<{ [supportedLanguage in SupportedCodesLanguages]: string; }> =
          {
            [SupportedCodesLanguages.Bash]: "Bash",
            [SupportedCodesLanguages.CSS]: "CSS",
            [SupportedCodesLanguages.CPP]: "C++",
            [SupportedCodesLanguages.CSharp]: "C#",
            [SupportedCodesLanguages.HTML]: "HTML",
            [SupportedCodesLanguages.HTTP]: "HTTP",
            [SupportedCodesLanguages.Handlebars]: "Handlebars",
            [SupportedCodesLanguages.Java]: "Java",
            [SupportedCodesLanguages.JavaScript]: "JavaScript",
            [SupportedCodesLanguages.JSON]: "JSON",
            [SupportedCodesLanguages.JSON5]: "JSON5",
            [SupportedCodesLanguages.Markdown]: "Markdown",
            [SupportedCodesLanguages.PHP]: "PHP",
            [SupportedCodesLanguages.Pug]: "Pug",
            [SupportedCodesLanguages.SASS]: "SASS",
            [SupportedCodesLanguages.SCSS]: "SCSS",
            [SupportedCodesLanguages.Stylus]: "Stylus",
            [SupportedCodesLanguages.TypeScript]: "TypeScript",
            [SupportedCodesLanguages.TSX]: "TSX",
            [SupportedCodesLanguages.YAML]: "YAML",
            [SupportedCodesLanguages.XML]: "XML"
          };

  export type CodeViewer =

      Readonly<{

        actionBar:

            Readonly<{
              codeCopyingButton: Readonly<{ label: string; }>;
            }>;

        tabsFlow: Readonly<{ accessibilityGuidance: string; }>;

        tab: Readonly<{ languageKeyLabel: string; }>;

        iFrame: { defaultTitle: string; };

      }>;

}


export default CodeViewer;
