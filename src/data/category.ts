interface Category {
  name: string;
  color: string;
}

export const category: {
  [key: number]: Category;
} = {
  1: {
    name: '소설',
    color: '#FFBA14',
  },
  2: {
    name: '',
    color: '#6BCEF5',
  },
  3: {
    name: '',
    color: '#FD349F',
  },
  4: {
    name: '',
    color: '#00CE4C',
  },
};
