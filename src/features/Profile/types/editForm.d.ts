import { InfoObject } from '@/utils/transformInfo';
import { PersonalInfo } from '@frolog/frolog-api';

export interface ProfileEditFormType {
  username: string;
  image: string | null;
  reading_preference: string | null;
  self_intro: string;
  personal_infos: InfoObject;
}

export interface EditReq {
  username: string;
  image: string | null;
  reading_preference: string | null;
  self_intro: string;
  personal_infos: PersonalInfo[];
}
