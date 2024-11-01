import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StackMotionState {
  isThroughSearch: boolean | null;
  wellId: string | null;
  actions: {
    setIsThroughSearch: (value: boolean) => void;
    setWellId: (value: string) => void;
    resetWellId: () => void;
    resetAll: () => void;
  };
}

const useAddBookStore = create<StackMotionState>()(
  persist(
    (set) => ({
      isThroughSearch: null,
      wellId: null,
      actions: {
        setIsThroughSearch: (value) => {
          set((state) => ({ ...state, isThroughSearch: value }));
        },
        setWellId: (value) => {
          set((state) => ({ ...state, wellId: value }));
        },
        resetWellId: () => {
          set((state) => ({ ...state, wellId: null }));
        },
        resetAll: () => {
          set((state) => ({ ...state, isThroughSearch: null, wellId: null }));
        },
      },
    }),
    {
      name: 'AddBookStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        wellId: state.wellId,
        isThroughSearch: state.isThroughSearch,
        setWellId: state.actions.setWellId,
        resetWellId: state.actions.resetWellId,
        setIsThroughSearch: state.actions.setIsThroughSearch,
        resetAll: state.actions.resetAll,
      }),
    }
  )
);

export default useAddBookStore;
