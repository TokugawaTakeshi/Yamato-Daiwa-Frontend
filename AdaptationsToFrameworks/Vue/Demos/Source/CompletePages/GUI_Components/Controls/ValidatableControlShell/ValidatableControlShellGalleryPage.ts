import ValidatableControlShellGallery from "./_ValidatableControlShellGallery.vue";
import { createApp as createVueApplication } from "vue";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const applicationRootElement: HTMLElement = getExpectedToBeSingleDOM_Element({
  selector: "#APPLICATION",
  expectedDOM_ElementSubtype: HTMLElement
});


createVueApplication({
  template: `
    <ValidatableControlShellGallery
      :mustVisuallyHideTopHeading="mustVisuallyHideTopHeading"
      :mustVisuallyHideAllHeadings="mustVisuallyHideAllHeadings"
      :partialsFlags="partialsFlags"
    />
  `,
  components: { ValidatableControlShellGallery },
  data(): Readonly<{
    mustVisuallyHideTopHeading: boolean;
    mustVisuallyHideAllHeadings: boolean;
    partialsFlags: Required<ValidatableControlShellGallery.PartialsFlags>;
  }> {

    const hasPartialNameBeenSpecified: boolean = isNonEmptyString(applicationRootElement.dataset.partial_name);

    return {
      mustVisuallyHideTopHeading: applicationRootElement.dataset.must_visually_hide_top_heading === "",
      mustVisuallyHideAllHeadings: applicationRootElement.dataset.must_visually_hide_all_headings === "",
      partialsFlags: {
        minimal: !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "MINIMAL",
        labels: !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LABELS",
        guidances: !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "GUIDANCES",
        labelsAndGuidances:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LABELS_AND_GUIDANCES",
        requirementBadges:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "REQUIREMENT_BADGES",
        validationErrorsMessages:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "VALIDATION_ERRORS_MESSAGES",
        asynchronousValidationsStatuses:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "ASYNCHRONOUS_VALIDATIONS_STATUSES",
        loadingPlaceholder:
            !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "LOADING_PLACEHOLDER"
      }
    };

  }
}).

    mount(applicationRootElement);
