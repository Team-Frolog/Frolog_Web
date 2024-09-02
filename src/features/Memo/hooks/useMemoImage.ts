import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { deleteMemoImage, uploadMemoImage } from '../api/memo.api';

export const useMemoImage = () => {
  const { watch, setValue } = useFormContext();
  const images = watch('images') as string[];
  const [currentImgs, setCurrentImgs] = useState<string[]>(images);

  const handleImgChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setCurrentImgs((prev) => [...prev, reader.result as string]);

        uploadMemoImage({ file }).then((res) => {
          setValue('images', [...images, res?.hash]);
        });
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteImg = (index: number) => {
    deleteMemoImage({ hash: images[index] }).then((res) => {
      if (res?.result) {
        const updatedImages = images.filter((_, i) => i !== index);
        setValue('images', updatedImages);
      }
    });
  };

  return { currentImgs, handleImgChange, handleDeleteImg };
};
