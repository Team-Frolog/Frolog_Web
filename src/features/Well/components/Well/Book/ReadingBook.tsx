import React from 'react';

interface Props {
  title: string;
  category: string;
  bookHeight?: number;
}

function ReadingBook({ title, category, bookHeight }: Props) {
  return (
    <div
      style={{ height: bookHeight }}
      className={`reading-book border-category-bg-${category}`}
    >
      <span className='reading-book-text'>{title}</span>
    </div>
  );
}

export default ReadingBook;
