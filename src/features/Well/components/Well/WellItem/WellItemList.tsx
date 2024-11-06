'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CATEGORY } from '@/constants/category';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import { GetWellRes } from '@frolog/frolog-api';
import { useWellItems } from '@/features/Well/hooks/useWellItems';
import { chat } from '@/features/Well/data/chat';
import WellTitle from '../WellTitle';
import WellActionButton from '../Pointing/WellActionButton';
import FrogOnBook from '../WellFrog/FrogOnBook';
import WellItem from './WellItem';

interface Props {
  wellData: GetWellRes;
  isRootUser: boolean;
  isDefaultWell: boolean | undefined;
}

const WellItemList = React.memo(
  ({ wellData, isRootUser, isDefaultWell }: Props) => {
    const { wellItems } = useWellItems(wellData.id);
    const { id, name, item_cnt } = wellData;
    const [message, setMessage] = useState<string | undefined>(undefined);

    const getMessage = (count: number) => {
      if (!isRootUser) {
        return undefined;
      } else if (isDefaultWell) {
        if (count === 0) {
          return chat.empty;
        } else if (count === 1) {
          return chat.first_book;
        } else if (count === 2) {
          return chat.second_book;
        }
      } else {
        if (count === 0) {
          return chat.empty;
        }
      }
      return undefined;
    };

    useEffect(() => {
      if (wellItems) {
        const count = wellItems.length;
        setMessage(getMessage(count));
      }
    }, [wellItems]);

    if (!wellItems) return null;

    return (
      <>
        <WellTitle
          title={name}
          wellId={id}
          itemCount={item_cnt}
          isRootUser={isRootUser}
          isPointing={isDefaultWell && wellItems.length < 2}
        />
        <motion.div
          className='relative flex h-fit w-full flex-1 flex-col-reverse items-center'
          initial='hidden'
          animate='visible'
          variants={staggerContainerVariants}
        >
          {wellItems.length === 0 && (
            <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-category-bg-economic_business pt-[12px]'>
              <Image
                src={CATEGORY.economic_business.wave}
                alt='wave'
                width={390}
                height={12}
                className='absolute -top-[12px] left-0 h-[12px] w-full'
                loading='eager'
              />
              <span className='text-body-sm-bold text-category-text-economic_business'>
                {isRootUser
                  ? '책을 추가해 높게 올라가봐요!'
                  : '아직 우물이 비어있어요..'}
              </span>
              <div className='absolute bottom-[-10px] left-0 h-[10px] w-full bg-category-bg-economic_business' />
            </div>
          )}
          {wellItems.map((item, i) => (
            <WellItem
              key={item.id}
              wellBook={item}
              wellId={wellData.id}
              isLastItem={item_cnt === i + 1}
              zIndex={wellItems.length - i}
            />
          ))}
          <FrogOnBook
            frogId={wellData.frog}
            message={message}
            zIndex={wellItems.length + 1}
          />
          {isDefaultWell && wellItems.length >= 2 && (
            <WellActionButton
              btnName='새로운 우물 파기'
              href='create?isSecond=true'
              isPointing
            />
          )}
        </motion.div>
      </>
    );
  }
);

export default WellItemList;
