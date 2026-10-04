import type VueComponentNotFoundError from "./VueComponentNotFoundError";
import { insertSubstring } from "@yamato-daiwa/es-extensions";


const vueComponentNotFoundErrorLocalization__english: VueComponentNotFoundError.Localization = {

  defaultTitle: "Vue component not found",

  generateDescription(
    { vueReferenceID, messageSpecificPart }: VueComponentNotFoundError.Localization.DescriptionTemplateVariables
  ): string {
    return `Vue component referring to the Vue reference "${ vueReferenceID }" not found.` +
        insertSubstring(
          messageSpecificPart, { modifier: (_messageSpecificPart: string): string => `\n${ _messageSpecificPart }` }
        );
  }


};


export default vueComponentNotFoundErrorLocalization__english;
