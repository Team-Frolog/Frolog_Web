import RatingSelector from '@/components/Rating/RatingSelector';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Rating/RatingSelector',
  component: RatingSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      rating: 3.5,
    },
  });

  return (
    <FormProvider {...methods}>
      <RatingSelector {...args} />
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    type: 'default',
    rating: 4.2,
    review_cnt: 123,
  },
};
