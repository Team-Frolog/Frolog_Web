import React from 'react';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import ImageForm from './ImageForm';
import PublicToggle from './PublicToggle';

function MemoForm() {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      <ImageForm />
      <div className='flex w-full flex-col gap-[36px] px-page'>
        <Textarea option={textareaType.memo} />
        <PublicToggle />
      </div>
    </div>
  );
}

export default MemoForm;
