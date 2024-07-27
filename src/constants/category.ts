interface Category {
  [key: string]: {
    name: string;
    bg: string;
    text: string;
    band: string;
  };
}

interface CategoryClass {
  [key: string]: {
    name: string;
    bg: string;
    text: string;
    band_bg: string;
    band_text: string;
  };
}

export const CATEGORY: Category = {
  novel: {
    name: '소설',
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
  religion: {
    name: '종교',
    bg: '#CAA2FF',
    text: '#6C5A84',
    band: '#D9BBFF',
  },
  foreign_language: {
    name: '외국어',
    bg: '#92666C',
    text: '#FFC5CC',
    band: '#B78E93',
  },
  self_developement: {
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

export const CATEGORY_CLASS: CategoryClass = {
  novel: {
    name: '소설',
    bg: 'bg-category-bg-novel',
    text: 'text-category-text-novel',
    band_bg: 'bg-category-band-novel',
    band_text: 'text-category-band-novel',
  },
  art: {
    name: '예술',
    bg: 'bg-category-bg-art',
    text: 'text-category-text-art',
    band_bg: 'bg-category-band-art',
    band_text: 'text-category-band-art',
  },
  cartoon: {
    name: '만화',
    bg: 'bg-category-bg-cartoon',
    text: 'text-category-text-cartoon',
    band_bg: 'bg-category-band-cartoon',
    band_text: 'text-category-band-cartoon',
  },
  humanities: {
    name: '인문학',
    bg: 'bg-category-bg-humanities',
    text: 'text-category-text-humanities',
    band_bg: 'bg-category-band-humanities',
    band_text: 'text-category-band-humanities',
  },
  religion: {
    name: '종교',
    bg: 'bg-category-bg-religion',
    text: 'text-category-text-religion',
    band_bg: 'bg-category-band-religion',
    band_text: 'text-category-band-religion',
  },
  foreign_language: {
    name: '외국어',
    bg: 'bg-category-bg-foreign_language',
    text: 'text-category-text-foreign_language',
    band_bg: 'bg-category-band-foreign_language',
    band_text: 'text-category-band-foreign_language',
  },
  self_developement: {
    name: '자기개발',
    bg: 'bg-category-bg-self_developement',
    text: 'text-category-text-self_developement',
    band_bg: 'bg-category-band-self_developement',
    band_text: 'text-category-band-self_developement',
  },
  sociology: {
    name: '사회',
    bg: 'bg-category-bg-sociology',
    text: 'text-category-text-sociology',
    band_bg: 'bg-category-band-sociology',
    band_text: 'text-category-band-sociology',
  },
  etc: {
    name: '기타',
    bg: 'bg-category-bg-etc',
    text: 'text-category-text-etc',
    band_bg: 'bg-category-band-etc',
    band_text: 'text-category-band-etc',
  },
  science: {
    name: '과학',
    bg: 'bg-category-bg-science',
    text: 'text-category-text-science',
    band_bg: 'bg-category-band-science',
    band_text: 'text-category-band-science',
  },
  it: {
    name: 'IT',
    bg: 'bg-category-bg-it',
    text: 'text-category-text-it',
    band_bg: 'bg-category-band-it',
    band_text: 'text-category-band-it',
  },
  economic_business: {
    name: '경제경영',
    bg: 'bg-category-bg-economic_business',
    text: 'text-category-text-economic_business',
    band_bg: 'bg-category-band-economic_business',
    band_text: 'text-category-band-economic_business',
  },
  life: {
    name: '라이프',
    bg: 'bg-category-bg-life',
    text: 'text-category-text-life',
    band_bg: 'bg-category-band-life',
    band_text: 'text-category-band-life',
  },
  travel: {
    name: '여행',
    bg: 'bg-category-bg-travel',
    text: 'text-category-text-travel',
    band_bg: 'bg-category-band-travel',
    band_text: 'text-category-band-travel',
  },
  essay: {
    name: '에세이',
    bg: 'bg-category-bg-essay',
    text: 'text-category-text-essay',
    band_bg: 'bg-category-band-essay',
    band_text: 'text-category-band-essay',
  },
};
