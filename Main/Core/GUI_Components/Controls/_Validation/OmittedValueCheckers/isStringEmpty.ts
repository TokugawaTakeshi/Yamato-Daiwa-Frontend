export default function isStringEmpty(possiblyEmptyString: string): possiblyEmptyString is string {
  return possiblyEmptyString.length === 0;
}
