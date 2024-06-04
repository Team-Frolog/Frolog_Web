export const modalBackgroundVariants = {
  initial: { backgroundColor: 'rgba(0,0,0,0)' },
  animate: { backgroundColor: 'rgba(0,0,0,0.3)' },
  exit: { backgroundColor: 'rgba(0,0,0,0)' },
};

export const staggerContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  visible: {
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
