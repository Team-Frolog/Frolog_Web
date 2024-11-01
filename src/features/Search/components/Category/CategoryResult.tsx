'use client';

import React from 'react';
import CategoryResultSkeleton from '@/components/Fallback/Skeleton/CategoryResultSkeleton';
import Dropdown from '../Dropdown/Dropdown';
import { getTotalCount } from '../../utils/getTotalCount';
import { useCategory } from '../../hooks/useCategory';

function CategoryResult() {
  const { categoryData, searchValue, isLoading, isFetched } = useCategory();

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      {isFetched && (
        <>
          <span className='text-body-lg'>
            &ldquo;{searchValue}&rdquo; 검색 결과 총{' '}
            <strong className='text-body-lg-bold'>
              {getTotalCount(categoryData!)}
            </strong>
            권
          </span>
          <Dropdown categoryData={categoryData!} />
        </>
      )}
      {isLoading && <CategoryResultSkeleton />}
    </div>
  );
}

export default CategoryResult;
