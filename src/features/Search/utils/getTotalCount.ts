/** 카테고리별 검색결과 취합 함수 - deprecated */
export const getTotalCount = (
  data: {
    category: string;
    count: number;
  }[]
) => data.reduce((a, c) => a + c.count, 0);
