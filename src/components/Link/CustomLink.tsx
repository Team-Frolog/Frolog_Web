import { TapKey } from '@/constants/taps';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { HTMLMotionProps, motion } from 'framer-motion';

const MotionLink = motion.create(Link);

interface Props extends LinkProps, HTMLMotionProps<'a'> {
  href: string;
  tapKey?: TapKey;
}

function CustomLink({ href, tapKey, ...props }: Props) {
  const currentTapKey = useSearchParams().get('tap') || '';
  const separator = href.includes('?') ? '&' : '?';

  return (
    <MotionLink
      href={`${href}${separator}tap=${tapKey || currentTapKey}`}
      {...props}
    />
  );
}

export default CustomLink;
