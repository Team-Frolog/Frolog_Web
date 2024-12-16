import React from 'react';
import ReactMarkdown from 'react-markdown';

/** markdown 컨텐츠 렌더링 컴포넌트 */
function TermsText({ text }: { text: string }) {
  return (
    <div className='prose flex-1 overflow-auto whitespace-pre-wrap py-[20px] text-body-md leading-normal text-gray-900 scrollbar-hide'>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default TermsText;
