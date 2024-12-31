import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import FrologTestButton from '@/components/Profile/FrologTestButton';

const meta = {
  title: 'Common/Profile/FrologTestButton',
  component: FrologTestButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FrologTestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      reading_preference: 1,
    },
  });

  return (
    <FormProvider {...methods}>
      <FrologTestButton {...args} />
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {},
};

export const NoPreference: Story = {
  render: Template,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {},
  play: () => {
    const { setValue } = useForm();
    setValue('reading_preference', '');
  },
};
