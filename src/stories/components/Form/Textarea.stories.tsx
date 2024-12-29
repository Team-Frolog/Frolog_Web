import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextareaType } from '@/data/ui/textareaType';
import Textarea, { TextareaProps } from '@/components/Form/Input/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Common/Form/Textarea',
  component: Textarea,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const Template = (args: TextareaProps) => {
  const methods = useForm({ defaultValues: { review: '', oneLiner: '' } });

  return (
    <FormProvider {...methods}>
      <form>
        <Textarea {...args} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'default',
    option: {
      fieldName: 'review',
      title: '내 리뷰',
      maxLength: 400,
      minLength: 10,
      minRow: 2,
      required: '리뷰를 작성해주세요',
      errorMessage: '좋은 시작이에요! 생각이 더 궁금해요. (최소 10자)',
      placeholder:
        '리뷰를 쓰면 책 내용을 더 잘 기억할 수 있어요!\n떠오른 생각들을 남겨 주세요!  (10자 이상)',
    } as TextareaType,
  },
};

export const Bold: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'bold',
    option: {
      fieldName: 'oneLiner',
      title: '한 줄평',
      maxLength: 40,
      minLength: 10,
      minRow: 1,
      required: '한 줄평을 작성해주세요',
      errorMessage: '멋진 문장이에요! 좀 더 남겨주세요. (최소 10자)',
      placeholder: '책을 한 문장으로 표현해주세요! (10자 이상)',
    } as TextareaType,
  },
};
