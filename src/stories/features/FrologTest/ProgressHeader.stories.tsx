import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import ProgressHeader from '@/features/FrologTest/components/ProgressHeader';

const meta = {
  title: 'FrologTest/ProgressHeader',
  component: ProgressHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
