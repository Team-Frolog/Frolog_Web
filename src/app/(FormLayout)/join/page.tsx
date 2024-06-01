import FormHeader from '@/components/common/header/FormHeader';
import ErrorPopUp from '@/components/form/ErrorPopUp';
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
      <ErrorPopUp />
    </div>
  );
}

export default JoinPage;
