export default function isNotNaN_Number(possiblyNumericValue: unknown): possiblyNumericValue is number {
  return typeof possiblyNumericValue === "number" && !isNaN(possiblyNumericValue);
}
