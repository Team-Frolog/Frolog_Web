import { Tag as TagType } from '@/types/tag';
import React from 'react';

interface Props {
  /** 태그 이름 */
  tagValue: string;
  /** 태그 사이즈 */
  size: 'small' | 'big';
  /** 장점(pros) or 단점(cons) or 기본(default) */
  type: TagType | 'default';
  /** 태그 클릭 시 핸들러 */
  onClick?: () => void;
  /** 태그 선택 여부 */
  isSelected?: boolean;
}

/** 공통 태그 컴포넌트
 * - 리뷰 작성 시 장점/단점 선택 태그로 활용됩니다.
 * - 리뷰 아이템의 장점/단점 태그로 활용됩니다.
 * - 도서 상세 페이지의 대표 태그로 활용됩니다.
 */
function Tag({ tagValue, size, type, onClick, isSelected = true }: Props) {
  const tagSize = size === 'small' ? 'tag-size-small' : 'tag-size-big';

  /** 태그의 배경색을 정하는 함수
   * - 선택되지 않았거나, type='default'인 경우, default 테마가 적용됩니다.
   * - 그 외에는 테마에 맞게 적용됩니다.
   */
  const getBgColor = () => {
    if (!isSelected || type === 'default') return 'default-tag';
    return type === 'pros' ? 'pro-tag' : 'con-tag';
  };

  return (
    <button
      type='button'
      onClick={onClick || undefined}
      className={`${tagSize} ${getBgColor()} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {tagValue}
    </button>
  );
}

export default Tag;
