/** 생년월일을 이용하여 나이대를 구하는 함수 (ex. 20대) */
export const getAgeCategory = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  if (age < 10) {
    return '10대 미만';
  } else if (age < 20) {
    return '10대';
  } else if (age < 30) {
    return '20대';
  } else if (age < 40) {
    return '30대';
  } else if (age < 50) {
    return '40대';
  } else if (age < 60) {
    return '50대';
  } else {
    return '60대 이상';
  }
};
