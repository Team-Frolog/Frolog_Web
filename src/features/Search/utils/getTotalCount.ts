export const getTotalCount = (
  data: {
    category: string;
    count: number;
  }[]
) => {
  return data.reduce((a, c) => a + c.count, 0);
};
