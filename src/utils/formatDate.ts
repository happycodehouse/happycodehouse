const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function formatDate(date: string): string {
  // "19.02.26" → "19 Feb 2026"
  const [dd, mm, yy] = date.split(".");
  const month = MONTHS[parseInt(mm, 10) - 1];
  return `${dd} ${month}`;
}

export function getYear(date: string): string {
  const yy = date.split(".")[2];
  return `20${yy}`;
}

export function formatDateFull(date: string): string {
  const [dd, mm, yy] = date.split(".");
  const month = MONTHS[parseInt(mm, 10) - 1];
  return `${dd} ${month} 20${yy}`; // "19 Feb 2026"
}