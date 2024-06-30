import { EditProfile, EditProfileReq } from '@frolog/frolog-api';
import { ERROR_ALERT } from '@/constants/message';
import { authOptions } from './options';

const editProfile = new EditProfile(authOptions);

const userAPI = {
  editTestType: async (req: EditProfileReq) => {
    try {
      const data = await editProfile.fetch(req);
      return data.result;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
};

export default userAPI;
