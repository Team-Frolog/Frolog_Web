import IOS1 from 'public/images/howToInstall/ios-1.svg';
import IOS2 from 'public/images/howToInstall/ios-2.svg';
import IOS3 from 'public/images/howToInstall/ios-3.svg';
import IOS4 from 'public/images/howToInstall/ios-4.svg';
import AOS1 from 'public/images/howToInstall/aos-1.svg';
import AOS2 from 'public/images/howToInstall/aos-2.svg';
import AOS3 from 'public/images/howToInstall/aos-3.svg';
import AOS4 from 'public/images/howToInstall/aos-4.svg';

export interface Instruction {
  id: number;
  title: string;
  img: React.ReactNode;
  theme: 'default' | 'highlight';
}

export const ios: Instruction[] = [
  {
    id: 1,
    title: '프롤로그 웹 하단 공유 버튼을 누르세요.',
    img: <IOS1 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 2,
    title: '메뉴 리스트 중 ‘홈 화면에 추가’를 누르세요.',
    img: <IOS2 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 3,
    title: '상단 ‘추가’를 누르세요.',
    img: <IOS3 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 4,
    title: '앱 추가 성공! ^0^',
    img: <IOS4 className='h-auto w-full rounded-[12px]' />,
    theme: 'highlight',
  },
];

export const aos: Instruction[] = [
  {
    id: 1,
    title: '프롤로그 웹 상단 케밥 버튼을 누르세요.',
    img: <AOS1 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 2,
    title: '메뉴 리스트 중 ‘홈 화면에 추가’를 누르세요.',
    img: <AOS2 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 3,
    title: '하단 ‘설치’를 누르세요.',
    img: <AOS3 className='h-auto w-full rounded-[12px]' />,
    theme: 'default',
  },
  {
    id: 4,
    title: '앱 추가 성공! ^0^',
    img: <AOS4 className='h-auto w-full rounded-[12px]' />,
    theme: 'highlight',
  },
];
