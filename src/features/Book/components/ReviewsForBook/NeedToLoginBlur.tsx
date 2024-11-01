import LinkButton from '@/components/Button/LinkButton';
import { PAGES } from '@/constants/page';
import DummyItem from './DummyItem';

function NeedToLoginBlur() {
  return (
    <div className='relative flex w-full'>
      <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-[40px] bg-white bg-opacity-0 px-page'>
        <div className='flex flex-col gap-[12px] text-gray-800'>
          <h3 className='text-center text-title-xl-bold'>
            로그인하고
            <br />
            무제한으로 리뷰를 보세요!
          </h3>
          <p className='text-center text-body-lg'>
            TIP 나의 독서 성향에 맞는 책도 추천해줘요!
          </p>
        </div>
        <LinkButton route={PAGES.LANDING}>로그인 하기</LinkButton>
      </div>
      <DummyItem />
    </div>
  );
}

export default NeedToLoginBlur;
