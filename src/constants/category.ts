interface Category {
  [key: string]: {
    name: string;
    bg: string;
    text: string;
    band: string;
  };
}

export const CATEGORY: Category = {
  religion: {
    name: '종교',
    bg: '#FE2F2F',
    text: '#FABBC8',
    band: '#FF7171',
  },
  art: {
    name: '예술',
    bg: '#FE49A9',
    text: '#FFB5DC',
    band: '#FF7CC2',
  },
  cartoon: {
    name: '만화',
    bg: '#FF8BCA',
    text: '#AE4039',
    band: '#FFADDA',
  },
  humanities: {
    name: '인문학',
    bg: '#B85FFF',
    text: '#F3B3EE',
    band: '#D095FF',
  },
  novel: {
    name: '소설',
    bg: '#CAA2FF',
    text: '#6C5A84',
    band: '#D9BBFF',
  },
  foreign_languages: {
    name: '외국어',
    bg: '#92666C',
    text: '#FFC5CC',
    band: '#B78E93',
  },
  self_development: {
    name: '자기개발',
    bg: '#FB7A35',
    text: '#FFC8AB',
    band: '#FFA474',
  },
  sociology: {
    name: '사회',
    bg: '#FFA144',
    text: '#FFDDBB',
    band: '#FFC183',
  },
  etc: {
    name: '기타',
    bg: '#FFDA4A',
    text: '#A78500',
    band: '#FFE88C',
  },
  science: {
    name: '과학',
    bg: '#4D6FF4',
    text: '#BBC4E9',
    band: '#9BACF1',
  },
  it: {
    name: 'IT',
    bg: '#84ADFF',
    text: '#3C4F77',
    band: '#AAC7FF',
  },
  economic_business: {
    name: '경제경영',
    bg: '#6BCEF5',
    text: '#0073A0',
    band: '#9DE3FF',
  },
  life: {
    name: '라이프',
    bg: '#75F3C9',
    text: '#00754E',
    band: '#B0FFE5',
  },
  travel: {
    name: '여행',
    bg: '#00CE4C',
    text: '#00722A',
    band: '#6EED9C',
  },
  essay: {
    name: '에세이',
    bg: '#A0FF56',
    text: '#419400',
    band: '#CAFFA0',
  },
};
