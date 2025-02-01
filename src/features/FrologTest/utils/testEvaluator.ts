/* eslint-disable prefer-destructuring */
type NumberObj = { [key: number]: number };
export enum FrologTestType {
  EMOTION = '1',
  THINKING = '2',
  ACHIEVEMENT = '3',
}

/** 독서 성향 테스트 질문별 가중치 */
export const weight: NumberObj = {
  1: 3,
  2: 3,
  3: 2,
  4: 2,
  5: 2,
  6: 1,
  7: 1,
};

/** 독서 성향 테스트 결과 계산 함수 */
export const testEvaluator = (answers: number[]) => {
  const totalScore: NumberObj = {
    [FrologTestType.EMOTION]: 0,
    [FrologTestType.THINKING]: 0,
    [FrologTestType.ACHIEVEMENT]: 0,
  };

  answers.forEach((answer, index) => {
    const questionNumber = index + 1;
    const questionWeight = weight[questionNumber];

    totalScore[answer] += questionWeight;
  });

  // 최대 점수 계산
  const maxScore = Math.max(...Object.values(totalScore));
  const maxScoreTypes = Object.keys(totalScore).filter(
    (type) => totalScore[Number(type)] === maxScore
  );

  let resultType;

  // 최댓값이 1개인 경우
  if (maxScoreTypes.length === 1) {
    resultType = maxScoreTypes[0];
  } else {
    const secondQuestion = answers[1]; // 2번 질문

    if (
      secondQuestion === 1 &&
      maxScoreTypes.includes(FrologTestType.EMOTION)
    ) {
      resultType = 1;
    } else if (
      secondQuestion === 2 &&
      maxScoreTypes.includes(FrologTestType.THINKING)
    ) {
      resultType = 2;
    } else if (
      secondQuestion === 3 &&
      maxScoreTypes.includes(FrologTestType.ACHIEVEMENT)
    ) {
      resultType = 3;
    } else {
      // 1번 질문의 답변으로 결정
      resultType = answers[0];
    }
  }

  return resultType;
};

export const getTestTypeById = (type: string) => {
  switch (type) {
    case FrologTestType.EMOTION:
      return '감정형';
    case FrologTestType.THINKING:
      return '사고형';
    case FrologTestType.ACHIEVEMENT:
      return '성취형';
    default:
      return '?';
  }
};
