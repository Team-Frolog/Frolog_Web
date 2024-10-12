import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { GetProfileDetail, UploadProfileImage } from '@frolog/frolog-api';

const getProfileDetailObj = new GetProfileDetail(baseOptions);
const uploadProfileImage = new UploadProfileImage(baseOptions);

export const getProfileDetail = async (id: string) => {
  try {
    const response = await getProfileDetailObj.fetch({ id });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const editProfileImage = async (file: File | Blob | Buffer) => {
  const response = await uploadProfileImage.fetch({ file });
  return response;
};
