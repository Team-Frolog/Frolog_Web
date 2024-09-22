'use client';

import SideHeader from '@/components/Header/SideHeader';
import { usePopUpActions } from '@/store/popUpStore';
import { useRouter } from 'next/navigation';
import { StoreIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '@/components/Button/BackButton';

interface Props {
  username?: string;
}

function SideWellHeader({ username }: Props) {
  const router = useRouter();
  const { changePopUpState } = usePopUpActions();

  return (
    <SideHeader title={username ? `${username}의 우물` : '우물'}>
      {username ? (
        <BackButton type='green' onClick={() => router.back()} />
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
