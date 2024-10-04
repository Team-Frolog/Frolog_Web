import { GetMemoRes } from '@frolog/frolog-api';

export const isGetMemoRes = (data: any): data is GetMemoRes =>
  data && typeof data.images === 'object' && Array.isArray(data.images);
