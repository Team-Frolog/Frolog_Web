import { useEffect, useState } from 'react';
import {
  transformeInfoToArray,
  transformInfoToObject,
} from '@/utils/transformInfo';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { STORAGE_KEY } from '@/constants/storage';
import { getPath } from '@/utils/getPath';
import { bottomSheet } from '@/modules/BottomSheet';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { QUERY_KEY } from '@/constants/query';
import { editProfile, getProfileDetail } from '../api/profile.api';
import { compareForm } from '../utils/compareForm';
import { ProfileEditFormType } from '../types/editForm';

/** 프로필 수정 핸들링 훅 */
export const useProfileEdit = (
  userId: string,
  reset: UseFormReset<ProfileEditFormType>,
  isDirty: boolean
) => {
  const [isEdited, setIsEdited] = useState(false); // 성향 테스트 재시도 완료 여부
  const { replace, router } = useCustomRouter('profile');
  const queryClient = useQueryClient();

  const { data: profileDetail } = useQuery({
    queryKey: [QUERY_KEY.profileDetail, userId],
    queryFn: () => getProfileDetail(userId),
    staleTime: 0,
  });
  const original_username = profileDetail?.username;

  /** 프로필 수정 핸들러 */
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
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.profileDetail, userId],
      });
      replace(getPath.profile(userId));
      router.back();
    },
  });

  /** 첫 진입 or 테스트 재시도 후 진입 시 초기 처리 */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originData = sessionStorage.getItem(
        STORAGE_KEY.PROFILE_EDIT_FORM_KEY
      );
      const testType = sessionStorage.getItem(STORAGE_KEY.TEST_RESULT_FOR_EDIT);

      // 성향 테스트 다녀 온 뒤 결과 업데이트
      if (originData) {
        const originValues = {
          ...JSON.parse(originData!),
          reading_preference:
            testType || JSON.parse(originData!).reading_preference,
        };
        reset(originValues);
        sessionStorage.removeItem(STORAGE_KEY.PROFILE_EDIT_FORM_KEY);
        sessionStorage.removeItem(STORAGE_KEY.TEST_RESULT_FOR_EDIT);
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
