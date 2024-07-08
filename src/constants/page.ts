interface PageConfig {
  [key: string]: {
    PATH: string;
    NAME?: string;
    STEP?: {
      [key: string]: string;
    };
  };
}

export const PAGES = {
  HOME: '/',
  LANDING: '/landing',
  JOIN: '/join',
  JOIN_FINISH: '/join/finish',
  LOGIN: '/login',
  FIND_PASSWORD: '/find-password',
  TEST: '/frolog-test',
  TEST_RESULT: '/frolog-test/result',
  WELL_BOOK: '/well-book',
} as const;

export const PAGE_CONFIG: PageConfig = {
  LOGIN: {
    PATH: PAGES.LOGIN,
    NAME: '로그인',
  },
  FIND_PASSWORD: {
    PATH: PAGES.FIND_PASSWORD,
    NAME: '비밀번호 찾기',
    STEP: {
      '1': '이메일 인증',
      '2': '인증코드 입력',
      '3': '비밀번호 재설정',
    },
  },
  JOIN: {
    PATH: PAGES.JOIN,
    NAME: '회원가입',
    STEP: {
      '1': '약관 동의',
      '2': '회원가입',
      '3': '인증코드 입력',
      '4': '회원정보',
    },
  },
} as const;
