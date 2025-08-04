'use client';

import React from 'react';
import { useUserId } from '@/store/sessionStore';
import { useScroll } from '@/hooks/gesture/useScroll';
import { CATEGORY } from '@/constants/category';
import DeleteWellItem from '@/features/Well/components/DeleteWellItem';
import TabMenu from '@/components/Tab/TabMenu';
import { MEMO_REVIEW_TABS } from '@/constants/tabs';
import HeaderWrapper from '@/components/Wrapper/HeaderWrapper';
import useNavigateStore from '@/store/navigateStore';
import DeleteFeedItem from '@/features/Profile/components/Feed/DeleteFeedItem';

interface Props {
  userId: string;
  wellId: string;
  bookId: string;
  category: string;
}

function ReviewMemoHeader({ userId, wellId, bookId, category }: Props) {
  const rootUserId = useUserId();
  const navigateState = useNavigateStore((state) => state.navigateState);
  const isFromProfile = navigateState?.from === 'profile' || false;

  useScroll({
    categoryColor: CATEGORY[category].bg,
    foreground: CATEGORY[category].text,
    unSelected: CATEGORY[category].band,
  });

  return (
    <>
      <HeaderWrapper isResponsive>
        <div className='flex w-full items-center justify-between'>
          <TabMenu tabs={MEMO_REVIEW_TABS} />
          {userId === rootUserId &&
            (isFromProfile ? (
              <DeleteFeedItem />
            ) : (
              <DeleteWellItem wellId={wellId} bookId={bookId} />
            ))}
        </div>
      </HeaderWrapper>
    </>
  );
}

export default ReviewMemoHeader;
