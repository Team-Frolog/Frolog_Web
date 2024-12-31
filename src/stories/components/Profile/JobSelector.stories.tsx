import JobSelector from '@/components/Profile/JobSelector';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Profile/JobSelector',
  component: JobSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof JobSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      personal_infos: {
        occupation: {
          value: '',
        },
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <JobSelector {...args} />
    </FormProvider>
  );
};

export const DarkTheme: Story = {
  render: Template,
  args: {
    theme: 'dark',
  },
};

export const LightTheme: Story = {
  render: Template,
  args: {
    theme: 'light',
  },
};
