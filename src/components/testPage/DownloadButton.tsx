'use client';

import Image from 'next/image';
import React, { useCallback } from 'react';
import { ICONS } from '@/constants/icons';

interface Props {
  type: '1' | '2' | '3';
}

function DownloadButton({ type }: Props) {
  const onClickImgLink = useCallback(() => {
    const srcUrl = `/images/test/result-image/type${type}.png`;
    fetch(srcUrl, { method: 'GET' })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Frolog 독서 성향 테스트 결과`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 1000);
        a.remove();
      })
      .catch((err) => {
        console.error('err', err);
      });
  }, []);

  return (
    <button
      onClick={onClickImgLink}
      className='absolute right-[20px] top-0 z-[20]'
    >
      <Image src={ICONS.test.download} alt='download' width={32} height={32} />
    </button>
  );
}

export default DownloadButton;
