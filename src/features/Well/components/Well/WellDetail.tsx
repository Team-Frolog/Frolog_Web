import React, { useEffect, useMemo, useState } from 'react';
import { useObserver } from '@/hooks/gesture/useObserver';
import {
  ChangeWellItemOrderReq,
  GetWellItemRes,
  GetWellRes,
} from '@frolog/frolog-api';
import { usePathname } from 'next/navigation';
import { getPath } from '@/utils/getPath';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useWellItems } from '../../hooks/useWellItems';
import WellTitle from './WellTitle';
import { updateWellItemOrder } from '../../api/well.api';
import WellItemList from './WellItem/WellItemList';
import WellOrderEditHeader from './WellHeader/WellOrderEditHeader';
import WellHeader from './WellHeader/WellHeader';

interface Props {
  /** 우물 정보 데이터 객체 */
  wellData: GetWellRes;
  /** 로그인한 유저인지 여부 */
  isRootUser: boolean;
  /** 첫 우물인지 여부 */
  isDefaultWell?: boolean;
  /** 우물 순서 변경 모드 여부 */
  isMovable: boolean;
  userId: string;
}
function WellDetail({
  userId,
  wellData,
  isRootUser,
  isDefaultWell,
  isMovable,
}: Props) {
  const router = useCustomRouter('well');
  const pathname = usePathname();
  const { id, name, item_cnt } = wellData;

  const {
    wellItems,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isEmpty,
    isFetched,
  } = useWellItems(wellData.id);

  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });
  const originalItems = useMemo(() => wellItems, [wellItems]);
  const [items, setItems] = useState<GetWellItemRes[]>([]);
  const [orderChanges, setOrderChanges] = useState<ChangeWellItemOrderReq[]>(
    []
  );

  useEffect(() => {
    if (originalItems.length) {
      setItems(originalItems);
    }
  }, [originalItems]);

  const handleMoveItem = (result: any) => {
    const prevChanges = orderChanges;
    prevChanges.push({
      well_id: wellData.id,
      id: result.draggableId,
      order: originalItems.length - +result.destination.index - 1,
    });
    console.log(prevChanges);
    setOrderChanges(prevChanges);

    setItems((prevItems) => {
      const updated = [...prevItems];
      const [moved] = updated.splice(result.source.index, 1);
      updated.splice(result.destination.index, 0, moved);
      return updated;
    });
  };

  const handleOrderChange = async () => {
    try {
      await updateWellItemOrder({
        well_id: wellData.id,
        changes: orderChanges,
      });
      router.replace(getPath.wellDetail(userId, wellData.id));
    } catch (error) {
      console.error('순서 저장 실패:', error);
    }
  };

  return (
    <>
      {isMovable ? (
        <WellOrderEditHeader
          onClickCancel={() => router.replace(pathname)}
          onClickDone={handleOrderChange}
        />
      ) : (
        <WellHeader
          userId={userId}
          wellId={wellData.id}
          isRootUser={isRootUser}
          hasBackButton={!isDefaultWell}
        />
      )}
      <WellTitle
        title={name}
        wellId={id}
        itemCount={item_cnt}
        isRootUser={isRootUser}
        isPointing={isDefaultWell && wellItems.length < 2}
        isMovable={isMovable}
      />

      <WellItemList
        wellData={wellData}
        items={items}
        wellItems={wellItems}
        isRootUser={isRootUser}
        isDefaultWell={isDefaultWell}
        isMovable={isMovable}
        isFetchingNextPage={isFetchingNextPage}
        isFetched={isFetched}
        isEmpty={isEmpty}
        setTarget={setTarget}
        handleMoveItem={handleMoveItem}
      />
    </>
  );
}

export default WellDetail;
