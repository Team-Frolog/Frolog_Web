import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import {
  SearchBook,
  SearchBookCountByCategory,
  SearchBookCountByCategoryReq,
  SearchBookReq,
} from '@frolog/frolog-api';
import { LIMIT } from '../constants/query';

const searchBookObj = new SearchBook(baseOptions);
const countByCategory = new SearchBookCountByCategory(baseOptions);

export const searchBook = async ({
  q,
  category,
  page,
}: Omit<SearchBookReq, 'limit'>) => {
  try {
    const result = await searchBookObj.fetch({
      q,
      category,
      limit: LIMIT,
      page,
    });
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
    return {
      books: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};

export const getCategories = async (req: SearchBookCountByCategoryReq) => {
  try {
    const result = await countByCategory.fetch(req);
    return result.counts;
  } catch (err) {
    window.alert(ERROR_ALERT);
    return [];
  }
};
