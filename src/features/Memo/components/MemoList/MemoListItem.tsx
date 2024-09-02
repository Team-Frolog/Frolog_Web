'use client';

import React from 'react';
import DeleteButton from '@/components/ListItem/DeleteButton';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/utils/format';
import ImageSlider from '../MemoForm/ImageForm/ImageSlider';
import { Memo } from '../../models/memo.model';
import ImageSlot from '../MemoForm/ImageForm/ImageSlot';

interface Props {
  memoData: Memo;
  setMemoId: () => void;
}

function MemoListItem({ memoData, setMemoId }: Props) {
  const router = useRouter();

  return (
    <div className='review-item px-0 pb-0'>
      <div
        className='flex w-full flex-col gap-[20px]'
        onClick={() =>
          router.push(`/well-book/${memoData.isbn}/memo/${memoData.id}`)
        }
      >
        <ImageSlider>
          {memoData.images.map((img, index) => (
            <ImageSlot
              key={img}
              isReadOnly
              src={`https://images.frolog.kr/memo/${img}.webp`}
              index={index}
            />
          ))}
        </ImageSlider>
        <div className='flex w-full flex-col gap-[20px] px-page'>
          <p>{memoData.content}</p>
          <div className='flex w-full justify-between'>
            <span className='text-body-md text-gray-600'>
              {formatDate(memoData.date)}{' '}
              {memoData.date !== memoData.edit ? '(수정됨)' : ''}
            </span>
            <span
              className={`text-body-lg-bold ${memoData.is_public ? 'text-main' : 'text-gray-600'}`}
            >
              {memoData.is_public ? '공개' : '비공개'}
            </span>
          </div>
        </div>
      </div>
      <DeleteButton buttonText='메모 삭제' onClick={setMemoId} />
    </div>
  );
}

export default MemoListItem;
