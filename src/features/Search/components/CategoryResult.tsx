import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import { getTotalCount } from '../utils/getTotalCount';
import { useCategory } from '../hooks/useCategory';

function CategoryResult() {
  const { categoryData, searchValue } = useCategory();

  if (!categoryData) return null;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <span className='text-body_lg'>
        &ldquo;{searchValue}&rdquo; 검색 결과 총{' '}
        <strong className='text-body_lg_bold'>
          {getTotalCount(categoryData)}
        </strong>
        권
      </span>
      <Dropdown categoryData={categoryData} />
    </div>
  );
}

export default CategoryResult;
