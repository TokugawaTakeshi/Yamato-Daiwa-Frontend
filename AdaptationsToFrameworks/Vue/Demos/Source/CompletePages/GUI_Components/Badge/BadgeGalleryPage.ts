import BadgeGallery from "./_BadgeGallery.vue";
import { createApp as createVueApplication } from "vue";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const applicationRootElement: HTMLElement = getExpectedToBeSingleDOM_Element({
  selector: "#APPLICATION",
  expectedDOM_ElementSubtype: HTMLElement
});


createVueApplication({
  template: `
    <BadgeGallery
      :mustVisuallyHideTopHeading="mustVisuallyHideTopHeading"
      :mustVisuallyHideAllHeadings="mustVisuallyHideAllHeadings"
      :partialsFlags="partialsFlags"
    />
  `,
  components: { BadgeGallery },
  data(): Readonly<{
    mustVisuallyHideTopHeading: boolean;
    mustVisuallyHideAllHeadings: boolean;
    partialsFlags: Required<BadgeGallery.PartialsFlags>;
  }> {

    const hasPartialNameBeenSpecified: boolean = isNonEmptyString(applicationRootElement.dataset.partial_name);

    return {
      mustVisuallyHideTopHeading: applicationRootElement.dataset.must_visually_hide_top_heading === "",
      mustVisuallyHideAllHeadings: applicationRootElement.dataset.must_visually_hide_all_headings === "",
      partialsFlags: {
        minimal: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "MINIMAL",
        keysAndValues: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "KEYS_AND_VALUES",
        longLabels: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "LONG_LABELS",
        iconsAndKeysAndValues: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "ICONS_AND_KEYS_AND_VALUES",
        iconsAndValues: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "ICONS_AND_VALUES",
        pillShapeGeometricModifier: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "PILL_SHAPE_GEOMETRIC_MODIFIER",
        singleLineGeometricModifier: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "SINGLE_LINE_GEOMETRIC_MODIFIER",
        bordersDisguisingDecorativeModifier: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "BORDERS_DISGUISING_DECORATIVE_MODIFIER",
        noBackgroundDecorativeModifier: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "NO_BACKGROUND_DECORATIVE_MODIFIER",
        loadingPlaceholder: !hasPartialNameBeenSpecified ||
            applicationRootElement.dataset.partial_name === "LOADING_PLACEHOLDER"
      }
    };

  }
}).

    mount(applicationRootElement);
