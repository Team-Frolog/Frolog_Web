import React from 'react';

interface Props {
  /** 별점 값 (0, 0.5, 1) */
  rating: 0 | 0.5 | 1;
  /** 사이즈 (px) */
  size?: number;
  /** 별 색상 */
  color?: string;
  /** 채워지지 않은 상태의 별 색상 */
  defaultColor?: string;
  /** 별점 선택 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/** 공통 별 컴포넌트
 * @param rating - 0, 0.5, 1의 값으로 별의 채움 정도를 조절
 * @param size - 별의 px 사이즈 (optional)
 * @param color - 채워진 별의 색상 (optional)
 * @param defaultColor - 채워지지 않은 별의 색상 (optional)
 * @param onClick - 별점 선택 핸들러 (optional, 주어지지 않은 경우 read only)
 */
function Star({ rating, color, defaultColor, size = 20, onClick }: Props) {
  const starWidth = `${rating * 100}%`;
  const gradientId = `starGradient-${rating}-${size}-${color}`;
  const scaleFactor = size / 20;

  return (
    <div
      className={`relative inline-block ${onClick && 'cursor-pointer'}`}
      onClick={onClick}
    >
      <svg
        className={`h-[${size}px] w-[${size}px]`}
        viewBox={`0 0 ${size} ${size}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop
              offset={starWidth}
              style={{ stopColor: color || '#313239', stopOpacity: 1 }}
            />
            <stop
              offset={starWidth}
              style={{
                stopColor: defaultColor || '#EDEFF4',
                stopOpacity: color ? 0 : 1,
              }}
            />
          </linearGradient>
        </defs>
        <g id='icon-star-mono' transform={`scale(${scaleFactor})`}>
          <path
            id='Vector'
            fill={`url(#${gradientId})`}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.9617 1.6058L12.9009 5.53497C13.0567 5.8508 13.3584 6.06997 13.7076 6.1208L18.0434 6.7508C18.9217 6.8783 19.2734 7.95913 18.6367 8.5783L15.4992 11.6366C15.3749 11.7579 15.2819 11.9076 15.2281 12.0728C15.1744 12.238 15.1617 12.4137 15.1909 12.585L15.9317 16.9033C16.0817 17.7791 15.1634 18.4458 14.3776 18.0333L10.4992 15.9941C10.3456 15.9133 10.1745 15.871 10.0009 15.871C9.82726 15.871 9.65622 15.9133 9.50256 15.9941L5.62423 18.0333C4.83756 18.4458 3.91923 17.7791 4.06923 16.9033L4.81006 12.585C4.83924 12.4137 4.82642 12.238 4.77271 12.0728C4.71901 11.9076 4.62602 11.758 4.50173 11.6366L1.36423 8.5783C0.728395 7.95913 1.07923 6.8783 1.9584 6.7508L6.2934 6.1208C6.64256 6.06997 6.94506 5.8508 7.1009 5.53497L9.03923 1.6058C9.43256 0.809134 10.5684 0.809134 10.9617 1.6058Z'
          />
        </g>
      </svg>
    </div>
  );
}

export default Star;
