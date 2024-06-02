export interface IJoinForm {
  email: string;
  password: string;
  passwordCheck: string;
  isCodeVerified: boolean;
  terms: {
    marketing: boolean;
    ads: boolean;
  };
}
