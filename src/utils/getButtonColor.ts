export const getButtonColor = (theme: string) => {
  switch (theme) {
    case 'normal':
      return 'button-main';
    case 'error':
      return 'button-error';
    case 'gray':
      return 'button-gray';
    case 'light':
      return 'button-light';
    default:
      return `button-common ${theme}`;
  }
};
