import ProfileForm from '@/components/Profile/ProfileForm';
import { getToday } from '@/utils/date';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Profile/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      username: '테스터',
      reading_preference: null,
      self_intro: '',
      personal_infos: {
        occupation: {
          value: '학생',
          visibility: true,
        },
        birth_date: {
          value: getToday(),
          visibility: true,
        },
        gender: {
          value: '남성',
          visibility: true,
        },
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <ProfileForm {...args} />
    </FormProvider>
  );
};

export const JoinForm: Story = {
  render: Template,
  args: {
    type: 'join',
    theme: 'dark',
  },
};

export const ProfileEditForm: Story = {
  render: Template,
  args: {
    type: 'profile',
    theme: 'light',
    username: '테스터',
  },
};
