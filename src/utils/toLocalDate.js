export function toLocalDateStringShort(date) {
  const options = {
    yaer: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fa-IR");
}
