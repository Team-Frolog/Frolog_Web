'use client';

import { ICONS } from '@/constants/icons';
import React from 'react';
import { motion } from 'framer-motion';
import LinkButton from '../common/button/LinkButton';
import Image from 'next/image';

function JoinFinishLight() {
  return (
    <motion.div className='relative w-full'>
      <div
        className={`absolute bottom-0 left-0 flex h-fit w-full flex-col gap-[12px] p-[24px]`}
      >
        <span className='text-center text-body_md text-gray-800'>
          홍길동과고길동과도라에몽님의
          <br />
          독서 성향을 알기 위해, 간단히 7가지만 물어볼게요!
        </span>
        <LinkButton route='/test'>내 독서성향 알아보기</LinkButton>
      </div>

      <Image
        src={ICONS.join.lightOn}
        alt='light'
        width={390}
        height={476}
        className={`w-full`}
      />
    </motion.div>
  );
}

export default JoinFinishLight;
