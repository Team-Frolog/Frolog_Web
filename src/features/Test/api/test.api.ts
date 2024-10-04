import { baseOptions } from '@/api/options';
import { EditProfile, EditProfileReq } from '@frolog/frolog-api';

const editProfile = new EditProfile(baseOptions);

export const editTestType = async (req: EditProfileReq) => {
  const data = await editProfile.fetch(req);
  return data.result;
};
