import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import Button from '@/components/Button/Button';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { PAGES } from '@/constants/page';

function NoProfileFeed() {
  const { navigate } = useCustomRouter('profile');
  return (
    <div className='mt-3 flex w-full flex-col items-center justify-center gap-[15px]'>
      <Image
        src={IMAGES.frog.empty_feed}
        alt='empty-feed'
        width={135}
        height={145}
      />
      <div className='flex flex-col items-center justify-center gap-[10px]'>
        <h1 className='text-center text-body-xl-bold'>아직 리뷰가 없어요</h1>
        <p className='text-center text-body-sm'>
          리뷰를 작성하면 여기에 표시됩니다.
        </p>
      </div>
      <Button theme='normal' onClick={() => navigate(PAGES.SEARCH)}>
        책 추가하기
      </Button>
    </div>
  );
}

export default NoProfileFeed;
