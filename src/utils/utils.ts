const monthStringFormat = (numberMonth: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[numberMonth];
};

export const getDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return `${date.getDate()} ${monthStringFormat(date.getMonth())}`;
};
