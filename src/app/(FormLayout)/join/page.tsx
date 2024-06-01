import FormButton from '@/components/form/FormButton';
import FormInput from '@/components/form/FormInput';
import React from 'react';

function JoinPage() {
  return (
    <div>
      <FormInput
        type='text'
        title='닉네임'
        errorMsg='에러 메시지'
        placeholder='비밀번호 입력'
      />
      <FormButton />
    </div>
  );
}

export default JoinPage;
