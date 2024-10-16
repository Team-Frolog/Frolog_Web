interface OnBoarding {
  [key: number]: {
    title: () => JSX.Element;
    titleColor: string;
    bg: string;
    groundColor: string;
    textColor: string;
    boldColor: string;
  };
}

export const onBoarding: OnBoarding = {
  1: {
    title: () => (
      <>
        우물에 책을 쌓아
        <br />
        탈출하세요!
      </>
    ),
    titleColor: 'text-main_hightlight',
    bg: `bg-gray-300 bg-[url('/images/well/bg/well-bg-1.svg')]`,
    groundColor: 'bg-gray-300',
    textColor: 'text-gray-600',
    boldColor: 'text-gray-800',
  },
  2: {
    title: () => (
      <>
        책을 많이 읽으면
        <br />새 캐릭터 등장!
      </>
    ),
    titleColor: 'text-main_hightlight',
    bg: `bg-gray-300 bg-[url('/images/well/bg/well-bg-1.svg')]`,
    groundColor: 'bg-gray-300',
    textColor: 'text-gray-600',
    boldColor: 'text-gray-800',
  },
  3: {
    title: () => (
      <>
        나의 독서 성향에
        <br />
        맞는 책을 추천해줘요!
      </>
    ),
    titleColor: 'text-main_hightlight',
    bg: 'bg-gray-900',
    groundColor: 'bg-gray-900',
    textColor: 'text-gray-400',
    boldColor: 'text-white',
  },
  4: {
    title: () => (
      <>
        내 독서기록을
        <br />
        공유하고 소통해요!
      </>
    ),
    titleColor: 'text-gray-800',
    bg: 'bg-gray-300',
    groundColor: 'bg-gray-300',
    textColor: 'text-gray-600',
    boldColor: 'text-gray-800',
  },
};
