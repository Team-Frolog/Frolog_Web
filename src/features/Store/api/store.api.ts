import { baseOptions } from '@/api/options';
import {
  GetWallet,
  SearchStoreItem,
  SearchStoreItemReq,
  PurchaseStoreItem,
} from '@frolog/frolog-api';

const searchStoreItems = new SearchStoreItem(baseOptions);
const getWallet = new GetWallet(baseOptions);
const purchaseStoreItem = new PurchaseStoreItem(baseOptions);

export const getStoreItems = async (req: SearchStoreItemReq) => {
  const result = await searchStoreItems.fetch(req);
  return result;
};

export const getUserPoints = async (id: string) => {
  const result = await getWallet.fetch({ id });
  return result;
};

export const purchaseItem = async (key: string) => {
  const result = await purchaseStoreItem.fetch({ key });
  return result;
};
