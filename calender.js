const weekDays = ['SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function isDiv(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  return year && (isDiv(year, 400) || (isDiv(year, 4) && !isDiv(year, 100)));
}

function noOfDaysInMonth(month, year) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
     return 30;
    case 2:
     return isLeapYear(year) ? 29 : 28;
    default:
     return 31;
  }
}

function getWeekdayIndex(weekdayName) {
  return weekDays.indexOf(weekdayName);
}

function generateMonthDates(totalDaysInMonth) {
  const monthDates = [];
  for (let day = 1; day <= totalDaysInMonth; day++) {
    monthDates.push(day);
  }
  return monthDates;
}

function addLeadingEmptyDays(datesInMonth, startingWeekdayName) {
  const offset = getWeekdayIndex(startingWeekdayName);
  const paddedMonth = [];
  for (let padIndex = 0; padIndex < offset; padIndex++) {
    paddedMonth.push('  ');
  }

  for (let index = 0; index < datesInMonth.length; index++) {
    paddedMonth.push(datesInMonth[index].toString().padStart(2, ' '));
  }

  return paddedMonth;
}

function weeks(allDates) {
  const totalWeeks = [];

  for (let dayIndex = 0; dayIndex < allDates.length; dayIndex += 7) {
    totalWeeks.push(allDates.slice(dayIndex, dayIndex + 7));
  }

  return totalWeeks;
}

function month(totalDaysInMonth, startingWeekdayName) {
  const monthDates = generateMonthDates(totalDaysInMonth);
  const paddedMonth = addLeadingEmptyDays(monthDates, startingWeekdayName);
  const weekList = weeks(paddedMonth);

  const result = [];
  for (let i = 0; i < weekList.length; i++) {
    const w = weekList[i];
    result.push(w.join(' '));
  }

  return result;
}

function getNextMonthStartDay(currentStartDay, daysInMonth) {
  const currentIndex = weekDays.indexOf(currentStartDay);
  const nextIndex = (currentIndex + (daysInMonth % 7)) % 7;
  return weekDays[nextIndex];
}

function getFirstDayOfYear(year) {
  const date = new Date(year, 0, 1);
  return weekDays[date.getDay()];
}

function printMonth(yearNumber, monthNumber, startingWeekday) {
  const daysInMonth = noOfDaysInMonth(monthNumber, yearNumber);
  console.log(`\n${monthNames[monthNumber - 1]} ${yearNumber}`);
  console.log('Su Mo Tu We Th Fr Sa');
  const formattedMonth = month(daysInMonth, startingWeekday);
  console.log(formattedMonth.join('\n'));
  return getNextMonthStartDay(startingWeekday, daysInMonth);
}

function calender(yearNumber, monthNumber) {
  let firstDayOfYear = getFirstDayOfYear(yearNumber);

  if (monthNumber) {
    printMonth(yearNumber, monthNumber, firstDayOfYear);
    return;
  }

  for (let monthIndex = 1; monthIndex <= 12; monthIndex++) {
   firstDayOfYear = printMonth(yearNumber, monthIndex, firstDayOfYear);
  }
}

const args = Deno.args;
const yearArg = parseInt(args[0]) || 0;
const monthArg = args[1] ? parseInt(args[1]) : null;

calender(yearArg, monthArg);