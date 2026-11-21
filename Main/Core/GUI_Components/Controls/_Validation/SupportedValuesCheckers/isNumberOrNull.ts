export default function isNumberOrNull(rawValue: unknown): rawValue is number | null {
  return typeof rawValue === "number" || rawValue === null;
}
