/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  Badge,
  BadgeLoadingPlaceholder,
  ThemesShowcase,
  CalendarIcon
} from "@yamato-daiwa/frontend-react";
import Gallery from "../../../Gallery";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getRandomString } from "@yamato-daiwa/es-extensions";


class BadgeGallery extends Gallery<BadgeGallery.PartialsFlags> {

  private static readonly THEME_KEY_LABEL_PREFIX: string = "Badge__YDF.Themes.";
  private static readonly GEOMETRIC_VARIATION_KEY_LABEL_PREFIX: string = "Badge__YDF.GeometricVariations.";
  private static readonly DECORATIVE_VARIATION_KEY_LABEL_PREFIX: string = "Badge__YDF.DecorativeVariations.";

  private static readonly textOverflowSafetyTest: string =
      `OVERFLOW_TEST-gh${ getRandomString({ minimalCharactersCount: 100 }) }`;

  private readonly mustRenderAtLeansOnePartialRelatedWithGeometricModifier =
      this.props.partialsFlags.pillShapeGeometricModifier === true ||
      this.props.partialsFlags.singleLineGeometricModifier === true;

  private readonly mustRenderAtLeansOnePartialRelatedWithDecorativeModifier =
      this.props.partialsFlags.bordersDisguisingDecorativeModifier === true ||
      this.props.partialsFlags.noBackgroundDecorativeModifier === true;

  private readonly todayDate__localized__stringified = new Date().toLocaleDateString();

  public render(): React.ReactNode {
    return (
      <>

        <h1
            className={
              [ "Heading1", ...this.props.mustVisuallyHideTopHeading ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
            }
        >
          Badge Component Demos
        </h1>


        { /* ━━━ Minimal ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.minimal) && <>

              <h2
                className={
                  [
                    "Heading2",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Minimal
              </h2>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        valueLabel="Value"
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                      />

                }
              />

            </>
        }


        { /* ━━━ Keys and Values ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.keysAndValues) && <>

              <h2
                className={
                  [
                    "Heading2",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Keys and Values
              </h2>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        keyLabel="Key"
                        valueLabel="Value"
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                      />

                }
              />

            </>
        }


        { /* ━━━ Long Labels ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.longLabels) && <>

              <h2
                className={
                  [
                    "Heading2",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Long Labels
              </h2>

              <div className="BadgeGallery-LinearFlow BadgeGallery-LinearFlow__LimitedChildrenMaximalWidth">

                <Badge
                  keyLabel={ BadgeGallery.textOverflowSafetyTest }
                  valueLabel={ BadgeGallery.textOverflowSafetyTest }
                  decorativeVariation={ Badge.DecorativeVariations.achromaticPastel }
                />

              </div>

            </>
        }


        { /* ━━━ Icons, Keys and Values ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.iconsAndKeysAndValues) && <>

              <h2
                className={
                  [
                    "Heading2",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Keys and Values
              </h2>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        keyLabel="Key"
                        valueLabel="Value"
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                        SVG_Icon={ CalendarIcon }
                      />

                }
              />

            </>
        }


        { /* ━━━ Icons, Keys and Values ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.iconsAndValues) && <>

              <h2
                className={
                  [
                    "Heading2",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Keys and Values
              </h2>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        valueLabel="Value"
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                        SVG_Icon={ CalendarIcon }
                      />

                }
              />

            </>
        }


        { /* ━━━ Geometric Modifiers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (!this.props.mustVisuallyHideAllHeadings && this.mustRenderAtLeansOnePartialRelatedWithGeometricModifier) &&
              <h2 className="Heading2">Geometric Modifiers</h2>
        }

        { /* ─── Pill Shape ─────────────────────────────────────────────────────────────────────────────────────── */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.pillShapeGeometricModifier) && <>

              <h3
                className={
                  [
                    "Heading3",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Pill Shape
              </h3>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        valueLabel="Value"
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                        decorativeVariation={ decorativeVariation.value }
                      />

                }
              />

          </>

        }


        { /* ─── Single Line ────────────────────────────────────────────────────────────────────────────────────── */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.singleLineGeometricModifier) && <>

              <h3
                className={
                  [
                    "Heading3",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Pill Shape
              </h3>

              <div className="BadgeGallery-LinearFlow BadgeGallery-LinearFlow__LimitedChildrenMaximalWidth">

                <Badge
                  keyLabel={ BadgeGallery.textOverflowSafetyTest }
                  valueLabel={ BadgeGallery.textOverflowSafetyTest }
                  geometricModifiers={ [ Badge.GeometricModifiers.singleLine ] }
                  decorativeVariation={ Badge.DecorativeVariations.achromaticPastel }
                />

              </div>

          </>

        }


        { /* ━━━ Decorative Modifiers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (!this.props.mustVisuallyHideAllHeadings && this.mustRenderAtLeansOnePartialRelatedWithDecorativeModifier) &&
              <h2 className="Heading2">Decorative Modifiers</h2>
        }

        { /*─── Borders Disguising ──────────────────────────────────────────────────────────────────────────────── */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.bordersDisguisingDecorativeModifier) && <>

              <h3
                className={
                  [
                    "Heading3",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                Borders Disguising
              </h3>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        valueLabel={ this.todayDate__localized__stringified }
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                        decorativeModifiers={ [ Badge.DecorativeModifiers.bordersDisguising ] }
                        SVG_Icon={ CalendarIcon }
                      />

                }
              />

          </>

        }


        { /*─── No Background ───────────────────────────────────────────────────────────────────────────────────── */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.bordersDisguisingDecorativeModifier) && <>

              <h3
                className={
                  [
                    "Heading3",
                    ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                  ].join(" ")
                }
              >
                No Background
              </h3>

              <ThemesShowcase
                themes={ Badge.Themes }
                themeKeyLabelPrefix={ BadgeGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ Badge.GeometricVariations }
                geometricVariationLabelPrefix={ BadgeGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ Badge.DecorativeVariations }
                decorativeVariationLabelPrefix={ BadgeGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariationsWrapperAdditionalCSS_Classes={ [ "BadgeGallery-TwoColumnsTable" ] }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <Badge
                        valueLabel={ this.todayDate__localized__stringified }
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                        decorativeModifiers={ [ Badge.DecorativeModifiers.noBackground ] }
                        SVG_Icon={ CalendarIcon }
                      />

                }
              />

          </>

        }


        { /* ━━━ Decorative Modifiers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.bordersDisguisingDecorativeModifier) && <>

            {
              (!this.props.mustVisuallyHideAllHeadings && this.mustRenderAtLeansOnePartialRelatedWithDecorativeModifier) &&
                  <h2 className="Heading2">Loading Placeholder</h2>
            }

              <div className="BadgeGallery-LinearFlow">

                {

                  Object.values(Badge.GeometricVariations).map(
                    (geometricVariationValue: string): React.ReactElement =>
                        <>

                          <BadgeLoadingPlaceholder
                            key={ `NO_GEOMETRIC_MODIFIERS-${ geometricVariationValue }` }
                            geometricVariation={ geometricVariationValue }
                          />

                          <BadgeLoadingPlaceholder
                            key={ `${ geometricVariationValue }-${ Badge.GeometricModifiers.pillShape }` }
                            geometricVariation={ geometricVariationValue }
                            geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] }
                          />

                        </>
                  )

                }

              </div>

          </>

        }

      </>
    );
  }

}


namespace BadgeGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    keysAndValues?: boolean;
    longLabels?: boolean;
    iconsAndKeysAndValues?: boolean;
    iconsAndValues?: boolean;
    pillShapeGeometricModifier?: boolean;
    singleLineGeometricModifier?: boolean;
    bordersDisguisingDecorativeModifier?: boolean;
    noBackgroundDecorativeModifier?: boolean;
    loadingPlaceholder?: boolean;
  }>;

}


export default BadgeGallery;
