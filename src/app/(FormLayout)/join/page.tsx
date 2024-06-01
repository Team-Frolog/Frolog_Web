import FormHeader from '@/components/common/header/FormHeader';
import FormInput from '@/components/form/FormInput';
import TermsPopUp from '@/components/form/TermsPopUp';
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
      <TermsPopUp />
    </div>
  );
}

export default JoinPage;
