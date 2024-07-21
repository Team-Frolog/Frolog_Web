export const setHeaderStyle = (
  backgroundColor: string,
  iconFill: string,
  foregroundClass: string,
  isCategory?: boolean
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
    bar.style.backgroundColor =
      backgroundColor === '#0E0E0E' ? '#FFFFFF' : '#0E0E0E';
  }
  if (icon) {
    icon.style.fill = iconFill;
  }
  if (unselected) {
    if (isCategory) {
      unselected.classList.remove('text-gray-500');
      unselected.classList.add('text-gray-800');
      unselected.style.opacity = '0.3';
    } else {
      unselected.classList.remove('text-gray-800');
      unselected.style.opacity = '1';
      unselected.classList.add('text-gray-500');
    }
  }
  if (foreground) {
    if (foregroundClass === 'text-white') {
      foreground.classList.remove('text-gray-800');
      foreground.classList.add('text-white');
    } else {
      foreground.classList.remove('text-white');
      foreground.classList.add('text-gray-800');
    }
  }
};
