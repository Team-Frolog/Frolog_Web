import { CONS_TAG, PROS_TAG } from '@/constants/tags';

export const getTags = (type: 'pros' | 'cons', keys: string[]) => {
  let result;

  if (type === 'pros') {
    result = PROS_TAG.filter((tag) => keys.includes(tag.id));
  } else {
    result = CONS_TAG.filter((tag) => keys.includes(tag.id));
  }

  return result;
};

export const getTagById = (type: 'pros' | 'cons', key: string) => {
  let result;

  if (type === 'pros') {
    result = PROS_TAG.find((tag) => tag.id === key);
  } else {
    result = CONS_TAG.find((tag) => tag.id === key);
  }

  return result?.value;
};
