interface IPageConfig {
  [key: string]: {
    PATH: string;
    NAME?: string;
    QUERY?: {
      [key: string]: string;
    };
  };
}

interface IPages {
  [key: string]: string;
}

export const PAGES: IPages = {
  HOME: '/',
  LANDING: '/landing',
  JOIN: '/join',
  JOIN_FINISH: '/join/finish',
} as const;

export const PAGE_CONFIG: IPageConfig = {
  JOIN: {
    PATH: PAGES.JOIN,
    NAME: '회원가입',
    QUERY: {
      '1': '약관 동의',
      '2': '회원가입',
      '3': '인증코드 입력',
      '4': '회원정보',
    },
  },
} as const;
