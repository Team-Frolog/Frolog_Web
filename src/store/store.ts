import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Store {
  verification: {
    emailCodeToken: string | null;
    setEmailCodeToken: (value: string | null) => void;
    emailVerifiedToken: string | null;
    setEmailVerifiedToken: (value: string | null) => void;
    resetToken: () => void;
  };
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        verification: {
          emailCodeToken: null,
          setEmailCodeToken: (value: string | null) =>
            set((state) => ({
              verification: { ...state.verification, emailCodeToken: value },
            })),
          emailVerifiedToken: null,
          setEmailVerifiedToken: (value: string | null) =>
            set((state) => ({
              verification: {
                ...state.verification,
                emailVerifiedToken: value,
              },
            })),
          resetToken: () =>
            set((state) => ({
              verification: {
                ...state.verification,
                emailCodeToken: null,
                emailVerifiedToken: null,
              },
            })),
        },
      }),
      {
        name: 'store',
      }
    )
  )
);

export default useStore;
