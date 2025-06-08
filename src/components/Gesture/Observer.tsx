import React from 'react';

interface Props {
  isFetching: boolean;
  fallback?: React.ReactNode;
  extraClassName?: string;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
}

function Observer({ isFetching, fallback, extraClassName, setTarget }: Props) {
  return isFetching ? (
    fallback
  ) : (
    <div
      ref={setTarget}
      id='observer'
      className={`h-[10px] ${extraClassName}`}
    />
  );
}

export default Observer;
