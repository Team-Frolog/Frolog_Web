import { authOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import {
  DeleteMemoImage,
  PostMemo,
  PostMemoReq,
  SearchMemo,
  SearchMemoReq,
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

const searchMemo = new SearchMemo(authOptions);
const postMemo = new PostMemo(authOptions);
const uploadMemoImg = new UploadMemoImage(authOptions);
const deleteMemoImg = new DeleteMemoImage(authOptions);
const getMemo = new GetMemo(authOptions);
const editMemo = new EditMemo(authOptions);
const deleteMemoObj = new DeleteMemo(authOptions);

export const getMemos = async (req: SearchMemoReq) => {
  try {
    const response = await searchMemo.fetch(req);
    return response;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
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
  try {
    const response = await postMemo.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};

export const uploadMemoImage = async (req: UploadMemoImageReq) => {
  try {
    const response = await uploadMemoImg.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};

export const deleteMemoImage = async (req: DeleteMemoImageReq) => {
  try {
    const response = await deleteMemoImg.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};

export const editMemoDetail = async (req: EditMemoReq) => {
  try {
    const response = await editMemo.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};

export const deleteMemo = async (req: DeleteMemoReq) => {
  try {
    const response = await deleteMemoObj.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};
