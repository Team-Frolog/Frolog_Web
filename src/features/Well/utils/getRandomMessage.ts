import { defaultMessage, emptyMessage } from '../data/chat';

export const getRandomMessage = () => {
  const idx = Math.floor(Math.random() * defaultMessage.length);
  return defaultMessage[idx].value;
};

export const getRandomEmptyMessage = () => {
  const idx = Math.floor(Math.random() * emptyMessage.length);
  return emptyMessage[idx].value;
};
