import { bottomSheet } from '@/modules/BottomSheet';
import { MoreDotButton } from 'public/icons';
import React from 'react';
import { useDeleteProfileFeedItem } from '../../hooks/useDeleteProfileFeedItem';

function DeleteFeedItem() {
  const { deleteProfileFeedItemMutate } = useDeleteProfileFeedItem();
  return (
    <button
      type='button'
      onClick={() => {
        bottomSheet.open({
          sheetKey: 'delete_profile_feed',
          onClick: () => deleteProfileFeedItemMutate(),
        });
      }}
    >
      <MoreDotButton />
    </button>
  );
}

export default DeleteFeedItem;
