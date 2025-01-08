import type { Meta, StoryObj } from '@storybook/react';
import ShapeSelector from '@/features/Well/components/WellForm/Shape/ShapeSelector';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Well/WellForm/ShapeSelector',
  component: ShapeSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ShapeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const methods = useForm({
    defaultValues: {
      color: 'travel',
      shape: 1,
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ShapeSelector />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => <Template />,
  args: {},
};
