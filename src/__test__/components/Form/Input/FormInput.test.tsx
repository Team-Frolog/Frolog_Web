/* eslint-disable react/function-component-definition */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '@/components/Form/Input/FormInput';

const renderWithFormContext = (ui: React.ReactElement) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm({
      defaultValues: {
        email: '',
      },
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return render(ui, { wrapper: Wrapper });
};

describe('FormInput', () => {
  test('input을 default props로 렌더링 해야한다.', () => {
    renderWithFormContext(
      <FormInput fieldName='email' type='email' title='Email' />
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  test('isRequired=true 인 경우, asterisk를 적용해야 한다.', () => {
    renderWithFormContext(
      <FormInput fieldName='email' title='Email' isRequired />
    );

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('errorMessage가 주어진 경우 이를 렌더링 해야한다.', () => {
    renderWithFormContext(
      <FormInput fieldName='email' title='Email' errorMessage='error message' />
    );

    expect(screen.getByText('error message')).toBeInTheDocument();
  });

  test('theme="dark"인 경우, 그에 맞는 클래스가 적용되어야 한다.', () => {
    renderWithFormContext(
      <FormInput fieldName='email' title='Email' theme='dark' />
    );

    expect(screen.getByRole('textbox')).toHaveClass('input-default');
  });

  test('theme="light"인 경우, 그에 맞는 클래스가 적용되어야 한다.', () => {
    renderWithFormContext(
      <FormInput fieldName='email' title='Email' theme='light' />
    );

    expect(screen.getByRole('textbox')).toHaveClass('input-light');
  });

  test('uses correct inputMode for email type', () => {
    renderWithFormContext(
      <FormInput fieldName='email' title='Email' type='email' />
    );

    expect(screen.getByRole('textbox')).toHaveAttribute('inputMode', 'email');
  });
});
