'use client';

import React from 'react';
import CustomLink from '@/components/Link/CustomLink';
import { useUserId } from '@/store/sessionStore';
import uniqueId from 'lodash/uniqueId';
import { getPath } from '@/utils/getPath';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import DeleteButton from '@/components/Button/DeleteButton';
import { formatDate } from '@/utils/date';
import { getImageSrc } from '@/utils/getImageSrc';
import TagSlider from '@/components/Tag/TagSlider';
import ImageSlider from '../MemoForm/ImageForm/ImageSlider';
import { Memo } from '../../models/memo.model';
import ImageSlot from '../MemoForm/ImageForm/ImageSlot';

interface Props {
  /** 메모 데이터 객체 */
  memoData: Memo;
  /** 삭제 시 삭제 할 메모 id setter  */
  setMemoId: () => void;
  /** 삭제 핸들러 */
  onDelete: () => void;
  /** 유저 id */
  userId: string;
}

/** 메모 리스트 아이템 컴포넌트 */
function MemoListItem({ memoData, setMemoId, onDelete, userId }: Props) {
  const sessionUserId = useUserId();
  const isRootUser = userId === sessionUserId;

  return (
    <div className={`review-item px-0 ${isRootUser ? 'pb-0' : 'pb-[36px]'}`}>
      <CustomLink
        prefetch
        className='flex w-full flex-col gap-[20px]'
        href={isRootUser ? `memo/${memoData.id}` : getPath.memo(memoData.id)}
      >
        <WithConditionalRendering condition={memoData.images.length !== 0}>
          <ImageSlider>
            {memoData.images.map((img, index) => (
              <ImageSlot
                key={uniqueId()}
                isReadOnly
                src={getImageSrc(img, 'memo')}
                index={index}
              />
            ))}
          </ImageSlider>
        </WithConditionalRendering>
        {memoData.tags && memoData.tags.length > 0 && (
          <div className='flex-col-center w-full gap-[8px]'>
            <TagSlider type='pros' tagKeys={memoData.tags} isFirstMemo />
          </div>
        )}

        <div className='flex w-full flex-col gap-[20px] px-page pt-0'>
          <p className='whitespace-pre-wrap break-all text-body-lg'>
            {memoData.content}
          </p>
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
      </CustomLink>
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
