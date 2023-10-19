export function getTimeZoneAbbreviation(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' });
  const parts = formatter.formatToParts(date);
  const timeZonePart = parts.find(part => part.type === "timeZoneName");
  return timeZonePart ? timeZonePart.value : null;
}