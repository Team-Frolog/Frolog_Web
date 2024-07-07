import { Tag as TagType } from '@/data/tag';
import React from 'react';

interface Props {
  tag: TagType;
  type: 'pros' | 'cons';
}

function Tag({ tag, type }: Props) {
  return (
    <button
      type='button'
      className={`tag-common ${type === 'pros' ? 'tag-not-selected' : 'con-tag'}`}
    >
      {tag.value}
    </button>
  );
}

export default Tag;
