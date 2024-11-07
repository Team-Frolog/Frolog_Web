import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import * as Sentry from '@sentry/nextjs';
import { SearchBook, SearchBookReq } from '@frolog/frolog-api';

const searchBookObj = new SearchBook(baseOptions);

export const searchBook = async ({ q, page }: Omit<SearchBookReq, 'limit'>) => {
  try {
    const result = await searchBookObj.fetch({
      q,
      limit: DEFAULT_LIMIT,
      page,
    });
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);
    return {
      books: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
