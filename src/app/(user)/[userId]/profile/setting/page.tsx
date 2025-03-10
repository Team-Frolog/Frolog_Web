import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('@/features/Profile/components/Menu/Menu'), {
  ssr: false,
});

async function ProfileSettingPage() {
  return (
    <MainLayout extraClass='bg-white' isCenter={false}>
      <TitleHeader
        type='default'
        title='설정'
        theme='light'
        hasButton={false}
      />
      <div className='mt-[32px]'>
        <Menu />
      </div>
    </MainLayout>
  );
}

export default ProfileSettingPage;

export const metadata: Metadata = {
  title: '설정',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
