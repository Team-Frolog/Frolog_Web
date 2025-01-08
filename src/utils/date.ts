/** Date 객체로 생성된 날짜 스트링을 YYYY-MM-DD 형태로 변환하는 함수 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

/** 오늘 날짜를 YYYY-MM-DD 형태로 변환하는 함수 */
export const getToday = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  return today;
};

/** 회원가입 시 최소 생년월일 날짜를 YYYY-MM-DD 형태로 변환하는 함수 (오늘로부터 14년 이전의 날짜) */
export const getMinDate = () => {
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 14,
    today.getMonth(),
    today.getDate()
  );

  return minDate.toISOString().split('T')[0];
};
