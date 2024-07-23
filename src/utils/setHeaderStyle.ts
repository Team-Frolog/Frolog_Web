export const setHeaderStyle = (
  backgroundColor: string,
  iconFill: string,
  foregroundClass: string,
  unSelected: string
) => {
  const header = document.getElementById('header')!;
  const foreground = document.getElementById('selected')!;
  const unselected = document.getElementById('unselected')!;
  const bar = document.getElementById('bar')!;
  const icon = document.getElementById('icon')!;

  if (header) {
    header.style.backgroundColor = backgroundColor;
  }
  if (bar) {
    bar.style.backgroundColor = foregroundClass;
  }
  if (icon) {
    icon.style.fill = iconFill;
  }
  if (unselected) {
    unselected.style.color = unSelected;
  }
  if (foreground) {
    foreground.style.color = foregroundClass;
  }
};
