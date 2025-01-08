import type { Meta, StoryObj } from '@storybook/react';
import CheckItem, {
  CheckItemProps,
} from '@/features/Join/components/step1/CheckItem';
import { FormProvider, useForm } from 'react-hook-form';
import { termsOfUse } from '@/data/terms/termsOfUse';

const meta = {
  title: 'Join/CheckItem',
  component: CheckItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: CheckItemProps) => {
  const methods = useForm({
    defaultValues: {
      consents: {
        terms_of_use: false,
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <CheckItem {...args} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    termsData: {
      id: 1,
      name: 'terms_of_use',
      label: '[필수] 이용약관 동의',
      title: '이용약관 동의',
      view: termsOfUse,
    },
  },
};
