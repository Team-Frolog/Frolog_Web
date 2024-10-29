'use client';

import React, { useEffect, useState } from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import { GetWellRes } from '@frolog/frolog-api';
import WellBook from './WellBook';
import FrogOnBook from '../Well/FrogOnBook';
import { useWellItems } from '../../hooks/useWellItems';
import WellTitle from '../Well/WellTitle';
import WellActionButton from '../Well/Pointing/WellActionButton';
import { chat } from '../../data/chat';

interface Props {
  wellData: GetWellRes;
  isRootUser: boolean;
  isDefaultWell: boolean | undefined;
}

const WellBookList = React.memo(
  ({ wellData, isRootUser, isDefaultWell }: Props) => {
    const { wellItems } = useWellItems(wellData.id);
    const { id, name, item_cnt } = wellData;
    const [message, setMessage] = useState<string | undefined>(undefined);

    const getMessage = (count: number) => {
      if (isDefaultWell) {
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
          className='flex h-fit w-full flex-1 flex-col-reverse items-center'
          initial='hidden'
          animate='visible'
          variants={staggerContainerVariants}
        >
          <div className='h-[12px] w-full shrink-0 rounded-t-[20px] bg-gray-900' />
          {wellItems.map((item) => (
            <WellBook key={item.id} wellBook={item} wellId={wellData.id} />
          ))}
          <FrogOnBook frogId={wellData.frog} message={message} />
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

export default WellBookList;
