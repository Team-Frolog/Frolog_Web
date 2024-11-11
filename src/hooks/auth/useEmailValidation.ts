import { checkEmail } from '@/api/auth.api';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useEmailValidation = (type: 'signUp' | 'findPassword') => {
  const { trigger, setError } = useFormContext();
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleValidateEmail = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isVaild = await trigger('email');
    const value = e.target.value.trim();

    if (isVaild && value !== '') {
      const data = await checkEmail({
        email: value,
      });

      if (type === 'signUp') {
        if (data) {
          setIsEmailChecked(true);
        } else {
          setError('email', {
            type: 'custom',
            message: '이미 사용 중인 이메일이에요.',
          });
        }
      } else if (type === 'findPassword') {
        if (data) {
          setError('email', {
            type: 'custom',
            message: '존재하지 않는 이메일이에요.',
          });
        } else {
          setIsEmailChecked(true);
        }
      }
    }
  };

  return { isEmailChecked, setIsEmailChecked, handleValidateEmail };
};
