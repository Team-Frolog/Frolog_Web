import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Store {
  emailCodeToken: string | null;
  setEmailCodeToken: (value: string | null) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        emailCodeToken: null,
        setEmailCodeToken: (value: string | null) =>
          set(() => ({ emailCodeToken: value })),
      }),
      {
        name: 'store',
      }
    )
  )
);

export default useStore;
