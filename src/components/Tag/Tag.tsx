import { Tag as TagType } from '@/types/tag';
import React from 'react';

interface Props {
  tagValue: string;
  size: 'small' | 'big';
  type: TagType | 'default';
  onClick?: () => void;
  isSelected?: boolean;
}

function Tag({ tagValue, size, type, onClick, isSelected = true }: Props) {
  const tagSize = size === 'small' ? 'tag-size-small' : 'tag-size-big';

  const getBgColor = () => {
    if (!isSelected || type === 'default') return 'default-tag';
    return type === 'pros' ? 'pro-tag' : 'con-tag';
  };

  return (
    <button
      type='button'
      onClick={onClick || undefined}
      className={`${tagSize} ${getBgColor()}`}
    >
      {tagValue}
    </button>
  );
}

export default Tag;
