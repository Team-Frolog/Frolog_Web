import React from 'react';
import CodeInput from './CodeInput';
import FormButton from '@/components/common/form/FormButton';

function Step3() {
  return (
    <div className='flex h-full w-full flex-col justify-between pb-page'>
      <div className='p-page'>
        <CodeInput />
      </div>

      <FormButton route='/join?step=4' isTyping={false} disabled={false} />
    </div>
  );
}

export default Step3;
