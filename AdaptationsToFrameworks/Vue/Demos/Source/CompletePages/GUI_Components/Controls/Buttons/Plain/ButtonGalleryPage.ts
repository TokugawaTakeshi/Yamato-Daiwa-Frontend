import ButtonGallery from "./_ButtonGallery.vue";
import { createApp as createVueApplication } from "vue";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const applicationRootElement: HTMLElement = getExpectedToBeSingleDOM_Element({
  selector: "#APPLICATION",
  expectedDOM_ElementSubtype: HTMLElement
});


createVueApplication({
  template: `
    <ButtonGallery
      :mustVisuallyHideTopHeading="mustVisuallyHideTopHeading"
      :mustVisuallyHideAllHeadings="mustVisuallyHideAllHeadings"
      :partialsFlags="partialsFlags"
    />
  `,
  components: { ButtonGallery },
  data(): Readonly<{
    mustVisuallyHideTopHeading: boolean;
    mustVisuallyHideAllHeadings: boolean;
    partialsFlags: Required<ButtonGallery.PartialsFlags>;
  }> {

    const hasPartialNameBeenSpecified: boolean = isNonEmptyString(applicationRootElement.dataset.partial_name);

    return {
      mustVisuallyHideTopHeading: applicationRootElement.dataset.must_visually_hide_top_heading === "",
      mustVisuallyHideAllHeadings: applicationRootElement.dataset.must_visually_hide_all_headings === "",
      partialsFlags: {
        minimal:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "MINIMAL",
        longLabels:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LONG_LABELS",
        prependedSVG_Icons:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "PREPENDED_SVG_ICONS",
        appendedSVG_Icons:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "APPENDED_SVG_ICONS",
        loneSVG_Icons:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LONE_SVG_ICONS",
        customIcons:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "CUSTOM_ICONS",
        pillShapeGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "PILL_SHAPE_GEOMETRIC_MODIFIER",
        squareShapeGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "SQUARE_SHAPE_GEOMETRIC_MODIFIER",
        squareShapeUnlessOverflowedGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "SQUARE_SHAPE_GEOMETRIC_MODIFIER",
        singleLineGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "SINGLE_LINE_GEOMETRIC_MODIFIER",
        noLeftBorderAndRoundingsGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_LEFT_BORDER_AND_ROUNDINGS_GEOMETRIC_MODIFIER",
        noRightBorderAndRoundingsGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_RIGHT_BORDER_AND_ROUNDINGS_GEOMETRIC_MODIFIER",
        noTopBorderAndRoundingsGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_TOP_BORDER_AND_ROUNDINGS_GEOMETRIC_MODIFIER",
        noBottomBorderAndRoundingsGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_BOTTOM_BORDER_AND_ROUNDINGS_GEOMETRIC_MODIFIER",
        noRoundingsGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_ROUNDINGS_GEOMETRIC_MODIFIER",
        horizontallyShrinkableGeometricModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "HORIZONTALLY_SHRINKABLE_GEOMETRIC_MODIFIER",
        bordersDisguisingDecorativeModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "BORDERS_DISGUISING_DECORATIVE_MODIFIER",
        noBackgroundDecorativeModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_BACKGROUND_DECORATIVE_MODIFIER",
        noBackgroundInDefaultStateDecorativeModifier:
            !hasPartialNameBeenSpecified ||
                applicationRootElement.dataset.partial_name === "NO_BACKGROUND_IN_DEFAULT_STATE_DECORATIVE_MODIFIER",
        loadingPlaceholder:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LOADING_PLACEHOLDER"
      }
    };

  }
}).

    mount(applicationRootElement);
