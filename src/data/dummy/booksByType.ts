export interface BooksByType {
  id: number;
  name: string;
  author: string;
  rating: number;
  pro?: string;
  con?: string;
  totalReviews: number;
}

export const booksByType: BooksByType[] = [
  {
    id: 1,
    name: '메리',
    author: '안녕달',
    rating: 3,
    totalReviews: 0,
  },
  {
    id: 2,
    name: '메리',
    author: '안녕달',
    rating: 4.5,
    pro: '술술 읽혀요',
    con: '다른 비슷한 책이 더 나아요',
    totalReviews: 38,
  },
  {
    id: 3,
    name: '메리',
    author: '안녕달',
    rating: 4,
    pro: '술술 읽혀요',
    con: '다른 비슷한 책이 더 나아요',
    totalReviews: 12,
  },
];
