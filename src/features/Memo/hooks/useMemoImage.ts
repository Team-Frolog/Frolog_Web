import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { UploadMemoImageReq } from '@frolog/frolog-api';
import { deleteMemoImage, uploadMemoImage } from '../api/memo.api';

/** 메모 이미지 등록 핸들링 훅 */
export const useMemoImage = () => {
  const { watch, setValue } = useFormContext();
  const images = watch('images') as string[];
  const [currentImgs, setCurrentImgs] = useState<string[]>(images); // 현재 등록한 이미지 목록

  /** 서버로 이미지 업로드 핸들러 */
  const { mutate: uploadImage } = useMutation({
    mutationFn: (file: UploadMemoImageReq) => uploadMemoImage(file),
    onSuccess: (res) => setValue('images', [...images, res?.hash]),
  });

  /** 이미지 등록 핸들러 */
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

  /** 이미지 삭제 핸들러 */
  const { mutate: handleDeleteImg } = useMutation({
    mutationFn: (index: number) => deleteMemoImage({ hash: images[index] }),
    onSuccess: (_res, index) => {
      setCurrentImgs((prev) => prev.filter((_, i) => i !== index));
      setValue(
        'images',
        images.filter((_, i) => i !== index)
      );
    },
  });

  return { currentImgs, handleImgChange, handleDeleteImg };
};
