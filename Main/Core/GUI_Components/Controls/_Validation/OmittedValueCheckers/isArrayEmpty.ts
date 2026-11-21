export default function isArrayEmpty<ArrayElement>(
  possiblyEmptyArray: Array<ArrayElement>
): possiblyEmptyArray is Array<ArrayElement> {
  return possiblyEmptyArray.length === 0;
}
