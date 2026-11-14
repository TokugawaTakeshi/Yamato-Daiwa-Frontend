/* eslint-disable-next-line max-classes-per-file -- Temporary disabled for the experimental method. */
import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";
import AdmonitionBlockLocalization__English from "./AdmonitionBlockLocalization.english";


export abstract class AdmonitionBlock {

  public static readonly CSS_NAMESPACE: string = "AdmonitionBlock--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [AdmonitionBlock.Themes.regular]: "AdmonitionBlock--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineThemes(AdmonitionBlock, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof AdmonitionBlock {
    AdmonitionBlock.areThemesCSS_ClassesCommon = true;
    return AdmonitionBlock;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations =
      {
        regular: "REGULAR",
        stickyNoteLike: "STICKY_NOTE_LIKE"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [AdmonitionBlock.GeometricVariations.regular]: "AdmonitionBlock--YDF__RegularGeometricVariation",
        [AdmonitionBlock.GeometricVariations.stickyNoteLike]: "AdmonitionBlock--YDF__StickyNoteLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineGeometricVariations(AdmonitionBlock, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations =
      {
        notice: "NOTICE",
        error: "ERROR",
        warning: "WARNING",
        success: "SUCCESS",
        guidance: "GUIDANCE",
        question: "QUESTION"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [AdmonitionBlock.DecorativeVariations.notice]: "AdmonitionBlock--YDF__NoticeDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.error]: "AdmonitionBlock--YDF__ErrorDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.warning]: "AdmonitionBlock--YDF__WarningDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.success]: "AdmonitionBlock--YDF__SuccessDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.guidance]: "AdmonitionBlock--YDF__GuidanceDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.question]: "AdmonitionBlock--YDF_QuestionDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomDecorativeVariationDefinition
  ): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(AdmonitionBlock, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    relatedState:
        Readonly<{
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(AdmonitionBlock, relatedState);
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: AdmonitionBlock.Localization = AdmonitionBlockLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `ADMONITION_BLOCK--YDF-${ uniqueDynamicPart ?? ++AdmonitionBlock.counterForInstanceID_Generating }`;
  }


  /* ┅┅┅ SVG Icons ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static counterForCustomSVG_IconsIDs_Generating: number = 0;
  protected static customSVG_IconCurrentID: string | null = null;

  public static generateCustomIconNewID(): string {

    AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating++;
    AdmonitionBlock.customSVG_IconCurrentID =
        `ADMONITION_BLOCK--YDF-SVG_ICON-${ this.counterForCustomSVG_IconsIDs_Generating }`;

    return AdmonitionBlock.customSVG_IconCurrentID;

  }


  /* ━━━ Static Members Sharing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static shareStaticMembers(
    TargetClass: object,
    options?: Readonly<{
      mustSkipPropertiesWithKeys: Readonly<{
        localization: boolean;
      }>;
    }>
  ): void {
    Object.defineProperties(
      TargetClass,
      {

        CSS_NAMESPACE: { value: AdmonitionBlock.CSS_NAMESPACE },

        Themes: { value: AdmonitionBlock.Themes },
        themesCSS_Classes: { value: AdmonitionBlock.themesCSS_Classes },
        defineThemes: { get: (): unknown => Reflect.get(AdmonitionBlock, "defineThemes") },
        areThemesCSS_ClassesCommon: {
          value: AdmonitionBlock.areThemesCSS_ClassesCommon,
          writable: true
        },
        considerThemesAsCommon: { value: AdmonitionBlock.considerThemesAsCommon },

        GeometricVariations: { value: AdmonitionBlock.GeometricVariations },
        geometricVariationsCSS_Classes: { value: AdmonitionBlock.geometricVariationsCSS_Classes },
        defineGeometricVariations: { get: (): unknown => Reflect.get(AdmonitionBlock, "defineGeometricVariations") },

        DecorativeVariations: { value: AdmonitionBlock.DecorativeVariations },
        decorativeVariationsCSS_Classes: { value: AdmonitionBlock.decorativeVariationsCSS_Classes },
        defineDecorativeVariations: { get: (): unknown => Reflect.get(AdmonitionBlock, "defineDecorativeVariations") },

        ...options?.mustSkipPropertiesWithKeys.localization === true ?
            null :
            {
              localization: {
                value: AdmonitionBlock.localization,
                writable: true
              }
            },

        counterForInstanceID_Generating: { value: AdmonitionBlock.counterForInstanceID_Generating },
        generateInstanceID: { get: (): unknown => Reflect.get(AdmonitionBlock, "generateInstanceID") },
        counterForCustomSVG_IconsIDs_Generating: { value: AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating },
        customSVG_IconCurrentID: { value: AdmonitionBlock.customSVG_IconCurrentID },
        generateCustomIconNewID: { get: (): unknown => Reflect.get(AdmonitionBlock, "generateCustomIconNewID") }

      }
    );
  }

  /** @experimental */
  public static mixedInToInheritorOf<TTargetClass extends abstract new (...parameters: never) => object>(
    TargetClass: TTargetClass,
    options?: Readonly<{ mustSkipLocalization: boolean; }>
  ): AdmonitionBlock.MixedInClass<TTargetClass> {

    const Inheritor:
        abstract new () => object =
            /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- Experimental. */
            class extends (TargetClass as unknown as abstract new () => object) {};

    const keysExcludedFromInheritance: ReadonlySet<PropertyKey> =
        new Set<PropertyKey>([
          "length",
          "name",
          "prototype",
          "shareStaticMembers",
          "mixedInToInheritorOf",
          ...options?.mustSkipLocalization === true ? [ "localization" ] : []
        ]);

    for (const key of Reflect.ownKeys(AdmonitionBlock)) {

      if (keysExcludedFromInheritance.has(key)) {
        continue;
      }


      const value: unknown = Reflect.get(AdmonitionBlock, key);

      Object.defineProperty(
        Inheritor,
        key,
        typeof value === "function" ?
            { value } :
            { get: (): unknown => Reflect.get(AdmonitionBlock, key) }
      );

    }

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- Experimental. */
    return Inheritor as unknown as AdmonitionBlock.MixedInClass<TTargetClass>;

  }

}


export namespace AdmonitionBlock {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          stickyNoteLike: "STICKY_NOTE_LIKE";
        }
    >>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          notice: "NOTICE";
          error: "ERROR";
          warning: "WARNING";
          success: "SUCCESS";
          guidance: "GUIDANCE";
          question: "QUESTION";
        }>
      >;

  export type Localization =
      Readonly<{
        dismissingButton: Readonly<{
          accessibilityGuidance: string;
        }>;
      }>;

  export type MixedInClass<TargetClass extends abstract new (...parameters: never) => object> =

      /* Constructor and instance members of the target class, plus derivation from `AdmonitionBlock`. */
      (
        TargetClass extends abstract new (...parameters: infer Parameters) => infer Instance ?
            new (...parameters: Parameters) => Instance & AdmonitionBlock :
            never
      ) &

      /* Static members of the target class. */
      Omit<TargetClass, "prototype"> &

      /* Static members of `AdmonitionBlock`. */
      typeof AdmonitionBlock &

      /* Must not be available on the inheritor. */
      Readonly<{
        shareStaticMembers: never;
        mixedInToInheritorOf: never;
      }>;

}


export default AdmonitionBlock;
