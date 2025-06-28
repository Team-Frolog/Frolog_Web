import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { UseFormSetError } from 'react-hook-form';
import { useFlash } from '@/hooks/useFlash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bottomSheet } from '@/modules/BottomSheet';
import { toast } from '@/modules/Toast';
import { ERROR_ALERT } from '@/constants/message';
import { useUserId } from '@/store/sessionStore';
import { PAGES } from '@/constants/page';
import { GetWellRes } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import {
  addNewWell,
  checkWellName,
  deleteWell,
  editWell,
} from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

interface Props {
  type: 'write' | 'edit';
  setError: UseFormSetError<WellFormType>;
  wellId?: string;
  wellData?: GetWellRes;
}

/** 우물 폼 관련 훅 */
export const useWellForm = ({ type, setError, wellId, wellData }: Props) => {
  const router = useRouter();
  const isSecond = useSearchParams().get('isSecond');
  const userId = useUserId();
  const { update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isNameChecked, setIsNameChecked] = useState<boolean | null>(null);
  const { openFlash } = useFlash();
  const queryClient = useQueryClient();

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );

  /** 우물 생성 핸들러 */
  const { mutate: handleAddWell } = useMutation({
    mutationFn: async (data: WellFormType) => {
      if (!isNameChecked) {
        return;
      }
      setIsLoading(true);
      const res = await addNewWell({ ...data, owner: userId! });
      return res;
    },
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
    },
    onSuccess: async () => {
      if (isSecond) {
        await update({ defaultWellId: null });
        router.refresh();
        openFlash({ type: 'first_new_well', callbackUrl: PAGES.HOME });
      } else {
        openFlash({ type: 'new_well', callbackUrl: PAGES.HOME });
      }
    },
  });

  /** 우물 수정 핸들러 */
  const { mutate: handleEditWell } = useMutation({
    mutationFn: (data: Partial<WellFormType>) =>
      editWell({ ...data, id: wellId! }),
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wellDetail, wellId],
      });
      router.replace(PAGES.HOME);
    },
  });

  const { mutate: handleDeleteWell } = useMutation({
    mutationFn: (id: string) => deleteWell({ id }),
    onSuccess: () => {
      // TODO: 히스토리 빼기
      router.replace(PAGES.HOME);
    },
  });

  /** 뒤로가기 핸들러 */
  const handleClickBack = (isDirty: boolean) => {
    if (isDirty) {
      bottomSheet.open({
        sheetKey: type === 'edit' ? 'leave_while_edit' : 'leave_while_write',
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

  /** 우물 폼 제출 핸들러 */
  const handleWellFrom = async (data: WellFormType) => {
    let isNameValidated = isNameChecked;

    if (data.name === wellData?.name) {
      isNameValidated = true;
    } else if (isNameValidated === null) {
      // blur 처리로 유효성 검사되지 않고 넘어온 경우 double check
      const result = await checkWellName(data.name);
      if (result) {
        setIsNameChecked(true);
        isNameValidated = true;
      } else {
        setError('name', {
          type: 'custom',
          message: '이미 같은 이름의 우물이 있어요',
        });
        return;
      }
    }

    if (isNameValidated) {
      if (type === 'write') {
        handleAddWell(data);
      } else if (type === 'edit' && wellData) {
        const updatedFields: Partial<WellFormType> = data;

        Object.keys(data).forEach((key) => {
          const typedKey = key as keyof WellFormType;
          if (data[typedKey] === wellData?.[typedKey]) {
            updatedFields[typedKey] = undefined;
          }
        });

        if (Object.keys(updatedFields).length > 0) {
          handleEditWell(updatedFields);
        }
      }
    }
  };

  return {
    originalName: wellData?.name,
    handleWellFrom,
    handleDeleteWell,
    handleClickBack,
    isLoading,
    setIsNameChecked,
  };
};
