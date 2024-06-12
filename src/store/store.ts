import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Store {
  emailCodeToken: string | null;
  setEmailCodeToken: (value: string | null) => void;

  emailVerifiedToken: string | null;
  setEmailVerifiedToken: (value: string | null) => void;

  resetToken: () => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        emailCodeToken: null,
        setEmailCodeToken: (value: string | null) =>
          set(() => ({ emailCodeToken: value })),
        emailVerifiedToken: null,
        setEmailVerifiedToken: (value: string | null) =>
          set(() => ({ emailVerifiedToken: value })),
        resetToken: () =>
          set(() => ({ emailCodeToken: null, emailVerifiedToken: null })),
      }),
      {
        name: 'store',
      }
    )
  )
);

export default useStore;
