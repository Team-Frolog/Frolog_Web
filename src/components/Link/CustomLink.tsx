import { TapKey } from '@/constants/taps';
import Link, { LinkProps } from 'next/link';
import React, { HTMLAttributes } from 'react';
import { useSearchParams } from 'next/navigation';

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  tapKey?: TapKey;
}

function CustomLink({ href, tapKey, ...props }: Props) {
  const currentTapKey = useSearchParams().get('tap') || '';
  const separator = href.includes('?') ? '&' : '?';

  return (
    <Link
      href={`${href}${separator}tap=${tapKey || currentTapKey}`}
      {...props}
    />
  );
}

export default CustomLink;
