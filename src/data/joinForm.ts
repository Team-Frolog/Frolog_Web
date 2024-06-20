import { IJoinForm } from '@/types/form';
import { getToday } from '@/utils/date';

export const defaultValue: IJoinForm = {
  email: '',
  password: '',
  passwordCheck: '',
  username: '',

  consents: {
    age: {
      version: 'test',
      given: false,
    },
    terms_of_use: {
      version: 'test',
      given: false,
    },
    marketing: {
      version: 'test',
      given: false,
    },
    privacy_policy: {
      version: 'test',
      given: false,
    },
    ads: {
      version: 'test',
      given: false,
    },
  },

  personal_infos: {
    occupation: {
      value: '무직',
      visibility: true,
    },
    birth_date: {
      value: getToday(),
      visibility: true,
    },
    gender: {
      value: '남성',
      visibility: true,
    },
  },
};

export const consentsKeys = [
  'consents.age.given',
  'consents.terms_of_use.given',
  'consents.marketing.given',
  'consents.privacy_policy.given',
  'consents.ads.given',
];

export const requiredConsentsKeys = [
  'consents.age.given',
  'consents.terms_of_use.given',
  'consents.privacy_policy.given',
];
