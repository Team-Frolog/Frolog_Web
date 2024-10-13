export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getToday = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  return today;
};

export const getMinDate = () => {
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 14,
    today.getMonth(),
    today.getDate()
  );

  return minDate.toISOString().split('T')[0];
};
