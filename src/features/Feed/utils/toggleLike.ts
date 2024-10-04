import { GetCommentsRes } from '../types/comment';

export const toggleLike = (item: GetCommentsRes) => {
  item.like = !item.like;
  item.like_count = item.like_count
    ? item.like_count + (item.like ? 1 : -1)
    : 1;
};
