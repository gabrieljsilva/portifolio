import { formatDistance, Locale } from "date-fns";

export function calculateAndFormatElapsedTime(start: Date, end: Date, locale: Locale) {
  return formatDistance(start, end, { locale });
}
