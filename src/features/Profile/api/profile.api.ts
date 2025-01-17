import { baseOptions } from '@/api/options';
import {
  EditProfile,
  EditProfileReq,
  GetProfileDetail,
  UploadProfileImage,
} from '@frolog/frolog-api';

const getProfileDetailObj = new GetProfileDetail(baseOptions);
const uploadProfileImage = new UploadProfileImage(baseOptions);
const editUserProfile = new EditProfile(baseOptions);

export const getProfileDetail = async (id: string) => {
  const response = await getProfileDetailObj.fetch({ id });
  return response;
};

export const editProfileImage = async (file: File | Blob | Buffer) => {
  const response = await uploadProfileImage.fetch({ file });
  return response;
};

export const editProfile = async (req: EditProfileReq) => {
  const data = await editUserProfile.fetch(req);
  return data.result;
};
