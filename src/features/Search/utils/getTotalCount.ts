export const getTotalCount = (
  data: {
    category: string;
    count: number;
  }[]
) => data.reduce((a, c) => a + c.count, 0);
