'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import uniqueId from 'lodash/uniqueId';
import DeleteButton from '@/components/ListItem/DeleteButton';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/utils/date';
import ImageSlider from '../MemoForm/ImageForm/ImageSlider';
import { Memo } from '../../models/memo.model';
import ImageSlot from '../MemoForm/ImageForm/ImageSlot';

interface Props {
  memoData: Memo;
  setMemoId: () => void;
  onDelete: () => void;
  userId: string;
}

function MemoListItem({ memoData, setMemoId, onDelete, userId }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const isRootUser = userId === session?.user.id;

  return (
    <div className='review-item px-0 pb-0'>
      <div
        className='flex w-full flex-col gap-[20px]'
        onClick={() =>
          router.push(
            isRootUser
              ? `/${userId}/well-book/${memoData.isbn}/memo/${memoData.id}`
              : `/review/${memoData.id}`
          )
        }
      >
        {memoData.images.length !== 0 && (
          <ImageSlider>
            {memoData.images.map((img, index) => (
              <ImageSlot
                key={uniqueId()}
                isReadOnly
                src={`https://images.frolog.kr/memo/${img}.webp`}
                index={index}
              />
            ))}
          </ImageSlider>
        )}

        <div className='flex w-full flex-col gap-[20px] px-page pt-0'>
          <p className='break-all text-body-lg'>{memoData.content}</p>
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
      {isRootUser && (
        <DeleteButton
          type='memo'
          buttonText='메모 삭제'
          onDelete={onDelete}
          onClick={setMemoId}
        />
      )}
    </div>
  );
}

export default MemoListItem;
