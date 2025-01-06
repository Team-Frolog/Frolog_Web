'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import FrogSelectorSkeleton from '@/components/Fallback/Skeleton/FrogSelectorSkeleton';
import TitleHeader from '@/components/Header/TitleHeader';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { FormProvider, useForm } from 'react-hook-form';
import WellNameInput from './WellNameInput';
import ShapeForm from './Shape/ShapeForm';
import { useWellForm } from '../../hooks/useWellForm';

const FrogSelector = dynamic(
  () => import('@/features/Well/components/WellForm/Frog/FrogSelector'),
  {
    ssr: false,
    loading: () => <FrogSelectorSkeleton />,
  }
);

export interface WellFormType {
  name: string;
  frog: string;
  color: string;
  shape: number;
}

interface Props {
  /** 폼 타입 (생성/수정) */
  type: 'write' | 'edit';
  /** 현재 유저 id */
  userId: string;
  /** 우물 수정인 경우 우물 id */
  wellId?: string;
}

/** 우물 생성/수정 폼 컴포넌트 */
function WellForm({ type, userId, wellId }: Props) {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: { name: '', frog: 'default', color: 'religion', shape: 1 },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const {
    originalName,
    handleWellFrom,
    handleClickBack,
    isLoading,
    setIsNameChecked,
  } = useWellForm(type, reset, setError, wellId);

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
          <FrogSelector userId={userId} />
          <ShapeForm />
        </div>
      </form>
      {isLoading && <LoadingOverlay theme='light' />}
    </FormProvider>
  );
}

export default WellForm;
