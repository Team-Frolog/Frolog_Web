import ProfileTitleHeader from '@/components/Header/ProfileTitleHeader';
import { PAGES } from '@/constants/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/ProfileTitleHeader',
  component: ProfileTitleHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileTitleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QuitPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: PAGES.QUIT,
      },
    },
  },
  args: {},
};

export const TermsPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: PAGES.TERMS,
      },
    },
  },
  args: {},
};

export const InstallPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: PAGES.INSTALL,
      },
    },
  },
  args: {},
};
