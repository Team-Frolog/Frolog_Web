import type { Meta, StoryObj } from '@storybook/react';
import QuestionTitle from '@/features/FrologTest/components/Question/QuestionTitle';

const meta = {
  title: 'FrologTest/Question/QuestionTitle',
  component: QuestionTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      number: 'Q1.',
      question: '책을 읽는 가장 큰 이유는\n무엇인가요?',
      answers: [
        { id: 3, value: '📈 더 나은 나를 만들 수 있는 성장의 도구야' },
        { id: 1, value: '😌 힘든 하루의 끝, 책 속에서 위로를 받아!' },
        { id: 2, value: '🔭 새로운 세상과 지식을 탐험하는 게 즐거워' },
      ],
    },
  },
};
