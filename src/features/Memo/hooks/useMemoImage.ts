import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { UploadMemoImageReq } from '@frolog/frolog-api';
import { deleteMemoImage, uploadMemoImage } from '../api/memo.api';

export const useMemoImage = () => {
  const { watch, setValue } = useFormContext();
  const images = watch('images') as string[];
  const [currentImgs, setCurrentImgs] = useState<string[]>(images);

  const { mutate: uploadImage } = useMutation({
    mutationFn: (file: UploadMemoImageReq) => uploadMemoImage(file),
    onSuccess: (res) => setValue('images', [...images, res?.hash]),
  });

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setCurrentImgs((prev) => [...prev, reader.result as string]);
        uploadImage({ file });
      }
    };

    reader.readAsDataURL(file);
  };

  const { mutate: handleDeleteImg } = useMutation({
    mutationFn: (index: number) => deleteMemoImage({ hash: images[index] }),
    onSuccess: (_res, index) => {
      const updatedImages = images.filter((_, i) => i !== index);
      setCurrentImgs(updatedImages);
      setValue('images', updatedImages);
    },
  });

  return { currentImgs, handleImgChange, handleDeleteImg };
};
