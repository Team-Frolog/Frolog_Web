import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WellAddIcon } from 'public/icons';
import React from 'react';

const MotionLink = motion(Link);

function WellAddButton() {
  const pathname = usePathname();

  return (
    <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
      <MotionLink
        whileTap={{ scale: 0.95 }}
        href={`${pathname}/create`}
        className='h-[161px] w-[161px]'
      >
        <WellAddIcon className='h-full w-full' />
      </MotionLink>
      <span className='text-body-lg-bold'>새 우물 파기</span>
    </div>
  );
}

export default WellAddButton;
