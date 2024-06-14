import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Verification {
  emailCodeToken: string | null;
  emailVerifiedToken: string | null;
}

interface Store {
  verification: Verification;
  setEmailCodeToken: (value: string | null) => void;
  setEmailVerifiedToken: (value: string | null) => void;
  resetToken: () => void;
}

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        verification: {
          emailCodeToken: null,
          emailVerifiedToken: null,
        },
        setEmailCodeToken: (value: string | null) =>
          set((state) => ({
            verification: { ...state.verification, emailCodeToken: value },
          })),
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
      }),
      {
        name: 'store',
      }
    )
  )
);
export default useStore;
