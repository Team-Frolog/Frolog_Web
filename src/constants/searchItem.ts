interface SearchItem {
  [key: string]: {
    target: string;
    content: string;
  };
}

export const SEARCH_ITEM: SearchItem = {
  book: {
    target: '책을',
    content: '책 제목이나 저자명을',
  },
  well: {
    target: '결과를',
    content: '',
  },
};
