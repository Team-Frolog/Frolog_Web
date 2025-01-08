import { getToday } from '@/utils/date';
import { ProfileEditFormType } from '../types/editForm';

export const profileEditDefaultValue: ProfileEditFormType = {
  username: '',
  image: null,
  reading_preference: null,
  self_intro: '',
  personal_infos: {
    occupation: {
      value: '학생',
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
