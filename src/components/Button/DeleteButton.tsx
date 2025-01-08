import { bottomSheet } from '@/modules/BottomSheet';
import React from 'react';

interface Props {
  /** 컴포넌트 사용 위치 */
  type: 'review' | 'memo';
  /** 버튼 텍스트 */
  buttonText: string;
  /** 삭제 시 핸들러 */
  onDelete: () => void;
  /** 삭제 클릭 시 추가적인 핸들러 */
  onClick?: () => void;
}

/** 리뷰, 메모 리스트 아이템의 삭제 버튼
 * - 버튼 클릭 시 삭제 확인용 바텀시트가 나타납니다.
 *   - 해당 바텀시트에서 삭제 클릭 시 onDelete가 호출됩니다.
 * - onClick이 주어진 경우, 클릭 시 추가적으로 호출됩니다.
 */
function DeleteButton({ type, buttonText, onDelete, onClick }: Props) {
  return (
    <div className='flex w-full flex-col px-[24px]'>
      <hr className='border-[0.5px] border-gray-400' />
      <button
        type='button'
        onClick={() => {
          if (onClick) {
            onClick();
          }
          bottomSheet.open({
            sheetKey: type === 'review' ? 'delete_review' : 'delete_memo',
            onClick: onDelete,
          });
        }}
        className='py-[24px] text-body-lg text-error'
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DeleteButton;
