import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT, WELLITEM_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import * as Sentry from '@sentry/nextjs';
import {
  EditWell,
  EditWellReq,
  GetWell,
  GetWellNameAvailability,
  PostWell,
  PostWellItem,
  PostWellItemReq,
  PostWellReq,
  SearchWell,
  SearchWellItem,
} from '@frolog/frolog-api';

const postWell = new PostWell(baseOptions);
const searchWell = new SearchWell(baseOptions);
const fetchWell = new GetWell(baseOptions);
const searchWellItem = new SearchWellItem(baseOptions);
const editWellObj = new EditWell(baseOptions);
const postWellItem = new PostWellItem(baseOptions);
const getWellNameAvailability = new GetWellNameAvailability(baseOptions);

export const addNewWell = async (req: PostWellReq) => {
  const response = await postWell.fetch(req);
  return response;
};

export const getWellList = async (owner: string, page: number) => {
  try {
    const response = await searchWell.fetch({
      owner,
      limit: DEFAULT_LIMIT,
      page,
    });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);
    return {
      wells: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const getWell = async (id: string) => {
  const response = await fetchWell.fetch({ id });
  return response;
};

export const getWellItems = async (page: number, well_id: string) => {
  const response = await searchWellItem.fetch({
    well_id,
    page,
    limit: WELLITEM_LIMIT,
    sort: 'newest',
  });
  return response;
};

export const editWell = async (req: EditWellReq) => {
  const response = await editWellObj.fetch(req);
  return response;
};

export const addWellItem = async (req: PostWellItemReq) => {
  const response = await postWellItem.fetch(req);
  return response;
};

export const checkWellName = async (name: string) => {
  const response = await getWellNameAvailability.fetch({ name });
  return response.result;
};
