import React from 'react';

function Observer({
  setTarget,
}: {
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
}) {
  return <div ref={setTarget} id='observer' className='h-[10px]' />;
}

export default Observer;
