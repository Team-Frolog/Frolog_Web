import React from 'react';

/** Pull to refresh에 사용되는 스피너 */
function Spinner() {
  return (
    <div className='spinner fixed inset-x-0 z-60 mx-auto h-[30px] w-[30px] rounded-[50%] border-[4px] border-gray-200 border-t-main bg-gray-300' />
  );
}

export default Spinner;
