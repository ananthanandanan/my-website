type DateStyle = "short" | "long" | "full";

export function formatDate(
  date: string | Date,
  style: DateStyle = "short"
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (style === "short") {
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
  if (style === "long") {
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return d.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
}
