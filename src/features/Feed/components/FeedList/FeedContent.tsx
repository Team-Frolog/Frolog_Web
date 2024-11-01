import TagSlider from '@/components/Tag/TagSlider';
import { ImageSlider, ImageSlot } from '@/features/Memo';
import { formatDate } from '@/utils/date';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  isFeed?: boolean;
  feedData: GetReviewRes | GetMemoRes;
}

function FeedContent({ feedData, isFeed = true }: Props) {
  return (
    <div className='flex flex-col gap-[20px] bg-white py-[20px]'>
      {isGetMemoRes(feedData) ? (
        <>
          {feedData.images.length !== 0 && (
            <ImageSlider>
              {feedData.images.map((img, index) => (
                <ImageSlot
                  key={uniqueId()}
                  isReadOnly
                  src={`https://images.frolog.kr/memo/${img}.webp`}
                  index={index}
                />
              ))}
            </ImageSlider>
          )}
          <p className='break-all px-page text-body-lg'>{feedData.content}</p>
        </>
      ) : (
        <>
          <div className='flex-col-center w-full gap-[8px]'>
            <TagSlider
              type='pros'
              tagKeys={(feedData as GetReviewRes).tags_pos}
            />
            <TagSlider
              type='cons'
              tagKeys={(feedData as GetReviewRes).tags_neg}
            />
          </div>
          <div className='flex flex-col gap-[12px] px-page'>
            <h3 className='break-all text-title-xl-bold'>
              {(feedData as GetReviewRes).title}
            </h3>
            <p className='break-all text-body-lg'>{feedData.content}</p>
          </div>
        </>
      )}
      {isFeed && (
        <span className='px-page text-body-md text-gray-600'>
          {formatDate(feedData.date)}{' '}
          {feedData.date !== feedData.edit && '(수정됨)'}
        </span>
      )}
    </div>
  );
}

export default FeedContent;
