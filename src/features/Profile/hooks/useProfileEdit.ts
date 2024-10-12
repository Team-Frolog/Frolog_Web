import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import {
  transformeInfoToArray,
  transformInfoToObject,
} from '@/utils/transformInfo';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editProfile } from '@/api/profile.api';
import { isEqual } from 'lodash';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { useRouter } from 'next/navigation';
import { getProfileDetail } from '../api/profile.api';
import { compareForm } from '../utils/compareForm';
import { ProfileEditFormType } from '../types/editForm';

export const useProfileEdit = (reset: UseFormReset<ProfileEditFormType>) => {
  const router = useRouter();
  const { data: session } = useSession();

  const { data: profileDetail } = useQuery({
    queryKey: ['profileDetail', session?.user.id],
    queryFn: () => getProfileDetail(session!.user.id),
    enabled: session !== undefined,
  });
  const original_username = profileDetail?.username;

  const { mutate: handleEditProfile } = useMutation({
    mutationFn: async (editForm: ProfileEditFormType) => {
      const editReq = {
        id: profileDetail!.id,
        ...editForm,
        personal_infos: transformeInfoToArray(editForm.personal_infos),
      };
      const processedReq = compareForm(profileDetail!, editReq);

      const result = await editProfile({
        id: session!.user.id,
        ...processedReq,
      });
      return result;
    },
    onSuccess: () => {
      router.replace('/profile');
    },
  });

  useEffect(() => {
    if (profileDetail) {
      const {
        username,
        image,
        reading_preference,
        self_intro,
        personal_infos,
      } = profileDetail;
      reset({
        username,
        image,
        reading_preference,
        self_intro,
        personal_infos: transformInfoToObject(personal_infos),
      });
    }
  }, [profileDetail, reset]);

  const handleClickBack = (formData: ProfileEditFormType) => {
    if (!profileDetail) return;

    const { username, image, reading_preference, self_intro, personal_infos } =
      profileDetail;

    const defaultValues = {
      username,
      image,
      reading_preference,
      self_intro,
      personal_infos: transformInfoToObject(personal_infos),
    };

    if (!isEqual(defaultValues, formData)) {
      bottomSheet.open({
        sheetData: sheetData.leave_while_edit,
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else {
      router.back();
    }
  };

  return { handleClickBack, handleEditProfile, original_username };
};
