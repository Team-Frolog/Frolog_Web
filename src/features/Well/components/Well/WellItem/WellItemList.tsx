'use client';

import React, { useEffect, useState } from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import { GetWellItemRes, GetWellRes } from '@frolog/frolog-api';
import { getRandomEmptyMessage } from '@/features/Well/utils/getRandomMessage';
import WellItemSkeleton from '@/components/Fallback/Skeleton/Well/WellItemSkeleton';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { chat } from '@/features/Well/data/chat';
import WellActionButton from '../Pointing/WellActionButton';
import FrogOnBook from '../WellFrog/FrogOnBook';
import WellItem from './WellItem';
import EmptyWellItem from './EmptyWellItem';

interface Props {
  /** 우물 정보 데이터 객체 */
  wellData: GetWellRes;
  /** 우물 아이템 (순서 변경 모드) */
  items: GetWellItemRes[];
  /** 우물 아이템 */
  wellItems: GetWellItemRes[];
  /** 로그인한 유저인지 여부 */
  isRootUser: boolean;
  /** 첫 우물인지 여부 */
  isDefaultWell?: boolean;
  /** 우물 순서 변경 모드 여부 */
  isMovable: boolean;
  isFetchingNextPage: boolean;
  isEmpty: boolean;
  isFetched: boolean;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
  handleMoveItem: (itemId: string, fromIndex: number, toIndex: number) => void;
}

/** 우물 아이템 리스트 컴포넌트 */
const WellItemList = React.memo(
  ({
    wellData,
    wellItems,
    items,
    isRootUser,
    isDefaultWell,
    isMovable,
    isFetchingNextPage,
    isEmpty,
    isFetched,
    setTarget,
    handleMoveItem,
  }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>(undefined);

    const isTimeToMakeSecond =
      isDefaultWell && isFetched && wellItems.length >= 2;

    /** 우물 내 개구리 말풍선 메세지를 구하는 함수 */
    const getMessage = (count: number) => {
      if (!isRootUser) {
        return undefined;
      } else if (isDefaultWell) {
        if (count === 0) {
          return getRandomEmptyMessage();
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
              {isMovable
                ? items?.map((item, i) => (
                    <WellItem
                      key={item.id}
                      wellBook={item}
                      wellId={wellData.id}
                      isTopItem={i === 0}
                      isLastItem={
                        wellItems.length === i + 1 && !isFetchingNextPage
                      }
                      setTarget={setTarget}
                      index={i}
                      startLoading={() => setIsLoading(true)}
                      isMovable={isMovable}
                      handleMoveItem={handleMoveItem}
                    />
                  ))
                : wellItems?.map((item, i) => (
                    <WellItem
                      key={item.id}
                      wellBook={item}
                      wellId={wellData.id}
                      isTopItem={i === 0}
                      isLastItem={
                        wellItems.length === i + 1 && !isFetchingNextPage
                      }
                      setTarget={setTarget}
                      index={i}
                      startLoading={() => setIsLoading(true)}
                      isMovable={isMovable}
                    />
                  ))}
            </div>
          </WithConditionalRendering>
          <FrogOnBook
            frogId={wellData.frog}
            message={message}
            zIndex={wellItems.length + 1}
            isMovable={isMovable}
          />
          {isTimeToMakeSecond && (
            <WellActionButton
              btnName='새로운 우물 파기'
              href='create?isSecond=true'
              isPointing
            />
          )}
        </motion.div>
        {isLoading && <LoadingOverlay theme='dark' />}
      </>
    );
  }
);

export default WellItemList;
