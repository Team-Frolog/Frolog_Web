import React from 'react';
import { terms } from '@/data/terms/terms';
import { PAGES } from '@/constants/page';
import MenuItem from '../Menu/MenuItem';

/** 약관 메뉴 */
function TermsMenu() {
  return (
    <div className='flex w-full flex-col gap-[32px]'>
      {terms.map(
        (item) =>
          item.title && (
            <MenuItem
              key={item.id}
              name={item.title}
              href={`${PAGES.TERMS}/${item.name}`}
            />
          )
      )}
    </div>
  );
}

export default TermsMenu;
