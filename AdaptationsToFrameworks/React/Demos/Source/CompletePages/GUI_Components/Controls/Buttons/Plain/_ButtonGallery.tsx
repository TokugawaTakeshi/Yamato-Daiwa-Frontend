import React from "react";
import Gallery from "../../../../../Gallery";
import {
  Button,
  ButtonLoadingPlaceholder,
  ThemesShowcase,
  HeardIcon__Filled,
  MenuIcon__ThreeDots__Horizontal
} from "@yamato-daiwa/frontend-react";
import { getRandomString } from "@yamato-daiwa/es-extensions";


class ButtonGallery extends Gallery<ButtonGallery.PartialsFlags> {

  private static readonly THEME_KEY_LABEL_PREFIX: string = "Button__YDF.Themes.";
  private static readonly GEOMETRIC_VARIATION_KEY_LABEL_PREFIX: string = "Button__YDF.GeometricVariations.";
  private static readonly DECORATIVE_VARIATION_KEY_LABEL_PREFIX: string = "Button__YDF.DecorativeVariations.";

  private static readonly textOverflowSafetyTest: string =
      `OVERFLOW_TEST-gh${ getRandomString({ minimalCharactersCount: 100 }) }`;


  protected static mustSkipDecorativeVariation(
    { decorativeVariation, geometricVariation }: ThemesShowcase.DecorativeVariationSkippingCondition.IterationData
  ): boolean {
    return (
      decorativeVariation.value === Button.DecorativeVariations.linkLike &&
      geometricVariation.value !== Button.GeometricVariations.linkLike
    ) ||
    (
      decorativeVariation.value !== Button.DecorativeVariations.linkLike &&
      geometricVariation.value === Button.GeometricVariations.linkLike
    );
  }


  public render(): React.ReactNode {
    return (
      <>

        <h1
          className={
            [ "Heading1", this.props.mustVisuallyHideTopHeading ? [ "YDF_Gallery-InvisibleHeading" ] : [] ].join(" ")
          }
        >
          Button Component Demos
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
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

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

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ━━━ Prepended SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.prependedSVG_Icons) && <>

            <h2
              className={
                [
                  "Heading2",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Prepended SVG Icons
            </h2>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Like!"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          prependedSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Like!"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          prependedSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>Unavailable</dd>

                    </dl>

              }
            />
          </>
        }


        { /* ━━━ Appended SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.appendedSVG_Icons) && <>

            <h2
              className={
                [
                  "Heading2",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Appended SVG Icons
            </h2>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Like!"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          appendedSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Like!"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          appendedSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>Unavailable</dd>

                    </dl>

              }
            />

          </>

        }


        { /* ━━━ Lone Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
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
              Lone Icons
            </h2>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this video"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this video"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>Unavailable</dd>

                    </dl>

              }
            />
          </>
        }


        { /* ━━━ Custom SVG Icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.customIcons) && <>

            <h2
              className={
                [
                  "Heading2",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Custom SVG Icons
            </h2>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Menu"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          prependedSVG_Icon={ MenuIcon__ThreeDots__Horizontal }
                          SVG_IconCSS_Classes="Button--YDF-SVG_Icon__Menu__ThreeDots__Horizontal"
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Menu"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          prependedSVG_Icon={ MenuIcon__ThreeDots__Horizontal }
                          SVG_IconCSS_Classes="Button--YDF-SVG_Icon__Menu__ThreeDots__Horizontal"
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>Unavailable</dd>

                    </dl>

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
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.pillShape ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.pillShape ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.pillShape ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── Square Shape ───────────────────────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.squareShapeGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Square Shape
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this post"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this post"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="❤"
                          accessibilityGuidance="Like this post"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />
          </>
        }


        { /* ─── Square Shape Unless Overflowed ─────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.squareShapeUnlessOverflowedGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Square Shape Unless Overflowed
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd className="ButtonGallery-LinearFlow">

                        <Button
                          accessibilityGuidance="Like this post"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />

                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                        />

                      </dd>

                      <dt>Link</dt>
                      <dd className="ButtonGallery-LinearFlow">

                        <Button
                          accessibilityGuidance="Like this post"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />

                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                        />

                      </dd>

                      <dt>Input</dt>
                      <dd className="ButtonGallery-LinearFlow">

                        <Button
                          accessibilityGuidance="Like this post"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />

                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShapeUnlessOverflowed ] }
                          decorativeVariation={ decorativeVariation.value }
                        />

                      </dd>

                    </dl>

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
              Single Line
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.singleLine ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.singleLine ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label={ ButtonGallery.textOverflowSafetyTest }
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.singleLine ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Left Border and Roundings ───────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.noLeftBorderAndRoundingsGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              No Left Border and Roundings
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noLeftBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noLeftBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noLeftBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Right Border and Roundings ──────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.noRightBorderAndRoundingsGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              No Right Border and Roundings
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRightBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRightBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRightBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Top Border and Roundings ────────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.noTopBorderAndRoundingsGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              No Top Border and Roundings
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noTopBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noTopBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noTopBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Bottom Border and Roundings ─────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.noBottomBorderAndRoundingsGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              No Top Border and Roundings
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noBottomBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noBottomBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noBottomBorderAndRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Roundings ───────────────────────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.noRoundingsGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              No Roundings
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.noRoundings ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── Horizontally Shrinkable ────────────────────────────────────────────────────────────────────────── */ }
        {
          (this.mustRenderAllPartials || this.props.partialsFlags.horizontallyShrinkableGeometricModifier) && <>

            <h3
              className={
                [
                  "Heading3",
                  ...this.props.mustVisuallyHideAllHeadings ? [ "YDF_Gallery-InvisibleHeading" ] : []
                ].join(" ")
              }
            >
              Horizontally Shrinkable
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="X"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.horizontallyShrinkable ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="X"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.horizontallyShrinkable ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="X"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.horizontallyShrinkable ] }
                          decorativeVariation={ decorativeVariation.value }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ━━━ Decorative Modifiers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {
          (!this.props.mustVisuallyHideAllHeadings && this.mustRenderAtLeansOnePartialRelatedWithGeometricModifier) &&
              <h2 className="Heading2">Decorative Modifiers</h2>
        }


        { /* ─── Borders Disguising ─────────────────────────────────────────────────────────────────────────────── */ }
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
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.bordersDisguising ] }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.bordersDisguising ] }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.bordersDisguising ] }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Background ──────────────────────────────────────────────────────────────────────────────────── */ }
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
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="Click 押下"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ─── No Background in Default State Decorative Modifier ─────────────────────────────────────────────── */ }
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
              No Background in Default State Decorative Modifier
            </h3>

            <ThemesShowcase
              themes={ Button.Themes }
              themeKeyLabelPrefix={ ButtonGallery.THEME_KEY_LABEL_PREFIX }
              geometricVariations={ Button.GeometricVariations }
              geometricVariationLabelPrefix={ ButtonGallery.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariations={ Button.DecorativeVariations }
              decorativeVariationLabelPrefix={ ButtonGallery.DECORATIVE_VARIATION_KEY_LABEL_PREFIX }
              decorativeVariationsListItemAdditionalCSS_Classes={ [ "ButtonGallery-DecorativeVariationsListItem" ] }
              decorativeVariationSkippingCondition={ ButtonGallery.mustSkipDecorativeVariation }
              renderChild={

                ({ theme, geometricVariation, decorativeVariation }: ThemesShowcase.DataForChildren): React.ReactElement =>

                    <dl className="ButtonGallery-PseudoTable">

                      <dt>Button</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this post"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Link</dt>
                      <dd>
                        <Button
                          accessibilityGuidance="Like this post"
                          externalURI="/"
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                          loneSVG_Icon={ HeardIcon__Filled }
                        />
                      </dd>

                      <dt>Input</dt>
                      <dd>
                        <Button
                          label="❤"
                          accessibilityGuidance="Like this post"
                          HTML_Type={ Button.HTML_Types.inputButton }
                          theme={ theme.key }
                          geometricVariation={ geometricVariation.value }
                          geometricModifiers={ [ Button.GeometricModifiers.squareShape ] }
                          decorativeVariation={ decorativeVariation.value }
                          decorativeModifiers={ [ Button.DecorativeModifiers.noBackground ] }
                        />
                      </dd>

                    </dl>

              }
            />

          </>
        }


        { /* ━━━ Loading Placeholder ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */ }
        {

          (this.mustRenderAllPartials || this.props.partialsFlags.bordersDisguisingDecorativeModifier) && <>

            {
              (!this.props.mustVisuallyHideAllHeadings && this.mustRenderAtLeansOnePartialRelatedWithDecorativeModifier) &&
                  <h2 className="Heading2">Loading Placeholder</h2>
            }

              <div className="ButtonGallery-LinearFlow">

                {

                  Object.values(Button.GeometricVariations).map(
                    (geometricVariationValue: string): React.ReactElement =>
                        <>

                          <ButtonLoadingPlaceholder
                            key={ `NO_GEOMETRIC_MODIFIERS-${ geometricVariationValue }` }
                            geometricVariation={ geometricVariationValue }
                          />

                          <ButtonLoadingPlaceholder
                            key={ `${ geometricVariationValue }-${ Button.GeometricModifiers.pillShape }` }
                            geometricVariation={ geometricVariationValue }
                            geometricModifiers={ [ Button.GeometricModifiers.pillShape ] }
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


namespace ButtonGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    longLabels?: boolean;
    prependedSVG_Icons?: boolean;
    appendedSVG_Icons?: boolean;
    loneSVG_Icons?: boolean;
    customIcons?: boolean;
    pillShapeGeometricModifier?: boolean;
    squareShapeGeometricModifier?: boolean;
    squareShapeUnlessOverflowedGeometricModifier?: boolean;
    singleLineGeometricModifier?: boolean;
    noLeftBorderAndRoundingsGeometricModifier?: boolean;
    noRightBorderAndRoundingsGeometricModifier?: boolean;
    noTopBorderAndRoundingsGeometricModifier?: boolean;
    noBottomBorderAndRoundingsGeometricModifier?: boolean;
    noRoundingsGeometricModifier?: boolean;
    horizontallyShrinkableGeometricModifier?: boolean;
    bordersDisguisingDecorativeModifier?: boolean;
    noBackgroundDecorativeModifier?: boolean;
    noBackgroundInDefaultStateDecorativeModifier?: boolean;
    loadingPlaceholder?: boolean;
  }>;

}


export default ButtonGallery;
