import { TextareaType } from '@/data/ui/textareaType';
import React from 'react';

interface Props {
  /** textarea 데이터 */
  option: TextareaType;
  /** 컨텐츠 */
  content: string;
  /** 폰트 타입 - 기본/굵게 */
  type?: 'default' | 'bold';
}

/** 리뷰, 메모에 활용되는 read only textarea
 * - 컨텐츠 내용에 따라 높이가 조절됩니다.
 */
function ReadOnlyTextarea({ option, content, type }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <div className='flex justify-between px-page text-body-md text-gray-700'>
        <span>{option.title}</span>
        <span>
          {content.length}/{option.maxLength}
        </span>
      </div>
      <div
        className={`textarea-common input-light break-words ${type === 'bold' ? 'text-body-lg-bold' : 'text-body-lg'}`}
      >
        {content}
      </div>
    </div>
  );
}

export default ReadOnlyTextarea;
