import {
  replaceMatchesWithRegularExpressionToDynamicValue,
  type ReplacingOfMatchesWithRegularExpressionToDynamicValue
} from "@yamato-daiwa/es-extensions";


export function replaceMarkdownLink(
  markdownCode: string,
  replacer: (data: Readonly<{ URI: string; anchorText: string; }>) => string
): string {

  return replaceMatchesWithRegularExpressionToDynamicValue<{ URI: string; anchorText: string; }>({
    targetString: markdownCode,
    regularExpressionWithCapturingGroups: /\[(?<anchorText>.+?)\]\((?<URI>.+?)\)/gu,
    replacer: (
      { namedCapturingGroups }: ReplacingOfMatchesWithRegularExpressionToDynamicValue.Matching
    ): string =>
        replacer({ URI: namedCapturingGroups.URI ?? "", anchorText: namedCapturingGroups.anchorText ?? "" })
  });

}
