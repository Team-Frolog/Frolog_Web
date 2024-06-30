import React from 'react';

interface Props {
  type: 'default' | 'pros' | 'cons';
  text?: string;
}

function Tag({ type, text }: Props) {
  return (
    <div
      className={`tag-common ${type === 'default' && 'default-tag'} ${type === 'pros' ? 'pro-tag' : 'con-tag'}`}
    >
      {type === 'default' ? '첫 리뷰 작성자가 되어보세요!' : text}
    </div>
  );
}

export default Tag;
