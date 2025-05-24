'use client';

import React, { Suspense } from 'react';
import FrogSelectorSkeleton from '@/components/Fallback/Skeleton/Store/FrogSelectorSkeleton';
import TitleHeader from '@/components/Header/TitleHeader';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { FormProvider, useForm } from 'react-hook-form';
import { GetStoreItemRes, GetWellRes } from '@frolog/frolog-api';
import { bottomSheet } from '@/modules/BottomSheet';
import WellNameInput from './WellNameInput';
import ShapeForm from './Shape/ShapeForm';
import { useWellForm } from '../../hooks/useWellForm';
import FrogSelector from './Frog/FrogSelector';

export interface WellFormType {
  name: string;
  frog: string;
  color: string;
  shape: number;
}

interface Props {
  /** 폼 타입 (생성/수정) */
  type: 'write' | 'edit';
  /** 우물 수정인 경우 우물 id */
  wellId?: string;
  myFrogList: GetStoreItemRes[];
  wellData?: GetWellRes;
}

/** 우물 생성/수정 폼 컴포넌트 */
function WellForm({ type, wellId, myFrogList, wellData }: Props) {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: {
      name: wellData?.name ?? '',
      frog: wellData?.frog ?? 'default',
      color: wellData?.color ?? 'religion',
      shape: wellData?.shape ?? 1,
    },
  });

  const {
    setError,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const {
    originalName,
    handleWellFrom,
    handleClickBack,
    handleDeleteWell,
    isLoading,
    setIsNameChecked,
  } = useWellForm({ type, setError, wellId, wellData });

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout gap-0'
        onSubmit={handleSubmit(handleWellFrom)}
      >
        <TitleHeader
          title={type === 'write' ? '새 우물 파기' : '우물 고치기'}
          theme='light'
          type={type}
          onClickBack={() => handleClickBack(isDirty)}
          isDisabled={isLoading}
        />
        <div className='flex w-full flex-1 flex-col gap-[36px] overflow-auto bg-white px-page py-[32px]'>
          <WellNameInput
            originalName={originalName}
            setIsNameChecked={setIsNameChecked}
          />
          <Suspense fallback={<FrogSelectorSkeleton />}>
            <FrogSelector myFrogList={myFrogList} />
          </Suspense>
          <ShapeForm />
          {type === 'edit' && (
            <button
              type='button'
              onClick={() => {
                bottomSheet.open({
                  sheetKey: 'delete_this_well',
                  onClick: () => handleDeleteWell(wellId!),
                });
              }}
              className='flex w-full items-center justify-center border-t-[0.5px] border-gray-400 py-[24px] text-error'
            >
              우물 삭제
            </button>
          )}
        </div>
      </form>
      {isLoading && <LoadingOverlay theme='light' />}
    </FormProvider>
  );
}

export default WellForm;
