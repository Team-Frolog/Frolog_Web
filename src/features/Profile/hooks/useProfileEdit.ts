import { useSession } from 'next-auth/react';
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
import { sheetData } from '@/data/ui/bottomSheet';
import { useRouter } from 'next/navigation';
import { getProfileDetail } from '../api/profile.api';
import { compareForm } from '../utils/compareForm';
import { ProfileEditFormType } from '../types/editForm';
import { getRandomIntro } from '../utils/randomIntro';

export const useProfileEdit = (
  reset: UseFormReset<ProfileEditFormType>,
  isDirty: boolean
) => {
  const [isEdited, setIsEdited] = useState(false);
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
        self_intro: editForm.self_intro || getRandomIntro(),
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
    if (typeof window !== 'undefined') {
      const originData = sessionStorage.getItem(PROFILE_EDIT_FORM_KEY);
      const testType = sessionStorage.getItem(TEST_RESULT_FOR_EDIT);

      if (originData) {
        const originValues = {
          ...JSON.parse(originData!),
          reading_preference: testType,
        };
        reset(originValues);
        sessionStorage.removeItem(PROFILE_EDIT_FORM_KEY);
        sessionStorage.removeItem(TEST_RESULT_FOR_EDIT);
        setIsEdited(true);
      } else if (!isEdited && profileDetail) {
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
    if (isEdited) {
      bottomSheet.open({
        sheetData: sheetData.leave_while_edit,
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else if (isDirty) {
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
