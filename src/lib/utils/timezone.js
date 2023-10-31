export function getTimeZoneAbbreviation(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" });
  const parts = formatter.formatToParts(date);
  const timeZonePart = parts.find((part) => part.type === "timeZoneName");
  return timeZonePart ? timeZonePart.value : null;
}

export function getDateString(date) {
  // Extract the local date and time components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  // Format the date and time components as a string
  const localDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  return localDateTime;
}
