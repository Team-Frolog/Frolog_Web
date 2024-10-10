export const formatUnit = (num: number) => {
  if (Math.floor(num / 10000) > 0) {
    return `${Math.floor(num / 10000)}만`;
  }
  return num;
};
