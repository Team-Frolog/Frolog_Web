import type { Meta, StoryObj } from '@storybook/react';
import ColorSelector from '@/features/Well/components/WellForm/Shape/ColorSelector';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Well/WellForm/ColorSelector',
  component: ColorSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const methods = useForm({
    defaultValues: {
      color: 'religion',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ColorSelector />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => <Template />,
  args: {},
};
