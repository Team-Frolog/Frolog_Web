import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
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
import { getSession } from 'next-auth/react';

const searchMemo = new SearchMemo(baseOptions);
const postMemo = new PostMemo(baseOptions);
const uploadMemoImg = new UploadMemoImage(baseOptions);
const deleteMemoImg = new DeleteMemoImage(baseOptions);
const getMemo = new GetMemo(baseOptions);
const editMemo = new EditMemo(baseOptions);
const deleteMemoObj = new DeleteMemo(baseOptions);

export const getMemos = async (isbn: string) => {
  const session = await getSession();
  if (!session) return;

  const response = await searchMemo.fetch({
    isbn,
    writer: session.user.id,
  });
  return response;
};

export const getMemoDetail = async (req: GetMemoReq) => {
  try {
    const response = await getMemo.fetch(req);
    return response;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
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
