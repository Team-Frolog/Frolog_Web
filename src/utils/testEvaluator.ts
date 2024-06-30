/* eslint-disable prefer-destructuring */
type NumberObj = { [key: number]: number };

export const weight: NumberObj = {
  1: 3,
  2: 3,
  3: 2,
  4: 2,
  5: 2,
  6: 1,
  7: 1,
};

export const testEvaluator = (answers: number[]) => {
  const totalScore: NumberObj = {
    1: 0,
    2: 0,
    3: 0,
  };

  answers.forEach((answer, index) => {
    const questionNumber = index + 1;
    const questionWeight = weight[questionNumber];

    totalScore[answer] += questionWeight;
  });

  const maxScore = Math.max(totalScore[1], totalScore[2], totalScore[3]);
  const maxScoreTypes = Object.keys(totalScore).filter(
    (type) => totalScore[Number(type)] === maxScore
  );

  let resultType;

  // 최댓값이 1개인 경우
  if (maxScoreTypes.length === 1) {
    resultType = maxScoreTypes[0];
  } else {
    const secondQuestion = answers[1]; // 2번 질문

    if (secondQuestion === 1 && maxScoreTypes.includes('1')) {
      resultType = 1;
    } else if (secondQuestion === 2 && maxScoreTypes.includes('2')) {
      resultType = 2;
    } else if (secondQuestion === 3 && maxScoreTypes.includes('3')) {
      resultType = 3;
    } else {
      // 1번 질문의 답변으로 결정
      resultType = answers[0];
    }
  }

  return resultType;
};
