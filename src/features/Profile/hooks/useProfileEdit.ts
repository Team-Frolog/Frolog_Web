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
import { ProfileEditFormType } from '../components/Profile/ProfileEditForm';
import { getProfileDetail } from '../api/profile.api';

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

      const result = await editProfile(editReq);
      return result;
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
