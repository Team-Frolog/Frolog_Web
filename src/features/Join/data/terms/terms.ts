import { marketing } from './marketing';
import { privacyPolicy } from './privacyPolicy';
import { termsOfUse } from './termsOfUse';

export interface Terms {
  id: number;
  name: string;
  label: string;
  title?: string;
  view?: string;
}

export const terms: Terms[] = [
  { id: 0, name: 'age', label: '[필수] 만 14세 이상입니다.' },
  {
    id: 1,
    name: 'terms_of_use',
    label: '[필수] 이용약관 동의',
    title: '이용약관 동의',
    view: termsOfUse,
  },
  {
    id: 2,
    name: 'privacy_policy',
    label: '[필수] 개인정보 수집 및 이용동의',
    title: '개인정보 수집 및 이용동의',
    view: privacyPolicy,
  },
  {
    id: 3,
    name: 'marketing',
    label: '[선택] 마케팅 목적의 개인정보 수집 및 이용동의',
    title: '마케팅 목적의 개인정보 수집 및 이용동의',
    view: marketing,
  },
  { id: 4, name: 'ads', label: '[선택] 광고성 정보 수신 동의' },
];
