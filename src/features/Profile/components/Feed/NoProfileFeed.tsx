import Image from 'next/image';
import { IMAGES } from '@/constants/images';

function NoProfileFeed() {
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
    </div>
  );
}

export default NoProfileFeed;
