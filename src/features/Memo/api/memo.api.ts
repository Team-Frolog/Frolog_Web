import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import {
  DeleteMemoImage,
  PostMemo,
  PostMemoReq,
  SearchMemo,
  UploadMemoImage,
  UploadMemoImageReq,
  DeleteMemoImageReq,
  GetMemo,
  GetMemoReq,
  EditMemoReq,
  EditMemo,
  DeleteMemo,
  DeleteMemoReq,
} from '@frolog/frolog-api';

const searchMemo = new SearchMemo(baseOptions);
const postMemo = new PostMemo(baseOptions);
const uploadMemoImg = new UploadMemoImage(baseOptions);
const deleteMemoImg = new DeleteMemoImage(baseOptions);
const getMemo = new GetMemo(baseOptions);
const editMemo = new EditMemo(baseOptions);
const deleteMemoObj = new DeleteMemo(baseOptions);

export const getMemos = async (isbn: string, userId: string, page: number) => {
  try {
    const response = await searchMemo.fetch({
      isbn,
      writer: userId,
      limit: DEFAULT_LIMIT,
      page,
    });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      memos: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const getMemoDetail = async (req: GetMemoReq) => {
  const response = await getMemo.fetch(req);
  return response;
};

export const addNewMemo = async (req: PostMemoReq) => {
  const response = await postMemo.fetch(req);
  return response;
};

export const uploadMemoImage = async (req: UploadMemoImageReq) => {
  const response = await uploadMemoImg.fetch(req);
  return response;
};

export const deleteMemoImage = async (req: DeleteMemoImageReq) => {
  const response = await deleteMemoImg.fetch(req);
  return response;
};

export const editMemoDetail = async (req: EditMemoReq) => {
  const response = await editMemo.fetch(req);
  return response;
};

export const deleteMemo = async (req: DeleteMemoReq) => {
  const response = await deleteMemoObj.fetch(req);
  return response;
};
