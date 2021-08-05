export const convertDateToViewFormat = (date: string) => {
  const dateInUTC = new Date(date).toUTCString();
  const [dayInYear] = dateInUTC.split(':');
  const [weekDay, dayNumber, monthName, year] = dayInYear.split(' ');

  return {
    weekDay: weekDay.replace(',', ''),
    dayNumber,
    monthName,
    year,
  };
};
