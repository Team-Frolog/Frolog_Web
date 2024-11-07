import { baseOptions } from '@/api/options';
import { SearchStoreItem, SearchStoreItemReq } from '@frolog/frolog-api';

const searchStoreItems = new SearchStoreItem(baseOptions);

export const getStoreItems = async (req: SearchStoreItemReq) => {
  const result = await searchStoreItems.fetch(req);
  return result;
};
