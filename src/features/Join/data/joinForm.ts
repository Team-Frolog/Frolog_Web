import { getMinDate } from '@/utils/date';
import { JoinForm } from '../types/form';

export const defaultValue: JoinForm = {
  email: '',
  password: '',

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
      value: '선택',
      visibility: true,
    },
    gender: {
      visibility: false,
    },
    birth_date: {
      value: getMinDate(),
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
