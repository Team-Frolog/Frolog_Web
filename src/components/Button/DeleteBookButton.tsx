import { bottomSheet } from '@/modules/BottomSheet';
import { MoreDotButton } from 'public/icons';
import React from 'react';

function DeleteBookButton() {
  return (
    <button
      type='button'
      onClick={() => {
        bottomSheet.open({
          sheetKey: 'delete_this_book',
          onClick: () => {},
          onClickSubButton: () => {},
        });
      }}
    >
      <MoreDotButton />
    </button>
  );
}

export default DeleteBookButton;
