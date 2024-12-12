import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as authStore from '@/store/authStore';
import CodeInput from '@/components/Form/Code/CodeInput';

jest.mock('@/store/authStore', () => ({
  useCodeTime: jest.fn(),
  useAuthActions: jest.fn(() => ({
    setEndTime: jest.fn(),
  })),
}));

describe('CodeInput', () => {
  const mockSetCode = jest.fn();
  const mockHandleSendCode = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('input에 값을 입력하면, setCode를 호출해야 한다.', () => {
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(300000);

    render(
      <CodeInput
        code=''
        setCode={mockSetCode}
        handleSendCode={mockHandleSendCode}
        isSendFailed={false}
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123456' } });

    expect(mockSetCode).toHaveBeenCalledWith('123456');
  });

  test('재전송 버튼을 클릭하면, handleSendCode를 호출하고 기존 code 값을 초기화해야 한다.', () => {
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(300000);

    render(
      <CodeInput
        code='123'
        setCode={mockSetCode}
        handleSendCode={mockHandleSendCode}
        isSendFailed={false}
      />
    );

    const button = screen.getByText('재전송');
    fireEvent.click(button);

    expect(mockHandleSendCode).toHaveBeenCalled();
    expect(mockSetCode).toHaveBeenCalledWith('');
  });

  test('expiredTime=0인 경우, 에러 메시지를 렌더링하고 input을 비활성화 해야한다.', () => {
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(0);

    render(
      <CodeInput
        code=''
        setCode={mockSetCode}
        handleSendCode={mockHandleSendCode}
        isSendFailed={false}
      />
    );

    const input = screen.getByPlaceholderText('인증번호 입력');
    const errorMessage = screen.getByText(
      '입력 유효시간이 지났어요. 다시 인증해주세요.'
    );

    expect(input).toBeDisabled();
    expect(errorMessage).toBeInTheDocument();
  });

  test('isSendFailed=true 인 경우, 에러 메시지를 렌더링 해야한다.', () => {
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(300000);

    render(
      <CodeInput
        code=''
        setCode={mockSetCode}
        handleSendCode={mockHandleSendCode}
        isSendFailed
      />
    );

    const errorMessage = screen.getByText('다시 시도해주세요.');

    expect(errorMessage).toBeInTheDocument();
  });
});
