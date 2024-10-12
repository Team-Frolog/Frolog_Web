import { useMutation } from '@tanstack/react-query';
import { editProfileImage } from '../api/profile.api';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

export const useProfileImage = () => {
  const { setValue, watch } = useFormContext();
  const originalImage = watch('image');
  const [profileImage, setProfileImage] = useState(originalImage);

  const { mutate: uploadImage } = useMutation({
    mutationFn: (file: File | Blob | Buffer) => editProfileImage(file),
    onSuccess: (res) => setValue('image', res?.hash),
  });

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setProfileImage(reader.result);
        uploadImage(file);
      }
    };

    reader.readAsDataURL(file);
  };

  return { profileImage, handleImgChange };
};
