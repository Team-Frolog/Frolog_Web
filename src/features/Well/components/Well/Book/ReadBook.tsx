import React from 'react';

interface Props {
  title: string;
  category: string;
  bookHeight?: number;
}

function ReadBook({ title, category, bookHeight }: Props) {
  return (
    <div
      style={{ height: bookHeight }}
      className={`read-book bg-category-bg-${category}`}
    >
      <div className={`read-book-band bg-category-band-${category}`} />
      <span className='read-book-text'>{title}</span>
    </div>
  );
}

export default ReadBook;
