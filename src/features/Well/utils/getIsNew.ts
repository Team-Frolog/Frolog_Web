/** 전달받은 날짜가 오늘로부터 24시간 이내인지 계산하는 함수 */
export const getIsNew = (date: string) => {
  const inputDate = new Date(date);
  const now = new Date();

  const oneDay = 24 * 60 * 60 * 1000;

  return now.getTime() - inputDate.getTime() <= oneDay;
};
