import Link from 'next/link';
import { CancelIcon } from 'public/icons';
import React from 'react';

interface Props {
  /** 클릭 시 이동할 경로 */
  route: string;
  /** 적용할 스타일 관련 클래스 */
  classes: string;
}

/** X 표시의 아이콘이 적용된 Link (취소, 나가기 버튼) */
function QuitButton({ route, classes }: Props) {
  return (
    <Link className={classes} href={route}>
      <CancelIcon fill='#B3B6C5' width={24} height={24} />
    </Link>
  );
}

export default QuitButton;
