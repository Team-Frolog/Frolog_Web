import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SplashState {
  isOpen: boolean;
  actions: {
    changeState: (value: boolean) => void;
  };
}

const useSplashStore = create<SplashState>()(
  persist(
    (set) => ({
      isOpen: false,
      actions: {
        changeState: (value) => {
          set((state) => ({ ...state, isOpen: value }));
        },
      },
    }),
    {
      name: 'SplashStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        isOpen: state.isOpen,
        changeState: state.actions.changeState,
      }),
    }
  )
);

export const useSplashState = () => useSplashStore((state) => state.isOpen);
export const useSplashAction = () => useSplashStore((state) => state.actions);

export default useSplashStore;
