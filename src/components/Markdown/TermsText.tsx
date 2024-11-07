import React from 'react';
import ReactMarkdown from 'react-markdown';

function TermsText({ text }: { text: string }) {
  return (
    <div className='prose flex-1 overflow-auto whitespace-pre-wrap py-[20px] text-body-md leading-normal text-gray-900 scrollbar-hide'>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default TermsText;
