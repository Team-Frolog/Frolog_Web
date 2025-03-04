import { PAGES } from '@/constants/page';

/** 동적으로 경로를 만드는 함수를 가지고 있는 객체 */
export const getPath = {
  book: (isbn: string) => `/book/${isbn}`,
  profile: (userId: string) => `/${userId}${PAGES.PROFILE}`,
  profileEdit: (userId: string) => `/${userId}${PAGES.PROFILE}/edit`,
  profileSetting: (userId: string) => `/${userId}${PAGES.PROFILE}/setting`,
  follows: (userId: string) => `/${userId}${PAGES.PROFILE}/follows`,
  comments: (itemId: string, type: 'review' | 'memo') =>
    `${PAGES.FEED}/${itemId}/comments?type=${type}`,
  newReview: (userId: string, wellId: string, isbn: string) =>
    `/${userId}/well/${wellId}/new-review/${isbn}`,
  wellDetail: (ownerId: string, wellId: string) => `/${ownerId}/well/${wellId}`,
  wellEdit: (ownerId: string, wellId: string) =>
    `/${ownerId}/well/${wellId}/edit`,
  wellCreate: (userId: string) => `/${userId}/well/create`,
  newMemo: (userId: string, wellId: string, isbn: string) =>
    `/${userId}/well/${wellId}/new-memo/${isbn}`,
  review: (reviewId: string) => `/review/${reviewId}`,
  memo: (memoId: string) => `/memo/${memoId}`,
  memoList: (userId: string, wellId: string, isbn: string) =>
    `/${userId}/well/${wellId}/book/${isbn}/memo`,
};
