import { TemplatesGenerator } from "@yamato-daiwa/documentation-files-templates";
import { isNonEmptyString, toScreamingSnakeCase } from "@yamato-daiwa/es-extensions";
import { ImprovedPath } from "@yamato-daiwa/es-extensions-nodejs";


/* ━━━ Types ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Stylus Function ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
export namespace StylusFunction {

  export namespace TemplateVariables {

    /* ┅┅┅ Step 1 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    export type Step1 =

        TemplatesGenerator.Preset.PreDefinedTemplateVariables &

        Step1.DirectlyInputted &

        Step1.Computed;

    export namespace Step1 {

      export type DirectlyInputted = Readonly<{

        /** @example coreLibrary.$children.styles.$children.kernel.$children.functions.$children.strings.$children.buildString */
        targetRouteWithChildrenPointers: string;

      }>;

      export type Computed = {

        /** @example coreLibrary.styles.kernel.functions.strings.buildString */
        targetRouteWithoutChildrenPointers: string;

      };

    }


    /* ┅┅┅ Step 2 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    export type Step2 =

        Step1 &

        Step2.DirectlyInputted;

    export namespace Step2 {

      export type DirectlyInputted = Readonly<{

        /** @example buildString */
        directoryPathForNativeImplementationRelativeToProjectRoot: string;

      }>;

    }

  }

}


/* ┅┅┅ GUI Component ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
export namespace GUI_Component {

  export namespace TemplateVariables {

    /* ┅┅┅ Step 1 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    export type Step1 =

        TemplatesGenerator.Preset.PreDefinedTemplateVariables &

        Step1.DirectlyInputted &

        Step1.Computed;

    export namespace Step1 {

      export type DirectlyInputted = Readonly<{

        /** @example coreLibrary.$children.GUI_Components.$children.controls.$children.validatables.$children.TextBox */
        targetRouteForCoreLibraryWithChildrenPointers: string;

      }>;

      export type Computed = {

        /** @example coreLibrary.GUI_Components.controls.validatables.TextBox */
        targetRouteForCoreLibraryWithoutChildrenPointers: string;

        /** @example
         * adaptationsToFrameworks.$children.vue.$children.GUI_Components.$children.controls.$children.validatables.
         *   $children.TextBox */
        targetRouteForVueFrameworkWithChildrenPointers: string;

        /** @example adaptationsToFrameworks.vue.GUI_Components.controls.validatables.TextBox */
        targetRouteForVueFrameworkWithoutChildrenPointers: string;

        /** @example
         * adaptationsToFrameworks.$children.react.$children.GUI_Components.$children.controls.$children.validatables.
         *   $children.TextBox */
        targetRouteForReactFrameworkWithChildrenPointers: string;

        /** @example
         * adaptationsToFrameworks.$children.react.$children.GUI_Components.$children.controls.$children.validatables.
         *   $children.TextBox */
        targetRouteForReactFrameworkWithoutChildrenPointers: string;

        /** @example
         * adaptationsToFrameworks.$children.blazor.$children.GUI_Components.$children.controls.$children.validatables.
         *   $children.TextBox */
        targetRouteForBlazorFrameworkWithChildrenPointers: string;

        /** @example
         * adaptationsToFrameworks.$children.blazor.$children.GUI_Components.$children.controls.$children.validatables.
         *    $children.TextBox */
        targetRouteForBlazorFrameworkWithoutChildrenPointers: string;

      };

    }


    /* ┅┅┅ Step 2 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    export type Step2 =

        Step1 &

        Step2.DirectlyInputted &

        Step2.Computed;

    export namespace Step2 {

      export type DirectlyInputted = Readonly<{

        /** @example 01-Source/Pages/CoreLibrary/GUI_Components/Children/Controls/Validatables/Children/TextBox */
        directoryPathForNativeImplementationRelativeToProjectRoot: string;

      }>;

      export type Computed = {

        /** @example
         * 01-Source/Pages/AdaptationsToFrameworks/Vue/GUI_Components/Children/Controls/Validatables/Children/TextBox */
        directoryPathForVueImplementationRelativeToProjectRoot: string;

        /** @example
         * 01-Source/Pages/AdaptationsToFrameworks/React/GUI_Components/Children/Controls/Validatables/Children/TextBox */
        directoryPathForReactImplementationRelativeToProjectRoot: string;

        /** @example
         * 01-Source/Pages/AdaptationsToFrameworks/Blazor/GUI_Components/Children/Controls/Validatables/Children/TextBox */
        directoryPathForBlazorImplementationRelativeToProjectRoot: string;

        /** @example "../../../../../../../../.." */
        projectRootDirectoryPathRelativeToDirectoryForNativeImplementation: string;

        /** @example "../../../../../../../../.." */
        sourceDirectoryPathRelativeToDirectoryForNativeImplementation: string;

        /** @example "../../../../../../../.." */
        projectRootDirectoryPathRelativeToDirectoryForAdaptationsToFrameworks: string;

        /** @example "../../../../../../../../../.." */
        sourceDirectoryPathRelativeToDirectoryForAdaptationsToFrameworks: string;

      };

    }


    /* ┅┅┅ Step 3 ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    export type Step3 =

        Step2 &

        Step3.DirectlyInputted &

        Step3.Computed;

    export namespace Step3 {

      export type DirectlyInputted = Readonly<{
        GUI_ComponentName__pascalCase: string;
      }>;

      export type Computed = {
        GUI_ComponentName__screamingSnakeCase: string;
      };

    }

  }

}


TemplatesGenerator.generate({

  GUI_Component: {

    questions: [

      {
        text:
            "Please specify the route including \"$children\" properties corresponding to CORE library " +
                "(expecting \"coreLibrary.$children.GUI_Components.$children\" part):",
        example: "coreLibrary.$children.GUI_Components.$children.controls.$children.validatables.$children.TextBox",
        isAnswerValid: isNonEmptyString,
        onValidAnswerAccepted(
          targetRouteForCoreLibraryWithChildrenPointers: string, templateVariables: GUI_Component.TemplateVariables.Step1
        ): void {

          templateVariables.targetRouteForCoreLibraryWithoutChildrenPointers =
              targetRouteForCoreLibraryWithChildrenPointers.replaceAll("$children.", "");

          templateVariables.targetRouteForVueFrameworkWithChildrenPointers =
              targetRouteForCoreLibraryWithChildrenPointers.replace("coreLibrary", "adaptationsToFrameworks.$children.vue");

          templateVariables.targetRouteForVueFrameworkWithoutChildrenPointers =
              templateVariables.targetRouteForVueFrameworkWithChildrenPointers.replaceAll("$children.", "");

          templateVariables.targetRouteForReactFrameworkWithChildrenPointers =
              templateVariables.targetRouteForVueFrameworkWithChildrenPointers.replace("vue", "react");

          templateVariables.targetRouteForReactFrameworkWithoutChildrenPointers =
              templateVariables.targetRouteForVueFrameworkWithChildrenPointers.replaceAll("vue", "react");

          templateVariables.targetRouteForBlazorFrameworkWithChildrenPointers =
              templateVariables.targetRouteForVueFrameworkWithChildrenPointers.replace("vue", "blazor");

          templateVariables.targetRouteForBlazorFrameworkWithoutChildrenPointers =
              templateVariables.targetRouteForVueFrameworkWithChildrenPointers.replaceAll("vue", "blazor");

        },
        templateVariableName: "targetRouteForCoreLibraryWithChildrenPointers"
      },

      {

        text:
            "Please specify path to directory for pages for NATIVE implementation (not related with any framework) " +
              "relative to project root.",
        example: "01-Source/Pages/CoreLibrary/GUI_Components/Children/Controls/Validatables/Children/TextBox",
        isAnswerValid: isNonEmptyString,
        onValidAnswerAccepted(
          directoryPathForNativeImplementationRelativeToProjectRoot: string,
          templateVariables: GUI_Component.TemplateVariables.Step2
        ): void {

          templateVariables.directoryPathForVueImplementationRelativeToProjectRoot =
              directoryPathForNativeImplementationRelativeToProjectRoot.
                  replace("CoreLibrary", "AdaptationsToFrameworks/Vue");

          templateVariables.directoryPathForReactImplementationRelativeToProjectRoot =
              directoryPathForNativeImplementationRelativeToProjectRoot.
                  replace("CoreLibrary", "AdaptationsToFrameworks/React");

          templateVariables.directoryPathForBlazorImplementationRelativeToProjectRoot =
              directoryPathForNativeImplementationRelativeToProjectRoot.
                  replace("CoreLibrary", "AdaptationsToFrameworks/Blazor");

          templateVariables.projectRootDirectoryPathRelativeToDirectoryForNativeImplementation =
              ImprovedPath.computeRelativePath({
                basePath: directoryPathForNativeImplementationRelativeToProjectRoot,
                comparedPath: templateVariables.PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH,
                alwaysForwardSlashSeparators: true
              });

          templateVariables.sourceDirectoryPathRelativeToDirectoryForNativeImplementation =
              templateVariables.projectRootDirectoryPathRelativeToDirectoryForNativeImplementation.replace("../", "");


          templateVariables.projectRootDirectoryPathRelativeToDirectoryForAdaptationsToFrameworks =
              ImprovedPath.computeRelativePath({
                basePath:
                    directoryPathForNativeImplementationRelativeToProjectRoot.
                        replace("CoreLibrary", "AdaptationsToFrameworks/NNN"),
                comparedPath: templateVariables.PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH,
                alwaysForwardSlashSeparators: true
              });

          templateVariables.sourceDirectoryPathRelativeToDirectoryForAdaptationsToFrameworks =
              templateVariables.projectRootDirectoryPathRelativeToDirectoryForAdaptationsToFrameworks.replace("../", "");

        },
        templateVariableName: "directoryPathForNativeImplementationRelativeToProjectRoot"

      },

      {

        text: "Please specify the component name in Pascal case. It will be used for the generating of the file name.",
        example: "TextBox",
        isAnswerValid: isNonEmptyString,
        onValidAnswerAccepted(
          GUI_ComponentName__pascalCase: string,
          templateVariables: GUI_Component.TemplateVariables.Step3
        ): void {
          templateVariables.GUI_ComponentName__screamingSnakeCase = toScreamingSnakeCase(GUI_ComponentName__pascalCase);
        },
        templateVariableName: "GUI_ComponentName__pascalCase"

      }

    ],

    fileOutputPathBuilder: (
      file: TemplatesGenerator.Preset.File,
      templateVariables: GUI_Component.TemplateVariables.Step3
    ): string =>
        ImprovedPath.joinPathSegments([
          ((): string => {

            if (file.outputFileNamePattern.includes("Vue")) {
              return templateVariables.directoryPathForVueImplementationRelativeToProjectRoot;
            }


            if (file.outputFileNamePattern.includes("React")) {
              return templateVariables.directoryPathForReactImplementationRelativeToProjectRoot;
            }


            if (file.outputFileNamePattern.includes("Blazor")) {
              return templateVariables.directoryPathForBlazorImplementationRelativeToProjectRoot;
            }


            return templateVariables.directoryPathForNativeImplementationRelativeToProjectRoot;


          })(),
          ...isNonEmptyString(file.subdirectory) ? [ file.subdirectory ] : [],
          file.outputFileNamePattern.replace("[BASIC_FILE_NAME]", templateVariables.GUI_ComponentName__pascalCase)
        ]),

    files: [

      /* ─── Vanilla ──────────────────────────────────────────────────────────────────────────────────────────────── */
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.english.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME].english.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.japanese.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME].japanese.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.russian.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME].russian.pug"
      },

      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.toc.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME].toc.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.toc.english.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME].toc.english.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.toc.japanese.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME].toc.japanese.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component.toc.russian.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME].toc.russian.yaml",
        subdirectory: "TableOfContents"
      },

      /* ─── Vue ──────────────────────────────────────────────────────────────────────────────────────────────────── */
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.english.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.english.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.japanese.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.japanese.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.russian.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.russian.pug"
      },

      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.toc.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.toc.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.toc.english.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.toc.english.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.toc.japanese.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.toc.japanese.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Vue.toc.russian.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Vue.toc.russian.yaml",
        subdirectory: "TableOfContents"
      },

      /* ─── React ──────────────────────────────────────────────────────────────────────────────────────────────────── */
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.english.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.english.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.japanese.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.japanese.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.russian.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.russian.pug"
      },

      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.toc.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.toc.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.toc.english.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.toc.english.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.toc.japanese.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.toc.japanese.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-React.toc.russian.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-React.toc.russian.yaml",
        subdirectory: "TableOfContents"
      },

      /* ─── Blazor ──────────────────────────────────────────────────────────────────────────────────────────────────── */
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.english.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.english.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.japanese.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.japanese.pug"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.russian.hbs",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.russian.pug"
      },

      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.toc.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.toc.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.toc.english.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.toc.english.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.toc.japanese.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.toc.japanese.yaml",
        subdirectory: "TableOfContents"
      },
      {
        templatePathRelativeToProjectDirectory: "Automation/Templates/GUI_Component/GUI_Component-Blazor.toc.russian.yaml",
        outputFileNamePattern: "[BASIC_FILE_NAME]-Blazor.toc.russian.yaml",
        subdirectory: "TableOfContents"
      }

    ]

  }

});
