import React from 'react';

const mode = {
  div: {
    default: `px-[24px]`,
    typing: `px-0`,
  },
  button: {
    default: `rounded-[30px]`,
    typing: `rounded-0`,
  },
};

function FormButton() {
  return (
    <div className={`w-full ${mode.div.default} transition-all`}>
      <button
        className={`bg-main text-body_lg_bold box-border w-full px-[30px] py-[18px] ${mode.button.default} transition-all`}
      >
        버튼
      </button>
    </div>
  );
}

export default FormButton;
