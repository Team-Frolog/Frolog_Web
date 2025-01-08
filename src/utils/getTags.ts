import { CONS_TAG, PROS_TAG } from '@/constants/tags';

/** 장점/단점 태그를 구하는 함수
 * @param type - 'pros' or 'cons'
 * @param keys - 라벨을 구하고자 하는 태그의 키 값 리스트 (영문)
 */
export const getTags = (type: 'pros' | 'cons', keys: string[]) => {
  let result;

  if (type === 'pros') {
    result = PROS_TAG.filter((tag) => keys.includes(tag.id));
  } else {
    result = CONS_TAG.filter((tag) => keys.includes(tag.id));
  }

  return result;
};

/** 개별 태그의 키 값을 이용하여 라벨을 구하는 함수
 * @param type - 'pros' or 'cons'
 * @param key - 라벨을 구하고자 하는 태그의 키 값 (영문)
 */
export const getTagById = (type: 'pros' | 'cons', key: string) => {
  let result;

  if (type === 'pros') {
    result = PROS_TAG.find((tag) => tag.id === key);
  } else {
    result = CONS_TAG.find((tag) => tag.id === key);
  }

  return result?.value;
};
