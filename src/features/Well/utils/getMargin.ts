/** deprecated */
export const getMargin = () => {
  const margins = [
    '0px 0px 0px 30px',
    '0px 20px 0px 0px',
    '0px 0px 0px 0px',
    '0px 30px 0px 0px',
  ];
  const randomIndex = Math.floor(Math.random() * margins.length);
  return margins[randomIndex];
};
