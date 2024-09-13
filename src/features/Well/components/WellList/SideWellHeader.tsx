'use client';

import SideHeader from '@/components/Header/SideHeader';
import { usePopUpActions } from '@/store/popUpStore';
import { useRouter } from 'next/navigation';
import { StoreIcon, WellBackIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  username?: string;
}

function SideWellHeader({ username }: Props) {
  const router = useRouter();
  const { changePopUpState } = usePopUpActions();

  return (
    <SideHeader title={username ? `${username}의 우물` : '우물'}>
      {username ? (
        <motion.button
          type='button'
          whileTap={{ scale: 0.9 }}
          onClick={() => router.back()}
          className='absolute left-[12px] top-[12px] z-70'
        >
          <WellBackIcon />
        </motion.button>
      ) : (
        <motion.button
          type='button'
          whileTap={{ scale: 0.9 }}
          onClick={() => changePopUpState('isOpenAlertSheet', true)}
          className='absolute right-[24px] top-[24px] z-70'
        >
          <StoreIcon />
        </motion.button>
      )}
    </SideHeader>
  );
}

export default SideWellHeader;
