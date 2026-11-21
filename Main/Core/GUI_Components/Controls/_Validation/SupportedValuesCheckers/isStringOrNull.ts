export default function isStringOrNull(rawValue: unknown): rawValue is string | null {
  return typeof rawValue === "string" || rawValue === null;
}
