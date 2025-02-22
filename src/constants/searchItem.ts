interface SearchItem {
  [key: string]: {
    target: string;
    content: string;
  };
}

export const SEARCH_ITEM: SearchItem = {
  book: {
    target: '책',
    content: '책 제목이나 저자명',
  },
  well: {
    target: '우물',
    content: '찾으시는 우물 이름',
  },
};
