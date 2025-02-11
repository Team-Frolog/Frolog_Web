const BASE_URL = '/images/well/wave';

interface Category {
  [key: string]: {
    name: string;
    bg: string;
    text: string;
    band: string;
    btnText: string;
    wave: string;
  };
}

export const CATEGORY: Category = {
  religion: {
    name: '종교',
    bg: '#FE2F2F',
    text: '#FABBC8',
    band: '#FF7171',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/religion.svg`,
  },
  art: {
    name: '예술',
    bg: '#FE49A9',
    text: '#FFB5DC',
    band: '#FF7CC2',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/art.svg`,
  },
  cartoon: {
    name: '만화',
    bg: '#FF8BCA',
    text: '#AE4039',
    band: '#FFADDA',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/cartoon.svg`,
  },
  humanities: {
    name: '인문학',
    bg: '#B85FFF',
    text: '#F3B3EE',
    band: '#D095FF',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/humanities.svg`,
  },
  novel: {
    name: '소설',
    bg: '#CAA2FF',
    text: '#6C5A84',
    band: '#D9BBFF',
    btnText: '#313239',
    wave: `${BASE_URL}/novel.svg`,
  },
  foreign_languages: {
    name: '외국어',
    bg: '#92666C',
    text: '#FFC5CC',
    band: '#B78E93',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/foreign_languages.svg`,
  },
  self_development: {
    name: '자기개발',
    bg: '#FF7B35',
    text: '#FFC8AB',
    band: '#FFA474',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/self_development.svg`,
  },
  sociology: {
    name: '사회',
    bg: '#FFA144',
    text: '#FFDDBB',
    band: '#FFC183',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/sociology.svg`,
  },
  unknown: {
    name: '기타',
    bg: '#FFDA4A',
    text: '#A78500',
    band: '#FFE88C',
    btnText: '#313239',
    wave: `${BASE_URL}/unknown.svg`,
  },
  science: {
    name: '과학',
    bg: '#4E72FF',
    text: '#D6DAED',
    band: '#9BACF1',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/science.svg`,
  },
  it: {
    name: 'IT',
    bg: '#84ADFF',
    text: '#3C4F77',
    band: '#AAC7FF',
    btnText: '#313239',
    wave: `${BASE_URL}/it.svg`,
  },
  economic_business: {
    name: '경제경영',
    bg: '#85DCFF',
    text: '#0073A0',
    band: '#9DE3FF',
    btnText: '#313239',
    wave: `${BASE_URL}/economic_business.svg`,
  },
  life: {
    name: '라이프',
    bg: '#75F3C9',
    text: '#00754E',
    band: '#B0FFE5',
    btnText: '#313239',
    wave: `${BASE_URL}/life.svg`,
  },
  travel: {
    name: '여행',
    bg: '#00CE4C',
    text: '#00722A',
    band: '#6EED9C',
    btnText: '#F5F6F9',
    wave: `${BASE_URL}/travel.svg`,
  },
  essay: {
    name: '에세이',
    bg: '#A0FF56',
    text: '#419400',
    band: '#CAFFA0',
    btnText: '#313239',
    wave: `${BASE_URL}/essay.svg`,
  },
} as const;
