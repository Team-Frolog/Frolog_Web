import { useFormContext } from 'react-hook-form';
import { uploadMemoImage } from '../api/memo.api';

export const useMemoImage = () => {
  const { watch, setValue } = useFormContext();
  const images = watch('images');

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    uploadMemoImage({ file }).then((res) => {
      setValue('images', [...images, res?.hash]);
    });
  };

  const handleDeleteImg = (index: number) => {
    //
  };

  return { images, handleImgChange, handleDeleteImg };
};
