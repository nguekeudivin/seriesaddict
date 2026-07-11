export function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return startOfWeek(result);
}

export function formatDateKey(date) {
  return date.toISOString().split("T")[0];
}

export function formatShortMonth(date) {
  return [
    "janv.",
    "fév.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ][date.getMonth()];
}

export function formatDayLabel(date) {
  return ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."][
    date.getDay()
  ];
}

export function formatDayLabelLong(date) {
  return ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][
    date.getDay()
  ];
}

export function weekRangeLabel(start) {
  const end = addDays(start, 6);
  return `Semaine du ${start.getDate()} ${formatShortMonth(start)} au ${end.getDate()} ${formatShortMonth(end)} ${end.getFullYear()}`;
}
