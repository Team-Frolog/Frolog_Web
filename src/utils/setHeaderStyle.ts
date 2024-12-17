interface Props {
  backgroundColor: string;
  iconColor: string;
  foregroundColor: string;
  unSelected: string;
}

/** 스크롤에 따른 색상 변화 기능이 있는 헤더에 색상을 적용하는 함수 */
export const setHeaderStyle = ({
  backgroundColor,
  iconColor,
  foregroundColor,
  unSelected,
}: Props) => {
  const header = document.getElementById('header')!;
  const foreground = document.getElementById('selected')!;
  const unselected = document.getElementById('unselected')!;
  const bar = document.getElementById('bar')!;
  const icon = document.getElementById('icon')!;

  if (header) {
    header.style.backgroundColor = backgroundColor;
  }
  if (bar) {
    bar.style.backgroundColor = foregroundColor;
  }
  if (icon) {
    icon.style.fill = iconColor;
  }
  if (unselected) {
    unselected.style.color = unSelected;
  }
  if (foreground) {
    foreground.style.color = foregroundColor;
  }
};

/** 헤더 색상 초기화 함수 */
export const resetHeaderStyles = () => {
  const header = document.getElementById('header');
  const foreground = document.getElementById('selected');
  const unselected = document.getElementById('unselected');
  const bar = document.getElementById('bar');
  const icon = document.getElementById('icon');

  if (header) {
    header.style.backgroundColor = '';
  }
  if (bar) {
    bar.style.backgroundColor = '';
  }
  if (icon) {
    icon.style.fill = '';
  }
  if (unselected) {
    unselected.style.color = '';
  }
  if (foreground) {
    foreground.style.color = '';
  }
};
