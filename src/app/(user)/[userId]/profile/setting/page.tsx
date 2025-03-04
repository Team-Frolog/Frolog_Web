import TitleHeader from '@/components/Header/TitleHeader';
import { Menu } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';

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
