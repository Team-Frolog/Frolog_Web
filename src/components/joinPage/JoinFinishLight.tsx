'use client';

import { ICONS } from '@/constants/icons';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LinkButton from '../common/button/LinkButton';
import Image from 'next/image';

function JoinFinishLight() {
  const [icon, setIcon] = useState<string>(ICONS.join.lightOn);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIcon(ICONS.join.lightOn);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <motion.div
      // initial={{ opacity: 0, y: 30 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className='relative w-full'
    >
      <div
        className={`absolute bottom-0 left-0 flex h-fit w-full flex-col gap-[12px] p-[24px] ${icon === ICONS.join.lightOff ? 'opacity-0' : 'opacity-100'}`}
      >
        <span className='text-center text-body_md text-gray-800'>
          홍길동과고길동과도라에몽님의
          <br />
          독서 성향을 알기 위해, 간단히 7가지만 물어볼게요!
        </span>
        <LinkButton route='/'>내 독서성향 알아보기</LinkButton>
      </div>

      <Image
        src={icon}
        alt='light'
        width={390}
        height={476}
        className={`w-full`}
      />
    </motion.div>
  );
}

export default JoinFinishLight;
