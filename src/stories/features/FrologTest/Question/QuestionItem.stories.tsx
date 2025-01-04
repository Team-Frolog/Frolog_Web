import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import QuestionItem from '@/features/FrologTest/components/Question/QuestionItem';

const meta = {
  title: 'FrologTest/Question/QuestionItem',
  component: QuestionItem,
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: { id: 3, value: '📈 더 나은 나를 만들 수 있는 성장의 도구야' },
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    data: { id: 3, value: '📈 더 나은 나를 만들 수 있는 성장의 도구야' },
    isSelected: true,
  },
};
