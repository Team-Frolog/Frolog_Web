import type { Meta, StoryObj } from '@storybook/react';
import ImageForm from '@/features/Memo/components/MemoForm/ImageForm/ImageForm';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Memo/ImageForm',
  component: ImageForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const methods = useForm({
    defaultValues: {
      images: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ImageForm />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => <Template />,
  args: {},
};
