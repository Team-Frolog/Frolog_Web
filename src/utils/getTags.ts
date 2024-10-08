import { conTags, proTags } from '@/data/tag';

export const getTags = (type: 'pros' | 'cons', keys: string[]) => {
  let result;

  if (type === 'pros') {
    result = proTags.filter((tag) => keys.includes(tag.id));
  } else {
    result = conTags.filter((tag) => keys.includes(tag.id));
  }

  return result;
};

export const getTagById = (type: 'pros' | 'cons', key: string) => {
  let result;

  if (type === 'pros') {
    result = proTags.find((tag) => tag.id === key);
  } else {
    result = conTags.find((tag) => tag.id === key);
  }

  return result?.value;
};
