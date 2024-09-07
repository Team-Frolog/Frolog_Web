import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DeleteImgIcon, ImgPlusIcon } from 'public/icons';
import ImagePreview from './ImagePreview';

interface Props {
  src: string | null;
  index: number;
  isReadOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
}

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
    const handleResize = () => {
      const newSize =
        window.innerWidth >= 450 ? 450 - 48 : window.innerWidth - 48;
      setDimensions({
        width: newSize,
        height: newSize,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className='relative shrink-0 overflow-hidden rounded-[12px]'
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div className='relative flex h-full w-full items-center justify-center rounded-[8px] bg-gray-200'>
        {src ? (
          <>
            <Image
              src={src}
              alt={`memo-img-${index}`}
              width={290}
              height={290}
              className='h-full w-full object-cover'
              priority
              onClick={
                isReadOnly
                  ? undefined
                  : (e) => {
                      e.stopPropagation();
                      setIsPreviewOpen(true);
                    }
              }
            />
            {!isReadOnly && (
              <button
                type='button'
                onClick={onDelete}
                className='absolute right-[8px] top-[8px] cursor-pointer'
              >
                <DeleteImgIcon />
              </button>
            )}
          </>
        ) : (
          <>
            <input
              type='file'
              accept='image/*'
              onChange={onChange}
              className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
            />
            <ImgPlusIcon />
          </>
        )}
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
