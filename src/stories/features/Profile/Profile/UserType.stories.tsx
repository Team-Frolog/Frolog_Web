import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import UserType from '@/features/Profile/components/Profile/UserType';

const meta = {
  title: 'Profile/Profile/UserType',
  component: UserType,
  tags: ['autodocs'],
} satisfies Meta<typeof UserType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profileDetail: {
      id: 'RXgYmgQ',
      reading_preference: '2',
      username: '테스터',
      follow: false,
      self_intro: '자기소개',
      max_item_cnt: 12,
      following_cnt: 21,
      follower_cnt: 25,
      personal_infos: [
        {
          type: 'occupation',
          value: '학생',
          visibility: true,
        },
        {
          type: 'birth_date',
          value: '2002-10-20',
          visibility: true,
        },
        {
          type: 'gender',
          value: '여성',
          visibility: true,
        },
      ],
    },
  },
};
