import { useEffect, useState } from 'react';
import {
  transformeInfoToArray,
  transformInfoToObject,
} from '@/utils/transformInfo';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  PROFILE_EDIT_FORM_KEY,
  TEST_RESULT_FOR_EDIT,
} from '@/constants/storage';
import { editProfile } from '@/api/profile.api';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';
import { getProfileDetail } from '../api/profile.api';
import { compareForm } from '../utils/compareForm';
import { ProfileEditFormType } from '../types/editForm';

export const useProfileEdit = (
  userId: string,
  reset: UseFormReset<ProfileEditFormType>,
  isDirty: boolean
) => {
  const [isEdited, setIsEdited] = useState(false);
  const router = useRouter();

  const { data: profileDetail } = useQuery({
    queryKey: ['profileDetail', userId],
    queryFn: () => getProfileDetail(userId),
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
        id: userId,
        ...processedReq,
      });
      return result;
    },
    onSuccess: () => {
      router.replace(`/${userId}/profile`);
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originData = sessionStorage.getItem(PROFILE_EDIT_FORM_KEY);
      const testType = sessionStorage.getItem(TEST_RESULT_FOR_EDIT);

      // 성향 테스트 다녀 온 뒤
      if (originData) {
        const originValues = {
          ...JSON.parse(originData!),
          reading_preference:
            testType || JSON.parse(originData!).reading_preference,
        };
        reset(originValues);
        sessionStorage.removeItem(PROFILE_EDIT_FORM_KEY);
        sessionStorage.removeItem(TEST_RESULT_FOR_EDIT);
        setIsEdited(true);
      }
      // 성향 테스트 안함, 기존 프로필 데이터 있는 경우
      else if (!isEdited && profileDetail) {
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
    }
  }, [profileDetail, reset]);

  const handleClickBack = () => {
    if (isEdited || isDirty) {
      bottomSheet.open({
        sheetKey: 'leave_while_edit',
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
