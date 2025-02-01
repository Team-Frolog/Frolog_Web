import React from 'react';

interface Props {
  /** 배경색 */
  bg: string;
  /** 라인색 (=text color) */
  line: string;
  /** 특별 스킨인 경우 */
  isOtherSkin?: boolean;
}

/** 우물 내 도서 메모를 나타내는 개구리밥 컴포넌트 */
function MemoLeaf({ bg, line, isOtherSkin = false }: Props) {
  return isOtherSkin ? null : (
    <svg
      width='30'
      height='27'
      viewBox='0 0 30 27'
      fill={line}
      xmlns='http://www.w3.org/2000/svg'
      className='absolute right-[24px] top-[8px]'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.2717 13.0235C15.9164 13.3755 16.1539 14.2397 15.8023 14.9538C12.8611 20.9269 8.2268 23.763 6.09352 24.4653C5.3833 24.6992 4.65642 24.2718 4.46997 23.5108C4.28352 22.7498 4.70812 21.9433 5.41834 21.7095C6.91346 21.2172 10.9106 18.8725 13.4679 13.6791C13.8195 12.965 14.6271 12.6715 15.2717 13.0235Z'
        fill={bg}
      />
      <path
        d='M16.5628 11.9184C16.1912 4.59561 22.0781 4.30901 26.0531 5.30446C26.7693 5.4838 27.1392 6.31948 26.8575 7.06576C23.7259 15.3634 19.2724 14.5822 17.0137 12.8408C16.7406 12.6303 16.5814 12.2843 16.5628 11.9184Z'
        fill={bg}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.9373 6.66977C25.998 6.50897 25.9103 6.38451 25.8146 6.36054C23.9014 5.88142 21.6808 5.75857 20.0448 6.49273C19.2547 6.84729 18.6185 7.3924 18.1866 8.1929C17.75 9.00206 17.4719 10.1658 17.557 11.8419C17.5587 11.8753 17.5668 11.904 17.5767 11.9246C17.5863 11.9445 17.5952 11.9525 17.5984 11.955C18.5614 12.6974 19.9183 13.1774 21.318 12.6885C22.7091 12.2026 24.432 10.6584 25.9373 6.66977ZM26.2917 4.25006C27.6284 4.58478 28.2804 6.13166 27.7778 7.46343C26.1515 11.7724 24.0818 13.9865 21.8986 14.749C19.7239 15.5086 17.7247 14.7273 16.429 13.7283C15.8892 13.3122 15.602 12.6537 15.5687 11.9966L16.5628 11.9193L15.5687 11.9966C15.4679 10.0113 15.7864 8.39318 16.4733 7.12017C17.1649 5.83849 18.1792 5.00114 19.3112 4.49314C21.5195 3.50216 24.2299 3.73372 26.2917 4.25006L26.0532 5.3053L26.2917 4.25006Z'
        fill={bg}
      />
      <path
        d='M17.1563 14.0933C21.6783 17.1546 19.806 22.2662 17.6426 25.4186C17.1395 26.1516 16.1218 26.0864 15.6748 25.3139C11.9733 18.9166 14.0335 15.3636 16.016 14.0616C16.3663 13.8315 16.809 13.8582 17.1563 14.0933Z'
        fill={bg}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7611 24.8511C16.7781 24.8428 16.8008 24.827 16.8254 24.7912C17.8555 23.2903 18.7505 21.4093 18.9008 19.6264C18.9746 18.7516 18.8678 17.9226 18.5306 17.1646C18.195 16.4101 17.6032 15.6626 16.612 14.9916C16.5868 14.9745 16.5646 14.9697 16.5526 14.9692C16.5501 14.9691 16.5483 14.9692 16.5472 14.9694C15.7694 15.4812 14.9551 16.4465 14.7101 17.9567C14.4638 19.4757 14.7694 21.7011 16.5373 24.7564C16.5825 24.8345 16.6422 24.8613 16.6926 24.8642C16.719 24.8657 16.7422 24.8604 16.7611 24.8511ZM18.4609 26.0447C17.5142 27.4241 15.6181 27.2606 14.8136 25.8702C12.8798 22.5282 12.3648 19.7784 12.7188 17.596C13.0739 15.4067 14.2794 13.945 15.4834 13.1542C16.2016 12.6826 17.0651 12.7628 17.7018 13.1938C18.9716 14.0534 19.8415 15.0928 20.359 16.2563C20.875 17.4162 21.0127 18.6361 20.9133 19.8159C20.7171 22.1423 19.5943 24.3933 18.4609 26.0447Z'
        fill={bg}
      />
      <path
        d='M15.0551 13.1789C8.59255 17.7581 4.87124 11.3368 3.47514 6.44527C3.25161 5.66208 3.7353 4.87688 4.47849 4.77475C13.9555 3.47244 15.8448 8.83907 15.5711 12.2696C15.5413 12.6431 15.3422 12.9754 15.0551 13.1789Z'
        fill={bg}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.61924 5.84894C4.45468 5.87156 4.39316 6.02646 4.42558 6.14004C5.1002 8.50376 6.29995 11.0789 7.97469 12.5187C8.78957 13.2192 9.69818 13.6366 10.7238 13.6642C11.7565 13.692 13.0082 13.3273 14.5018 12.2689C14.5295 12.2493 14.5502 12.2251 14.5632 12.2026C14.5757 12.1809 14.5785 12.1655 14.579 12.1584L15.571 12.2696L14.579 12.1584C14.6975 10.6742 14.341 8.8536 13.0173 7.54222C11.6982 6.23533 9.20159 5.21925 4.61924 5.84894ZM2.52456 6.75061C2.10991 5.29779 3.01577 3.8823 4.33759 3.70065C9.23229 3.02804 12.4188 4.04412 14.3452 5.95259C16.267 7.85657 16.7183 10.4346 16.563 12.3808C16.5045 13.1136 16.1206 13.7258 15.6082 14.0889C13.8705 15.3202 12.2336 15.87 10.7073 15.8288C9.17402 15.7875 7.85332 15.1524 6.75556 14.2087C4.60499 12.3598 3.24603 9.27845 2.52456 6.75061Z'
        fill={bg}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.88854 7.34653C5.91231 7.15162 6.0811 7.01397 6.26555 7.03909C8.48892 7.34188 10.2443 7.87013 11.7899 8.68257C13.3353 9.49492 14.655 10.583 16.015 11.9844C16.1481 12.1216 16.1508 12.3469 16.021 12.4876C15.8912 12.6283 15.678 12.6311 15.5448 12.4939C14.2168 11.1255 12.9534 10.089 11.4899 9.31977C10.0266 8.55059 8.3473 8.04016 6.17947 7.74493C5.99503 7.71981 5.86477 7.54144 5.88854 7.34653Z'
        fill={line}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.0771 7.39195C25.0771 7.19542 24.9264 7.03612 24.7404 7.03613C22.9765 7.03626 20.9863 7.92405 19.3063 8.96329C17.6206 10.006 16.1875 11.239 15.5315 11.9994C15.4062 12.1446 15.4161 12.3697 15.5535 12.5021C15.6909 12.6345 15.9039 12.6241 16.0292 12.4789C16.6276 11.7853 18.002 10.5948 19.6465 9.57748C21.2966 8.55671 23.1593 7.74792 24.7404 7.74781C24.9264 7.7478 25.0772 7.58847 25.0771 7.39195Z'
        fill={line}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7687 24.1445C16.9429 24.2033 17.1154 24.0923 17.1539 23.8967C17.606 21.6052 17.2897 17.3774 16.0918 12.1702C16.0457 11.9695 15.8686 11.8379 15.6963 11.876C15.524 11.9142 15.4217 12.1078 15.4678 12.3084C16.6593 17.488 16.9404 21.5696 16.5233 23.684C16.4847 23.8796 16.5946 24.0858 16.7687 24.1445Z'
        fill={line}
      />
    </svg>
  );
}

export default MemoLeaf;
