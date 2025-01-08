import { defaultMessage, emptyMessage } from '../data/chat';

/** 개구리 랜덤 메세지 반환 함수 */
export const getRandomMessage = () => {
  const idx = Math.floor(Math.random() * defaultMessage.length);
  return defaultMessage[idx].value;
};

/** 우물이 비어있는 경우 랜덤 메세지 반환 함수 */
export const getRandomEmptyMessage = () => {
  const idx = Math.floor(Math.random() * emptyMessage.length);
  return emptyMessage[idx].value;
};
