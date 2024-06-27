import { EditProfile, EditProfileReq } from '@frolog/frolog-api';
import { authOptions } from './options';
import { ERROR_ALERT } from '@/constants/message';

const editProfile = new EditProfile(authOptions);

export const userAPI = {
  editTestType: async (req: EditProfileReq) => {
    try {
      const data = await editProfile.fetch(req);
      return data.result;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
};
