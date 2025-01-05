import type { Meta, StoryObj } from '@storybook/react';
import { ReviewForm } from '@/features/Review';
import { FormProvider, useForm } from 'react-hook-form';
import { ReviewFormProps } from '@/features/Review/components/ReviewForm/ReviewForm';

const meta = {
  title: 'Review/ReviewForm',
  component: ReviewForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewForm>;

const Template = (args: ReviewFormProps) => {
  const methods = useForm({
    defaultValues: {
      rating: null,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ReviewForm {...args} />
      </form>
    </FormProvider>
  );
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'new',
    isDisabled: false,
  },
};
