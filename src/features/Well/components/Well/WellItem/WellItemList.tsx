'use client';

import React, { useEffect, useState } from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { AnimatePresence, motion } from 'framer-motion';
import { GetWellRes, SearchWellItemRes } from '@frolog/frolog-api';
import { getRandomEmptyMessage } from '@/features/Well/utils/getRandomMessage';
import WellItemSkeleton from '@/components/Fallback/Skeleton/Well/WellItemSkeleton';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { useObserver } from '@/hooks/gesture/useObserver';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { useWellItems } from '@/features/Well/hooks/useWellItems';
import { chat } from '@/features/Well/data/chat';
import WellTitle from '../WellTitle';
import WellActionButton from '../Pointing/WellActionButton';
import FrogOnBook from '../WellFrog/FrogOnBook';
import WellItem from './WellItem';
import EmptyWellItem from './EmptyWellItem';
import NewFrogSheet from '../NewFrogSheet';

interface Props {
  /** 우물 정보 데이터 객체 */
  wellData: GetWellRes;
  /** 로그인한 유저인지 여부 */
  isRootUser: boolean;
  /** 첫 우물인지 여부 */
  isDefaultWell?: boolean;
  /** 우물 아이템 리스트 */
  initialWellItemList: SearchWellItemRes;
}

/** 우물 아이템 리스트 컴포넌트 */
const WellItemList = React.memo(
  ({ wellData, isRootUser, isDefaultWell, initialWellItemList }: Props) => {
    const {
      wellItems,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isEmpty,
      isFetched,
    } = useWellItems(wellData.id, initialWellItemList);
    const { id, name, item_cnt } = wellData;

    const [isOpenNewFrogSheet, setIsOpenNewFrogSheet] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>(undefined);
    const { setTarget } = useObserver({ hasNextPage, fetchNextPage });
    const isTimeToMakeSecond =
      isDefaultWell && isFetched && wellItems.length >= 2;

    /** 우물 내 개구리 말풍선 메세지를 구하는 함수 */
    const getMessage = (count: number) => {
      if (!isRootUser) {
        return undefined;
      } else if (isDefaultWell) {
        if (count === 0) {
          return chat.default_well_empty;
        } else if (count === 1) {
          return chat.first_book;
        } else if (count === 2) {
          return chat.second_book;
        }
      } else {
        if (count === 0) {
          return getRandomEmptyMessage();
        }
      }
      return undefined;
    };

    useEffect(() => {
      if (isDefaultWell && wellItems.length === 1) {
        setIsOpenNewFrogSheet(true);
      }
    }, [wellItems]);

    useEffect(
      () => () => {
        setIsLoading(false);
      },
      []
    );

    useEffect(() => {
      if (wellItems) {
        const count = wellItems.length;
        setMessage(getMessage(count));
      }
    }, [wellItems]);

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
          <WithConditionalRendering
            condition={!isEmpty}
            fallback={<EmptyWellItem isRootUser={isRootUser} />}
          >
            {isFetchingNextPage && <WellItemSkeleton />}
            <div className='flex w-full flex-col'>
              {wellItems?.map((item, i) => (
                <WellItem
                  key={item.id}
                  wellBook={item}
                  wellId={wellData.id}
                  isTopItem={i === 0}
                  isLastItem={wellItems.length === i + 1 && !isFetchingNextPage}
                  setTarget={setTarget}
                  zIndex={i + 1}
                  startLoading={() => setIsLoading(true)}
                />
              ))}
            </div>
          </WithConditionalRendering>
          <FrogOnBook
            frogId={wellData.frog}
            message={message}
            zIndex={wellItems.length + 1}
          />
          {isTimeToMakeSecond && (
            <WellActionButton
              btnName='새로운 우물 파기'
              href='create?isSecond=true'
              isPointing
            />
          )}
        </motion.div>
        <AnimatePresence>
          {isOpenNewFrogSheet && <NewFrogSheet />}
        </AnimatePresence>
        {isLoading && <LoadingOverlay theme='dark' />}
      </>
    );
  }
);

export default WellItemList;
