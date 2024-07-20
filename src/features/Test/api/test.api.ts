import { authOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { EditProfile, EditProfileReq } from '@frolog/frolog-api';

const editProfile = new EditProfile(authOptions);

export const editTestType = async (req: EditProfileReq) => {
  try {
    const data = await editProfile.fetch(req);
    return data.result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
