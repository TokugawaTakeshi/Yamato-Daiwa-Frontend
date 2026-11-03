import type { BadgeBase, YDF_Component } from "../../../../../../Main/Core";
import type { Vue as VueComponent } from "vue-facing-decorator";


class Badge extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes;

  public static readonly defineThemes: YDF_Component.ThemesDefiners.NoChildrenComponentsCase<typeof Badge>;

  public static areThemesCSS_ClassesCommon: boolean;

  public static readonly considerThemesAsCommon: () => typeof Badge;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: Badge.GeometricVariations;

  public static readonly defineGeometricVariations:
      YDF_Component.GeometricVariationDefiners.NoChildrenComponentsCase<Badge>;

  public static readonly GeometricModifiers: Badge.GeometricModifiers;


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: Badge.DecorativeVariations;

  public static defineDecorativeVariations:
      YDF_Component.DecorativeVariationDefiners.NoChildrenComponentsCase<Badge>;

  public static readonly DecorativeModifiers: Badge.DecorativeModifiers;

}


namespace Badge {

  export type GeometricVariations = BadgeBase.GeometricVariations;
  export type GeometricModifiers = BadgeBase.GeometricModifiers;

  export type DecorativeVariations = BadgeBase.DecorativeVariations;
  export type DecorativeModifiers = BadgeBase.DecorativeModifiers;

}


export default Badge;
