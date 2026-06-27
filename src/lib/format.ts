export function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-Hans-IE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
