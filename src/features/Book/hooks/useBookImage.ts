import { IMAGES } from '@/constants/images';
import { useEffect, useState } from 'react';

export const useBookImage = (imageSrc: string | null) => {
  const [image, setImage] = useState(imageSrc);

  useEffect(() => {
    setImage(imageSrc);
  }, [imageSrc]);

  return { bookCover: image, setDefault: () => setImage(IMAGES.book.cover) };
};
