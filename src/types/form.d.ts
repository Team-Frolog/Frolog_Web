export interface IJoinForm {
  email: string;
  password: string;
  passwordCheck: string;
  terms: {
    marketing: boolean;
    ads: boolean;
  };
  nickname: string;
}
