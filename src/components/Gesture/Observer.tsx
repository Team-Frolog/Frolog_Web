import React from 'react';

interface Props {
  isFetching: boolean;
  fallback?: React.ReactNode;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
}

function Observer({ isFetching, fallback, setTarget }: Props) {
  return isFetching ? (
    fallback
  ) : (
    <div ref={setTarget} id='observer' className='h-[10px]' />
  );
}

export default Observer;
