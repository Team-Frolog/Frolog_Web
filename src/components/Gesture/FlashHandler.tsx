'use client';

import { PAGES } from '@/constants/page';
import { FlashKeys } from '@/data/ui/flash';
import useAddBookStore from '@/store/addBookStore';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  /** flash type */
  type: FlashKeys;
  /** flash 동작 후 redirect 여부 */
  isRedirect: boolean;
}

/** flash 페이지를 핸들링하는 컴포넌트
 * @param type - flash 타입 (FlashKeys)
 * @param isRedirect - flash 동작 후 redirect 여부
 *
 * - 2.5초 뒤 특정 동작을 수행합니다.
 * - isRedirect=true 이고, qs로 callbackUrl이 주어진 경우 callbackUrl로 이동됩니다.
 * - callbackUrl이 주어지지 않은 경우 메인(/)으로 이동됩니다.
 */
function FlashHandler({ type, isRedirect }: Props) {
  const callbackUrl = useSearchParams().get('callbackUrl');
  const { resetWellId } = useAddBookStore((state) => state.actions);

  useEffect(() => {
    setTimeout(() => {
      if (type === 'review') {
        resetWellId();
      }
      if (isRedirect) {
        window.location.replace(callbackUrl || PAGES.HOME);
      }
    }, 2500);
  }, []);

  return <></>;
}

export default FlashHandler;
