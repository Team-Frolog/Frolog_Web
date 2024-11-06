interface OnBoarding {
  [key: number]: {
    title: () => JSX.Element;
  };
}

export const onBoarding: OnBoarding = {
  1: {
    title: () => (
      <>
        우물에 책을 추가해
        <br />
        탈출하세요!
      </>
    ),
  },
  2: {
    title: () => (
      <>
        다양한 캐릭터로
        <br />
        우물을 꾸며요!
      </>
    ),
  },
  3: {
    title: () => (
      <>
        나의 독서 성향에
        <br />
        맞는 책을 추천해줘요!
      </>
    ),
  },
  4: {
    title: () => (
      <>
        내 독서기록을
        <br />
        공유하고 소통해요!
      </>
    ),
  },
};
