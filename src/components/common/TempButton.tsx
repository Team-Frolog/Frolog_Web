'use client';

import React from 'react';
import Button from './button/Button';

function TempButton({ type }: { type: string }) {
  const handleShare = async () => {
    try {
      const imageUrl = `/images/test-result/type${type}.png`; // 경로는 필요에 따라 조정

      // 이미지를 Blob 객체로 변환
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Blob 객체를 File 객체로 변환
      const file = new File([blob], 'test-result.png', { type: blob.type });

      await window.navigator.share({
        title: 'Frolog 독서 성향 테스트',
        files: [file],
        // url: `https://frolog-web.vercel.app/frolog-test/result/${type}`,
      });
    } catch (err: any) {
      if (!err.toString().includes('cancel')) {
        alert('공유 기능이 지원되지 않는 환경입니다.');
      }
    }
  };
  return <Button onClick={handleShare}>공유하기 테스트</Button>;
}

export default TempButton;
