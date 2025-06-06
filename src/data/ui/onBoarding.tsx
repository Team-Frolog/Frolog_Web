interface OnBoarding {
  [key: number]: {
    title: () => JSX.Element;
  };
}

export const onBoarding: OnBoarding = {
  1: {
    title: () => (
      <>
        독서 기록으로
        <br />
        개구리를
        <br />
        우물에서 구출하세요
      </>
    ),
  },
  2: {
    title: () => (
      <>
        독서 친구들과
        <br />
        소통해
        <br />
        시야를 확장해요
      </>
    ),
  },
  3: {
    title: () => (
      <>
        기록해 얻은
        <br />
        포인트로
        <br />
        다양한 개구리를 획득해요
      </>
    ),
  },
};
