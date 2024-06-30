'use client';

import React, { useCallback } from 'react';
// import LinkButton from '../common/button/LinkButton';
import Button from '../common/button/Button';

function StartButton() {
  const onClickImgLink = useCallback((srcUrl: string, name: string) => {
    fetch(srcUrl, { method: 'GET' })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
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
    // <div className='fixed bottom-[24px] left-[50%] z-10 w-[390px] -translate-x-1/2 mobile:w-[90%]'>
    //   <LinkButton route='/' disabled={false}>
    //     Frolog 시작하기
    //   </LinkButton>
    // </div>
    <Button
      onClick={() =>
        onClickImgLink('/images/test/result-image/type1.png', 'type1')
      }
    >
      이미지 저장 테스트
    </Button>
  );
}

export default StartButton;
