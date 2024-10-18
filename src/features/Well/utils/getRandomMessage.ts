import { defaultMessage } from '../data/chat';

export const getRandomMessage = () => {
  console.log('call');
  const idx = Math.floor(Math.random() * defaultMessage.length);
  return defaultMessage[idx].value;
};
