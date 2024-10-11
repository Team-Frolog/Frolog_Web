import { baseOptions } from '@/api/options';
import { EditProfile, EditProfileReq } from '@frolog/frolog-api';

const editUserProfile = new EditProfile(baseOptions);

export const editProfile = async (req: EditProfileReq) => {
  const data = await editUserProfile.fetch(req);
  return data.result;
};
