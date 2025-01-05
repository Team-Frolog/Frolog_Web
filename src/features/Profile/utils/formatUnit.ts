/** 9,999 이상의 숫자를 '만' 단위로 변환하는 함수 (나머지 버림) */
export const formatUnit = (num: number) => {
  if (Math.floor(num / 10000) > 0) {
    return `${Math.floor(num / 10000)}만`;
  }
  return num;
};
