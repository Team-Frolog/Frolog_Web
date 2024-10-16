export const getIsNew = (date: string) => {
  const inputDate = new Date(date);
  const now = new Date();

  const oneDay = 24 * 60 * 60 * 1000;

  return now.getTime() - inputDate.getTime() <= oneDay;
};
