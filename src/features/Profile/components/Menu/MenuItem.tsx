import Link from 'next/link';
import { MenuArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  /** 메뉴명 */
  name: string;
  /** 클릭 시 이동 경로 */
  href?: string;
  /** 테마 */
  theme?: 'default' | 'highlight';
  /** 클릭 시 핸들러 */
  onClick?: () => void;
}

/** 프로필 내 메뉴 아이템 컴포넌트
 * - href가 주어진 경우 클릭 시 해당 링크로 이동하고, onClick이 주어진 경우 그것이 실행됩니다.
 */
function MenuItem({ name, href, onClick, theme = 'default' }: Props) {
  return href ? (
    <Link href={href} className='flex w-full items-center justify-between'>
      <span
        className={`text-body-xl ${theme === 'default' ? 'text-gray-800' : 'text-main'}`}
      >
        {name}
      </span>
      <MenuArrowIcon fill={theme === 'default' ? '#B3B6C4' : '#00CE4C'} />
    </Link>
  ) : (
    <button
      type='button'
      onClick={onClick}
      className='flex w-full items-center justify-between'
    >
      <span className='text-body-xl text-gray-800'>{name}</span>
      <MenuArrowIcon fill='#B3B6C4' />
    </button>
  );
}

export default MenuItem;
