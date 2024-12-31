import GenderSelector from '@/components/Profile/GenderSelector';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Profile/GenderSelector',
  component: GenderSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof GenderSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      personal_infos: {
        gender: {
          value: '남성',
        },
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <GenderSelector {...args} />
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
