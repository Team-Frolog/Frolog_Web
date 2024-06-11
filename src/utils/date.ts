export const getToday = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  return today;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};
