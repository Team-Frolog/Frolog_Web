'use client';

import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { ICONS } from '@/constants/icons';
import { ERROR_ALERT } from '@/constants/message';

interface Props {
  type: '1' | '2' | '3';
}

function DownloadButton({ type }: Props) {
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

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
        setIsDownloaded(true);
      })
      .catch(() => {
        window.alert(ERROR_ALERT);
      });
  }, [type]);

  return (
    <button type='button' onClick={onClickImgLink}>
      <Image
        src={isDownloaded ? ICONS.test.download_done : ICONS.test.download}
        alt='download'
        width={30}
        height={30}
      />
    </button>
  );
}

export default DownloadButton;
