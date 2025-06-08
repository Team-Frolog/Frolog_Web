import Image from 'next/image';
import React from 'react';
import FrologItem from '@/components/FrologItem/FrologItem';
import { SHEET_FROG } from '@/constants/frogs';
import { motion } from 'framer-motion';
import Button from '@/components/Button/Button';

function GuideSheet() {
  // TODO: 여기서는 바텀시트 닫기 가능해야 함. 닫기 후 다시 등장하지 않도록 조치 필요

  return (
    <motion.div
      initial={{ y: '120%' }}
      animate={{ y: '0%' }}
      exit={{ y: '120%' }}
      transition={{ duration: 0.3 }}
      className='safe-bottom relative flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] pb-[20px] pt-[40px] text-gray-800'
      style={{ paddingTop: '40px', gap: '30px' }}
    >
      <Image
        src={SHEET_FROG.normal}
        alt='frog'
        width={191}
        height={70}
        className='absolute inset-x-0 mx-auto'
        style={{ top: '-55px' }}
      />
      <div className='flex-col-center w-full gap-[30px]'>
        <h2 className='text-center text-title-xl-bold'>
          책을 1권 더 추가하고,
          <br />세 개구리 모두 얻으세요!
        </h2>

        <div className='flex gap-[9px]'>
          {/** TODO: 기본 지급 개구리 리스트 조회 API 연동 */}
          <FrologItem
            type='well'
            item={{
              key: 'default',
              type: 'frog',
              name: '개꾸리',
              price: 100,
              disabled: false,
              is_available: true,
              is_owned: true, // 획득 완료한 개구리
            }}
          />
          <FrologItem
            type='well'
            item={{
              key: 'default',
              type: 'frog',
              name: '개꾸리',
              price: 100,
              disabled: false,
              is_available: true,
              is_owned: false,
            }}
            hasAcquireButton
            isDisabledAcquireButton
          />
          <FrologItem
            type='well'
            item={{
              key: 'default',
              type: 'frog',
              name: '개꾸리',
              price: 100,
              disabled: false,
              is_available: true,
              is_owned: false,
            }}
            hasAcquireButton
            isDisabledAcquireButton
          />
        </div>
      </div>
      <div className='flex-col-center w-full gap-[20px] pb-[20px]'>
        <Button type='button' theme='normal' onClick={() => {}}>
          책 추가하기
        </Button>
      </div>
    </motion.div>
  );
}

export default GuideSheet;
