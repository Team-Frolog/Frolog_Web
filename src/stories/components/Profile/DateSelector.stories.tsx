import DateSelector from '@/components/Profile/DateSelector';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Profile/DateSelector',
  component: DateSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof DateSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      personal_infos: {
        birth_date: {
          value: '',
        },
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <DateSelector {...args} />
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
