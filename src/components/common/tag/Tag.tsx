import { TagData } from '@/data/tag';
import { Tag as TagType } from '@/types/tag';
import React from 'react';

interface Props {
  tag: TagData;
  type: TagType;
  onClick: (id: string) => void;
  isSelected: boolean;
}

function Tag({ tag, type, onClick, isSelected }: Props) {
  const getBgColor = () => {
    if (!isSelected) return 'tag-not-selected';
    return type === 'pros' ? 'pro-tag' : 'con-tag';
  };
  return (
    <button
      type='button'
      onClick={() => onClick(tag.id)}
      className={`tag-common ${getBgColor()}`}
    >
      {tag.value}
    </button>
  );
}

export default Tag;
