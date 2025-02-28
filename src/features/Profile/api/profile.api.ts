import { baseOptions } from '@/api/options';
import {
  EditProfile,
  EditProfileReq,
  GetProfileDetail,
  UploadProfileImage,
} from '@frolog/frolog-api';

const getProfileDetailObj = new GetProfileDetail(baseOptions);

export const getProfileDetail = async (id: string) => {
  const response = await getProfileDetailObj.fetch({ id });
  return response;
};

export const editProfileImage = async (file: File | Blob | Buffer) => {
  const response = await new UploadProfileImage(baseOptions).fetch({ file });
  return response;
};

export const editProfile = async (req: EditProfileReq) => {
  const data = await new EditProfile(baseOptions).fetch(req);
  return data.result;
};
