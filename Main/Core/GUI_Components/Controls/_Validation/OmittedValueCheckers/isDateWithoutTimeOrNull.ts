import { DateWithoutTime } from "@yamato-daiwa/es-extensions";


export default function isDateWithoutTimeOrNull(
  potentiallyDateWithoutTimeOrNull: unknown
): potentiallyDateWithoutTimeOrNull is DateWithoutTime | null {
  return potentiallyDateWithoutTimeOrNull instanceof DateWithoutTime || potentiallyDateWithoutTimeOrNull === null;
}
