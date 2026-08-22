import { Logger, UnexpectedEventError } from "@yamato-daiwa/es-extensions";


export default function getCommentDOM_Node(
  {
    directParent,
    commentContent
  }: Readonly<{
    directParent: Element;
    commentContent: string;
  }>
): Comment | null;

export default function getCommentDOM_Node(
  {
    directParent,
    commentContent
  }: Readonly<{
    directParent: Element;
    commentContent: string;
    mustThrowErrorIfCommentNotFound: boolean;
  }>
): Comment;

export default function getCommentDOM_Node(
  {
    directParent,
    commentContent,
    mustThrowErrorIfCommentNotFound
  }: Readonly<{
    directParent: Element;
    commentContent: string;
    mustThrowErrorIfCommentNotFound?: boolean;
  }>
): Comment | null {

  for (const childNode of directParent.childNodes) {

    if (!(childNode instanceof Comment)) {
      continue;
    }


    if (childNode.textContent === commentContent.trim()) {
      return childNode;
    }

  }


  if (mustThrowErrorIfCommentNotFound === true) {
    Logger.throwErrorWithFormattedMessage({
      errorInstance: new UnexpectedEventError(
        `Contrary to expectations, there is not comment with text content: "${ commentContent }" inside ` +
          "specified parent."
      ),
      title: UnexpectedEventError.localization.defaultTitle,
      occurrenceLocation: "getCommentDOM_Node(compoundParameter)"
    });
  }


  return null;

}
