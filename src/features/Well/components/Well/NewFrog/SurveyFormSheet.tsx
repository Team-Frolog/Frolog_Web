import FormInput from '@/components/Form/Input/FormInput';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import { useSurvey } from '@/hooks/useSurvey';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
}

/** 누적 권수 3권인 경우 렌더링되는 설문조사 폼 */
function SurveyFormSheet({ onClose }: Props) {
  const { methods, handleSurvey, handleCloseSurvey } = useSurvey();

  const buttonStyle =
    'rounded-[12px] border px-[16px] py-[18px] text-body-lg border-gray-200 bg-gray-200 text-gray-800';
  const selected = 'border-main text-body-lg-bold';

  const { watch, setValue } = methods;

  const handleClick = (value: 'yes' | 'no' | 'soso') => {
    setValue('recommend', value);
  };

  const handleSubmit = async () => {
    await handleSurvey();
    onClose();
  };

  const handleClose = () => {
    handleCloseSurvey();
    onClose();
  };

  return (
    <BottomSheet
      sheetKey='survey_form'
      padding='px-0'
      onClick={handleSubmit}
      onClose={handleClose}
    >
      <FormProvider {...methods}>
        <form className='flex w-full flex-col gap-[30px] pt-[12px]'>
          <div className='flex w-full flex-col gap-[12px]'>
            <div className='flex justify-between px-page text-body-md text-gray-700'>
              <span>프롤로그를 친구에게 추천할만 한가요? (필수)</span>
            </div>
            <div className='grid w-full grid-cols-3 gap-[12px] px-[24px]'>
              <button
                type='button'
                onClick={() => handleClick('no')}
                className={`${buttonStyle} ${watch('recommend') === 'no' ? selected : ''}`}
              >
                아니오
              </button>
              <button
                type='button'
                onClick={() => handleClick('soso')}
                className={`${buttonStyle} ${watch('recommend') === 'soso' ? selected : ''}`}
              >
                보통
              </button>
              <button
                type='button'
                onClick={() => handleClick('yes')}
                className={`${buttonStyle} ${watch('recommend') === 'yes' || typeof window === 'undefined' ? selected : ''}`}
              >
                네
              </button>
            </div>
          </div>

          <Textarea option={textareaType.reason} type='default' />
          <Textarea option={textareaType.wish} type='default' />
        </form>
      </FormProvider>
    </BottomSheet>
  );
}

export default SurveyFormSheet;
