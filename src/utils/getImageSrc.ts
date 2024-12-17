/** 이미지 url을 구하는 함수
 * - data url인 경우 그대로 반환합니다.
 * - data url이 아닌 경우 type에 따라 적절한 url을 생성하여 반환합니다.
 */
export const getImageSrc = (
  image: string | undefined,
  type: 'memo' | 'profile' | 'book'
) => {
  if (!image) return null;

  return image.startsWith('data:')
    ? image
    : `https://images.frolog.kr/${type}/${image}.webp`;
};
