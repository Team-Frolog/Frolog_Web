import { GetProfileDetailRes } from '@frolog/frolog-api';
import { EditReq } from '../types/editForm';

export const compareForm = (
  defaultValue: GetProfileDetailRes,
  editValue: EditReq
) => {
  const keys = [
    'username' as keyof EditReq,
    'reading_preference' as keyof EditReq,
    'image' as keyof EditReq,
  ];

  keys.forEach((key) => {
    if (editValue[key] === defaultValue[key]) {
      delete editValue[key];
    }
  });

  const defaultInfos = defaultValue.personal_infos;
  const editInfos = editValue.personal_infos;

  editValue.personal_infos = editInfos.filter((editInfo) => {
    const defaultInfo = defaultInfos.find(
      (info) => info.type === editInfo.type
    );
    if (defaultInfo) {
      return (
        defaultInfo.value !== editInfo.value ||
        defaultInfo.visibility !== editInfo.visibility
      );
    }
    return true;
  });

  return editValue;
};
