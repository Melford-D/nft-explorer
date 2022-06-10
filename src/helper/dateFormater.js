// format ISOdate date to Month, Day Year
const yearMonthDate = (ISOdate) => {
  const date = new Date(ISOdate);
  const monthName = date.toLocaleString("default", { month: "short" });
  return monthName + ", " + date.getDate() + " " + date.getFullYear();
};

const DateFormater = {
  yearMonthDate,
};

export default DateFormater;
