interface IPageConfig {
  [key: string]: {
    PATH: string;
    NAME: string;
    QUERY?: {
      [key: string]: string;
    };
  };
}

export const PAGE_CONFIG: IPageConfig = {
  HOME: {
    PATH: '/',
    NAME: '홈 피드',
  },
  JOIN: {
    PATH: '/join',
    NAME: '회원가입',
    QUERY: {
      '1': '회원가입',
      '2': '인증코드 입력',
      '3': '회원정보',
    },
  },
};
