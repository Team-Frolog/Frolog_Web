'use client';

import React from 'react';
import Tab from '@/components/Tab/Tab';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { GetBookRes } from '@frolog/frolog-api';
import BookInfo from './BookInfo';
import ReviewsForBook from '../ReviewsForBook/ReviewsForBook';

interface Props {
  bookId: string;
  bookData: GetBookRes;
}

/** 도서 상세 페이지 중 도서 정보/리뷰 모음 탭 컴포넌트 */
function BookInfoTap({ bookId, bookData }: Props) {
  const { replace } = useCustomRouter();
  const pathname = usePathname();
  const tab = useSearchParams().get('currentTab') || 'bookInfo';

  return (
    <div className='w-full'>
      <Tab
        tabs={[
          { id: 1, label: 'bookInfo', name: '도서 정보' },
          { id: 2, label: 'reviews', name: '리뷰 모음' },
        ]}
        currentTab={tab}
        defaultTab='bookInfo'
        onChangeTab={(label: string) =>
          replace(`${pathname}?currentTab=${label}`)
        }
      />
      {tab === 'bookInfo' && <BookInfo bookData={bookData} />}
      {tab === 'reviews' && <ReviewsForBook bookId={bookId} />}
    </div>
  );
}

export default BookInfoTap;
