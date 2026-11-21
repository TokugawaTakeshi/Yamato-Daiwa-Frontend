import ${COMPONENT_NAME}Gallery from "./_${COMPONENT_NAME}Gallery.vue";
import { createApp as createVueApplication } from "vue";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const applicationRootElement: HTMLElement = getExpectedToBeSingleDOM_Element({
  selector: "#APPLICATION",
  expectedDOM_ElementSubtype: HTMLElement
});


createVueApplication({
  template: `
    <${COMPONENT_NAME}Gallery
      :mustVisuallyHideTopHeading="mustVisuallyHideTopHeading"
      :mustVisuallyHideAllHeadings="mustVisuallyHideAllHeadings"
      :partialsFlags="partialsFlags"
    />
  `,
  components: { ${COMPONENT_NAME}Gallery },
  data(): Readonly<{
    mustVisuallyHideTopHeading: boolean;
    mustVisuallyHideAllHeadings: boolean;
    partialsFlags: Required<${COMPONENT_NAME}Gallery.PartialsFlags>;
  }> {

    const hasPartialNameBeenSpecified: boolean = isNonEmptyString(applicationRootElement.dataset.partial_name);

    return {
      mustVisuallyHideTopHeading: applicationRootElement.dataset.must_visually_hide_top_heading === "",
      mustVisuallyHideAllHeadings: applicationRootElement.dataset.must_visually_hide_all_headings === "",
      partialsFlags: {
        minimal: !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "MINIMAL"
      }
    };

  }
}).

    mount(applicationRootElement);
