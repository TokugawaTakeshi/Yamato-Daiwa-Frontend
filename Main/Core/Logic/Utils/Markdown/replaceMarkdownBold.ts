import { splitString } from "@yamato-daiwa/es-extensions";


export function replaceMarkdownBold(
  markdownCode: string,
  replacer: (boldedContent: string) => string
): string {

  const guidanceSegments: Array<string> = splitString(markdownCode, "**");

  if (guidanceSegments.length > 0) {

    for (let segmentIndex: number = 0; segmentIndex <= guidanceSegments.length - 1; segmentIndex++) {

      const currentSegment: string = guidanceSegments[segmentIndex];

      if (segmentIndex % 2 !== 0) {
        guidanceSegments[segmentIndex] = replacer(currentSegment);
      }

    }

  }

  return guidanceSegments.join("");

}
