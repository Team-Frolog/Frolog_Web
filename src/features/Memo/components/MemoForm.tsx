import React from 'react';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import ImageForm from './MemoForm/ImageForm';
import PublicToggle from './MemoForm/PublicToggle';

function MemoForm() {
  return (
    <div className='flex w-full flex-col justify-center gap-[36px]'>
      <ImageForm />
      <Textarea option={textareaType.memo} />
      <PublicToggle />
    </div>
  );
}

export default MemoForm;
