import TagSlider from '@/components/Tag/TagSlider';
import { ImageSlider, ImageSlot } from '@/features/Memo';
import { formatDate } from '@/utils/date';
import { getImageSrc } from '@/utils/getImageSrc';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import React from 'react';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  /** 피드 이외의 곳에서 사용될 경우 false */
  isFeed?: boolean;
  /** 피드 데이터 객체 */
  feedData: GetReviewRes | GetMemoRes;
}

/** 피드, 리뷰, 메모 아이템에 활용되는 컨텐츠 부분 컴포넌트
 * - 메모인 경우 이미지가 포함될 수 있습니다.
 * - 리뷰인 경우 태그가 포함됩니다.
 */
function FeedContent({ feedData, isFeed = true }: Props) {
  return (
    <div className='flex-column z-10 gap-[20px] bg-white py-[20px]'>
      {isGetMemoRes(feedData) ? (
        <>
          {feedData.images.length !== 0 && (
            <ImageSlider>
              {feedData.images.map((img, index) => (
                <ImageSlot
                  key={index}
                  isReadOnly
                  src={getImageSrc(img, 'memo')}
                  index={index}
                />
              ))}
            </ImageSlider>
          )}
          {feedData.tags && feedData.tags.length > 0 && (
            <div
              className='flex-col-center w-full gap-[8px]'
              onClick={(e) => e.preventDefault()}
            >
              <TagSlider type='pros' tagKeys={feedData.tags} isFirstMemo />
            </div>
          )}
          <p className='whitespace-pre-wrap break-all px-page text-body-lg'>
            {feedData.content}
          </p>
        </>
      ) : (
        <>
          <div
            className='flex-col-center w-full gap-[8px]'
            onClick={(e) => e.preventDefault()}
          >
            <TagSlider
              type='pros'
              tagKeys={(feedData as GetReviewRes).tags_pos}
            />
            <TagSlider
              type='cons'
              tagKeys={(feedData as GetReviewRes).tags_neg}
            />
          </div>
          <div className='flex-column gap-[12px] px-page'>
            <h3 className='break-all text-body-xl-bold'>
              {(feedData as GetReviewRes).title}
            </h3>
            <p className='whitespace-pre-wrap break-all text-body-lg'>
              {feedData.content}
            </p>
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
