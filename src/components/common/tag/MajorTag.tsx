import { Tag } from '@/types/tag';
import React from 'react';

interface Props {
  type: 'default' | Tag;
  text?: string;
}

function MajorTag({ type, text }: Props) {
  return (
    <div
      className={`major-tag-common ${type === 'default' && 'major-default-tag'} ${type === 'pros' ? 'pro-tag' : 'con-tag'}`}
    >
      {type === 'default' ? '첫 리뷰 작성자가 되어보세요!' : text}
    </div>
  );
}

export default MajorTag;
