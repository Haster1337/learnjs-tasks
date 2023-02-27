function getLastDayOfMonth(year, months) {
  return new Date(year, months + 1, 0).getDate();
}