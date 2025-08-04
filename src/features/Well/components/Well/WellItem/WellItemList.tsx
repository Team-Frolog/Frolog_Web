'use client';

import React, { useEffect, useState } from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { GetWellItemRes, GetWellRes } from '@frolog/frolog-api';
import { AnimatePresence, motion } from 'framer-motion';
import { getRandomEmptyMessage } from '@/features/Well/utils/getRandomMessage';
import WellItemSkeleton from '@/components/Fallback/Skeleton/Well/WellItemSkeleton';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { chat } from '@/features/Well/data/chat';
import FrogOnBook from '../WellFrog/FrogOnBook';
import WellItem from './WellItem';
import EmptyWellItem from './EmptyWellItem';
import GettingNewFrog from '../NewFrog/GettingNewFrog';
import { useWellItemCount } from '@/features/Well/hooks/useWellItemCount';
import { useUserFrogsCount } from '@/features/Store/hooks/useUserFrogsCount';
import SurveyFormSheet from '../NewFrog/SurveyFormSheet';
import { STORAGE_KEY } from '@/constants/storage';
import { isSurveyCompleted } from '@/hooks/useSurvey';

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
  handleMoveItem: (result: any) => void;
  userId: string;
}

/** 우물 아이템 리스트 컴포넌트 */
const WellItemList = React.memo(
  ({
    wellData,
    items,
    wellItems,
    isRootUser,
    isDefaultWell,
    isMovable,
    isFetchingNextPage,
    isEmpty,
    userId,
    setTarget,
    handleMoveItem,
  }: Props) => {
    const { wellItemCount, isLoading: isWellItemCountLoading } =
      useWellItemCount(userId);
    const { baseFrogsCount } = useUserFrogsCount();

    const isGotFirstFrog = localStorage.getItem(STORAGE_KEY.gotFirstFrog);

    const [isOpenSurveySheet, setIsOpenSurveySheet] = useState(false);
    const [isOpenNewFrogSheet, setIsOpenNewFrogSheet] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>(undefined);

    /** 우물 내 개구리 말풍선 메세지를 구하는 함수 */
    const getMessage = (count: number) => {
      if (!isRootUser) {
        return undefined;
      } else if (isDefaultWell) {
        if (count === 0) {
          return chat.default_well_empty;
        } else if (wellItemCount === 1 && isGotFirstFrog) {
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
      // 누적 권수가 1권이고, 개구리를 지급받지 않은 경우
      if (wellItemCount === 1 && baseFrogsCount === 0) {
        setIsOpenNewFrogSheet(true);
      }

      // 누적 권수가 3권 이상이고, 설문조사를 아직 완료하지 않은 경우
      if (wellItemCount && wellItemCount >= 3 && !isSurveyCompleted()) {
        setIsOpenSurveySheet(true);
      }
    }, [wellItems, isWellItemCountLoading, wellItemCount, baseFrogsCount]);

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

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));

      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);

    if (!enabled) {
      return null;
    }

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
            <DragDropContext onDragEnd={handleMoveItem}>
              <Droppable droppableId='wellItems'>
                {(rootProvided: any) => (
                  <div
                    className='wellItems'
                    {...rootProvided.droppableProps}
                    ref={rootProvided.innerRef}
                    style={{ width: '100%', display: 'flex' }}
                  >
                    <div className='flex w-full flex-col'>
                      {items?.map((item, i) => (
                        <Draggable
                          draggableId={item.id}
                          index={i}
                          key={item.id}
                        >
                          {(provided: any, snapshot: any) => (
                            <div
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              style={{
                                width: '100%',
                                display: 'flex',
                                ...provided.draggableProps.style,
                                left: 0,
                              }}
                            >
                              <WellItem
                                key={item.id}
                                wellBook={item}
                                draggableHandle={provided.dragHandleProps}
                                wellId={wellData.id}
                                isTopItem={i === 0}
                                isLastItem={
                                  wellItems.length === i + 1 &&
                                  !isFetchingNextPage
                                }
                                setTarget={setTarget}
                                index={i}
                                isDragging={snapshot.isDragging}
                                startLoading={() => setIsLoading(true)}
                                isMovable={isMovable}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {rootProvided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </WithConditionalRendering>
          <FrogOnBook
            frogId={wellData.frog}
            message={message}
            zIndex={wellItems.length + 1}
            isMovable={isMovable}
          />
        </motion.div>
        <AnimatePresence>
          {isOpenNewFrogSheet && !isGotFirstFrog && (
            <GettingNewFrog onClose={() => setIsOpenNewFrogSheet(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpenSurveySheet && (
            <SurveyFormSheet onClose={() => setIsOpenSurveySheet(false)} />
          )}
        </AnimatePresence>
        {isLoading && <LoadingOverlay theme='dark' />}
      </>
    );
  }
);

export default WellItemList;
