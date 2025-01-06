import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import FrogSelector from '@/features/Well/components/WellForm/Frog/FrogSelector';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Well/WellForm/FrogSelector',
  component: FrogSelector,
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/store/item/search`,
          () =>
            HttpResponse.json({
              count: 5,
              limit: 10,
              page: 0,
              items: [
                {
                  key: 'default',
                  type: 'frog',
                  name: '개꾸리',
                  price: 50,
                  desc: undefined,
                  condition: undefined,
                  start: undefined,
                  end: undefined,
                  disabled: false,
                  is_available: true,
                  is_owned: true,
                  date: '2024-12-18T03:11:31.000Z',
                },
                {
                  key: 'roro',
                  type: 'frog',
                  name: '로로',
                  price: 50,
                  desc: undefined,
                  condition: undefined,
                  start: undefined,
                  end: undefined,
                  disabled: false,
                  is_available: true,
                  is_owned: true,
                  date: undefined,
                },
                {
                  key: 'rogy',
                  type: 'frog',
                  name: '로기',
                  price: 100,
                  desc: undefined,
                  condition: undefined,
                  start: undefined,
                  end: undefined,
                  disabled: false,
                  is_available: true,
                  is_owned: true,
                  date: undefined,
                },
                {
                  key: 'devil',
                  type: 'frog',
                  name: '악마꾸리',
                  price: 100,
                  desc: undefined,
                  condition: undefined,
                  start: undefined,
                  end: undefined,
                  disabled: false,
                  is_available: true,
                  is_owned: true,
                  date: undefined,
                },
                {
                  key: 'ghost',
                  type: 'frog',
                  name: '유령꾸리',
                  price: 100,
                  desc: undefined,
                  condition: undefined,
                  start: undefined,
                  end: undefined,
                  disabled: false,
                  is_available: true,
                  is_owned: true,
                  date: undefined,
                },
              ],
            })
        ),
      ],
    },
  },
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof FrogSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: { userId: string }) => {
  const methods = useForm({
    defaultValues: {
      frog: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <FrogSelector {...args} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    userId: '1',
  },
};
