import React, { useState } from 'react';
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

  return (
    <div className='relative h-[340px] w-[340px] shrink-0 overflow-hidden'>
      {src ? (
        <>
          <Image
            src={src}
            alt={`memo-img-${index}`}
            width={290}
            height={290}
            className='h-full w-full object-cover'
            onClick={() => setIsPreviewOpen(true)}
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
        <div className='relative flex h-[340px] w-[340px] items-center justify-center rounded-[8px] bg-gray-200'>
          <input
            type='file'
            accept='image/*'
            onChange={onChange}
            className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
          />
          <ImgPlusIcon />
        </div>
      )}
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
