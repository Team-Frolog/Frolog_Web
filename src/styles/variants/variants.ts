export const modalBackgroundVariants = {
  initial: { backgroundColor: 'rgba(0,0,0,0)' },
  animate: { backgroundColor: 'rgba(0,0,0,0.7)' },
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
      staggerChildren: 0.5,
    },
  },
};

export const staggerItemVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const leafVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delay: 2,
    },
  },
};

export const frogVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delay: 2.5,
    },
  },
};

export const tapVariants = {
  tap: {
    scale: 0.95,
    opacity: 0.9,
    transition: { duration: 0 },
  },
};

export const pointing = {
  animate: {
    opacity: [1, 1, 0],
    scale: [0, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 0.8,
    ease: 'linear',
  },
};
