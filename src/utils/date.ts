export const getToday = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  return today;
};
