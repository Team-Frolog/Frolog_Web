import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput, { FormInputProps } from '@/components/Form/Input/FormInput';

const meta: Meta<typeof FormInput> = {
  title: 'Common/Form/FormInput',
  component: FormInput,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormInput>;

const Template = (args: FormInputProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <FormInput {...args} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    fieldName: 'email',
    title: '이메일',
    placeholder: '이메일을 입력하세요',
    theme: 'light',
    isRequired: true,
  },
};

export const WithError: Story = {
  render: (args) => <Template {...args} />,
  args: {
    fieldName: 'password',
    title: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    theme: 'light',
    errorMessage: '비밀번호를 입력하세요.',
    isRequired: true,
    type: 'password',
  },
};

export const WithCount: Story = {
  render: (args) => <Template {...args} />,
  args: {
    fieldName: 'username',
    title: '이름',
    placeholder: '이름을 입력하세요.',
    theme: 'dark',
    maxCount: 20,
    hasCount: true,
  },
};
