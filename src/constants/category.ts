interface Category {
  [key: number]: {
    name: string;
    label: string;
    bg: string;
    text: string;
    band: string;
  };
}

export const CATEGORY: Category = {
  1: {
    name: '소설',
    label: 'novel',
    bg: '#FE2F2F',
    text: '#FABBC8',
    band: '#FF7171',
  },
  2: {
    name: '예술',
    label: 'art',
    bg: '#FE49A9',
    text: '#FFB5DC',
    band: '#FF7CC2',
  },
  3: {
    name: '만화',
    label: 'cartoon',
    bg: '#FF8BCA',
    text: '#AE4039',
    band: '#FFADDA',
  },
  4: {
    name: '인문학',
    label: 'humanities',
    bg: '#B85FFF',
    text: '#F3B3EE',
    band: '#D095FF',
  },
  5: {
    name: '종교',
    label: 'religion',
    bg: '#CAA2FF',
    text: '#6C5A84',
    band: '#D9BBFF',
  },
  6: {
    name: '외국어',
    label: 'foreign_language',
    bg: '#92666C',
    text: '#FFC5CC',
    band: '#B78E93',
  },
  7: {
    name: '자기개발',
    label: 'self_developement',
    bg: '#FB7A35',
    text: '#FFC8AB',
    band: '#FFA474',
  },
  8: {
    name: '사회',
    label: 'sociology',
    bg: '#FFA144',
    text: '#FFDDBB',
    band: '#FFC183',
  },
  9: {
    name: '기타',
    label: 'etc',
    bg: '#FFDA4A',
    text: '#A78500',
    band: '#FFE88C',
  },
  10: {
    name: '과학',
    label: 'science',
    bg: '#4D6FF4',
    text: '#BBC4E9',
    band: '#9BACF1',
  },
  11: {
    name: 'IT',
    label: 'it',
    bg: '#84ADFF',
    text: '#3C4F77',
    band: '#AAC7FF',
  },
  12: {
    name: '경제경영',
    label: 'economic_business',
    bg: '#6BCEF5',
    text: '#0073A0',
    band: '#9DE3FF',
  },
  13: {
    name: '라이프',
    label: 'life',
    bg: '#75F3C9',
    text: '#00754E',
    band: '#B0FFE5',
  },
  14: {
    name: '여행',
    label: 'travel',
    bg: '#00CE4C',
    text: '#00722A',
    band: '#6EED9C',
  },
  15: {
    name: '에세이',
    label: 'essay',
    bg: '#A0FF56',
    text: '#419400',
    band: '#CAFFA0',
  },
};
