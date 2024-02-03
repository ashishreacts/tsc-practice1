enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const dayMessages: string[] = [
  "today is sunday",
  "today is monday",
  "today is tuesday",
  "today is wednesday",
  "today is thursday",
  "today is friday",
  "today is saturday",
];

const weekDayMessage = (day: WeekDays) => {
  if (day >= 0 && day < dayMessages.length) {
    return dayMessages[day];
  } else {
    return "Invalid day";
  }
};

const today: WeekDays = WeekDays.Friday;
const message = weekDayMessage(today);
console.log(message);
