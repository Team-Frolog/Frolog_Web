import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { SearchBook, SearchBookReq } from '@frolog/frolog-api';
import { LIMIT } from '../constants/query';

const searchBookObj = new SearchBook(baseOptions);

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
    console.log(err);
    window.alert(ERROR_ALERT);
    return {
      books: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
