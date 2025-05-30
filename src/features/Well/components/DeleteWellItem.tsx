import { bottomSheet } from '@/modules/BottomSheet';
import { MoreDotButton } from 'public/icons';
import React from 'react';
import { useDeleteWellItem } from '../hooks/useDeleteWellItem';

interface Props {
  wellId: string;
  bookId: string;
}

function DeleteWellItem({ wellId, bookId }: Props) {
  const { handleDeleteWellItem, handleDeleteThisBook } =
    useDeleteWellItem(wellId);

  return (
    <button
      type='button'
      onClick={() => {
        bottomSheet.open({
          sheetKey: 'delete_this_book',
          onClick: () => handleDeleteWellItem(),
          onClickSubButton: () => handleDeleteThisBook(bookId),
        });
      }}
    >
      <MoreDotButton />
    </button>
  );
}

export default DeleteWellItem;
