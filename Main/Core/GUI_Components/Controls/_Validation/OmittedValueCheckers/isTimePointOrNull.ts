import { TimePoint } from "@yamato-daiwa/es-extensions";


export default function isTimePointOrNull(
  potentiallyTimePointOrNull: unknown
): potentiallyTimePointOrNull is TimePoint | null {
  return potentiallyTimePointOrNull instanceof TimePoint || potentiallyTimePointOrNull === null;
}
