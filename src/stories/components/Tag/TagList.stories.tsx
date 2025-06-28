import TagList from '@/components/Tag/TagList';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Common/Tag/TagList',
  component: TagList,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['pros', 'cons', 'firstMemo'],
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: { type: 'pros' | 'cons' | 'firstMemo' }) => {
  const methods = useForm({
    defaultValues: {
      pros: [],
      cons: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <TagList {...args} />
    </FormProvider>
  );
};

export const ProsTagList: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'pros',
  },
};

export const ConsTagList: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'cons',
  },
};
