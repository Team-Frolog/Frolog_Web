export const getImageSrc = (image: string, type: 'memo' | 'profile') => {
  if (!image) return null;
  return image.startsWith('data:')
    ? image
    : `https://images.frolog.kr/${type}/${image}.webp`;
};
