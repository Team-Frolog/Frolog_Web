import plugin from 'tailwindcss/plugin';

export const tailwindPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.example': {
      color: 'red',
    },
  });
});
