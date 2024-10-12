import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getImageSrc } from '@/utils/getImageSrc';
import { IMAGES } from '@/constants/images';
import { editProfileImage } from '../api/profile.api';

export const useProfileImage = () => {
  const {
    setValue,
    watch,
    formState: { dirtyFields },
  } = useFormContext();
  const originalImage = watch('image');
  const [profileImage, setProfileImage] = useState<string>(
    IMAGES.default_profile
  );

  useEffect(() => {
    if (originalImage && !dirtyFields.image) {
      setProfileImage(getImageSrc(originalImage, 'profile')!);
    }
  }, [originalImage]);

  const { mutate: uploadImage } = useMutation({
    mutationFn: (file: File | Blob | Buffer) => editProfileImage(file),
    onSuccess: (res) => setValue('image', res?.hash, { shouldDirty: true }),
  });

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setProfileImage(reader.result as string);
        uploadImage(file);
      }
    };

    reader.readAsDataURL(file);
  };

  return { profileImage, handleImgChange };
};
