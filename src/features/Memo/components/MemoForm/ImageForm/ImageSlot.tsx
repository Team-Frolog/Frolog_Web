'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { DeleteImgIcon, ImgPlusIcon } from 'public/icons';
import debounce from 'lodash/debounce';
import ImagePreview from './ImagePreview';

interface Props {
  /** 이미지 주소 */
  src: string | null;
  /** 슬라이더 내 위치 인덱스 */
  index: number;
  /** 미리보기 불가능 여부 */
  isReadOnly?: boolean;
  /** 이미지 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 이미지 삭제 핸들러 */
  onDelete?: () => void;
}

/** 이미지 컴포넌트
 * - src가 주어지는 경우 변경 불가능한 이미지가 렌더링됩니다.
 * - src가 주어지지 않는 경우 onChange를 통한 이미지 등록이 가능한 input이 렌더링됩니다.
 */
function ImageSlot({
  src,
  index,
  isReadOnly = false,
  onChange,
  onDelete,
}: Props) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = debounce(() => {
      const newSize =
        window.innerWidth >= 450 ? 450 - 48 : window.innerWidth - 48;

      if (newSize > 0) {
        setDimensions({
          width: newSize,
          height: newSize,
        });
      }
    }, 500);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className='relative w-full shrink-0 overflow-hidden rounded-[12px]'
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div className='relative flex h-full w-full items-center justify-center rounded-[8px] bg-gray-200'>
        <WithConditionalRendering
          condition={Boolean(src)}
          fallback={
            <>
              <input
                type='file'
                accept='image/*'
                onChange={onChange}
                className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
              />
              <ImgPlusIcon />
            </>
          }
        >
          <div className='h-full w-full'>
            <Image
              src={src!}
              alt={`memo-img-${index}`}
              layout='fill'
              priority
              loading='eager'
              className='object-cover'
              placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII='
              onClick={
                isReadOnly
                  ? undefined
                  : (e) => {
                      e.stopPropagation();
                      setIsPreviewOpen(true);
                    }
              }
            />
          </div>

          {onDelete && (
            <button
              type='button'
              onClick={onDelete}
              className='absolute right-[8px] top-[8px] cursor-pointer'
            >
              <DeleteImgIcon />
            </button>
          )}
        </WithConditionalRendering>
      </div>
      {isPreviewOpen && (
        <ImagePreview
          imgSrc={src!}
          closePreview={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  );
}

export default ImageSlot;
