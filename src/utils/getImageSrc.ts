export const getImageSrc = (
  image: string | undefined,
  type: 'memo' | 'profile' | 'book'
) => {
  if (!image) return null;
  return image.startsWith('data:')
    ? image
    : `https://images.frolog.kr/${type}/${image}.webp`;
};
