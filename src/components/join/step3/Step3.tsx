import React, { useState } from 'react';
import CodeInput from './CodeInput';
import FormButton from '@/components/common/form/FormButton';

function Step3() {
  const [code, setCode] = useState<string>('');

  return (
    <div className='flex h-full w-full flex-col justify-between pb-page'>
      <div className='p-page'>
        <CodeInput code={code} setCode={setCode} />
      </div>

      <FormButton route='/join?step=4' isTyping={false} disabled={!code} />
    </div>
  );
}

export default Step3;
