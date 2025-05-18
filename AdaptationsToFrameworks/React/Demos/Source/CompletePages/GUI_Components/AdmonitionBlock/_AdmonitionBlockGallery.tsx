/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { AdmonitionBlock, Button, ThemesShowcase } from "@yamato-daiwa/frontend-react";
import Gallery from "../../../Gallery";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";


class AdmonitionBlockGallery extends Gallery<AdmonitionBlockGallery.PartialsFlags> {

  private static readonly THEME_KEY_LABEL_PREFIX: string = "AdmonitionBlock__YDF.Themes.";
  private static readonly GEOMETRIC_VARIATION_KEY_LABEL_PREFIX: string = "AdmonitionBlock__YDF.GeometricVariations.";
  private static readonly DECORATIVE_VARIATION_KEY_LABEL_PREFIX: string = "AdmonitionBlock__YDF.DecorativeVariations.";

  public render(): React.ReactNode {
    return (
      <>

        <h1
          className={
            [ "Heading1", ...this.props.mustVisuallyHideTopHeading ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
          }
        >
          AdmonitionBlock Component Demos
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
                themes={ AdmonitionBlock.Themes }
                themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
                geometricVariations={ AdmonitionBlock.GeometricVariations }
                geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
                decorativeVariations={ AdmonitionBlock.DecorativeVariations }
                decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
                renderChild={

                  ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                      <AdmonitionBlock
                        theme={ theme.value }
                        geometricVariation={ geometricVariation.value }
                        decorativeVariation={ decorativeVariation.value }
                        rootElementAttributes={ { lang: "la" } }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </AdmonitionBlock>

                }
              />

            </>
        }


        { /* ━━━ Titles ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.titles) && <>

            <h2
              className={
                [
                  "Heading2",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Titles
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      title="Titulo"
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      rootElementAttributes={ { lang: "la" } }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AdmonitionBlock>

              }
            />

          </>
        }


        { /* ━━━ Default SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.defaultSVG_Icons) && <>

            <h2
              className={
                [
                  "Heading2",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Default SVG Icons
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      SVG_Icon={ true }
                      rootElementAttributes={ { lang: "la" } }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AdmonitionBlock>

              }
            />

          </>
        }


        { /* ━━━ Custom SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.customSVG_Icons) && <>

            <h2
              className={
                [ "Heading2", ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
              }
            >
              Custom SVG Icons
            </h2>

            <AdmonitionBlock
              decorativeVariation={ AdmonitionBlock.DecorativeVariations.warning }
              SVG_Icon={ AdmonitionBlockGallery.SampleThirdPartyIcon }
              className="AdmonitionBlockGallery-LoneAdmonitionBlock"
              rootElementAttributes={ { lang: "la" } }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AdmonitionBlock>

          </>
        }


        { /* ━━━ Titles and SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.titlesAndSVG_Icons) && <>

            <h2
              className={
                [ "Heading2", ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
              }
            >
              Titles and SVG Icons
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      title="Titulo"
                      SVG_Icon={ true }
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      rootElementAttributes={ { lang: "la" } }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AdmonitionBlock>

              }
            />

          </>
        }


        { /* ━━━ Dismissing Button ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.dismissingButton) && <>

            <h2
              className={
                [ "Heading2", ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
              }
            >
              Dismissing Button
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      title="Titulo"
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      dismissible={ true }
                      rootElementAttributes={ { lang: "la" } }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AdmonitionBlock>

              }
            />

          </>
        }


        { /* ━━━ Centered Button ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.centeredButton) && <>

            <h2
              className={
                [ "Heading2", ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
              }
            >
              Centered Button
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      title="Titulo"
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      className="AdmonitionBlockGallery-AdmonitionBlock"
                      rootElementAttributes={ { lang: "la" } }
                    >

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </p>


                      <Button
                        className="AdmonitionBlock--YDF-CenteredButton"
                        label="Alklaku min"
                      />

                    </AdmonitionBlock>

              }
            />

          </>
        }


        { /* ━━━ Action Bar ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.actionBar) && <>

            <h2
              className={
                [ "Heading2", ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
              }
            >
              Action Bar
            </h2>

            <ThemesShowcase
              themes={ AdmonitionBlock.Themes }
              themeKeyLabelPrefix={ AdmonitionBlockGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ AdmonitionBlock.GeometricVariations }
              geometricVariationLabelPrefix={ AdmonitionBlockGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ AdmonitionBlock.DecorativeVariations }
              decorativeVariationLabelPrefix={ AdmonitionBlockGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <AdmonitionBlock
                      title="Titulo"
                      theme={ theme.value }
                      geometricVariation={ geometricVariation.value }
                      decorativeVariation={ decorativeVariation.value }
                      actionBarContent={
                        <>
                          <Button label="Ago 1"/>
                          <Button label="Ago 2"/>
                        </>
                      }
                      className="AdmonitionBlockGallery-AdmonitionBlock"
                      rootElementAttributes={ { lang: "la" } }
                    >

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </p>

                    </AdmonitionBlock>

              }
            />

          </>
        }

      </>
    );
  }

    private static readonly SampleThirdPartyIcon: React.FC<Readonly<{ className?: string; }>> =
      ({ className }: Readonly<{ className?: string; }>): React.ReactNode =>
          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className={ className }
          >
            <path
                d={
                    "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13," +
                    "13V7H11V13H13M13,17V15H11V17H13Z"
                }
            />
          </svg>;

}


namespace AdmonitionBlockGallery {

  export type PartialsFlags = Readonly<{
    minimal: boolean;
    titles: boolean;
    defaultSVG_Icons: boolean;
    customSVG_Icons: boolean;
    titlesAndSVG_Icons: boolean;
    dismissingButton: boolean;
    centeredButton: boolean;
    actionBar: boolean;
  }>;

}


export default AdmonitionBlockGallery;
