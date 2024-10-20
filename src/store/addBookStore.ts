import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StackMotionState {
  wellId: string | null;
  actions: {
    setWellId: (value: string) => void;
    resetWellId: () => void;
  };
}

const useAddBookStore = create<StackMotionState>()(
  persist(
    (set) => ({
      wellId: null,
      actions: {
        setWellId: (value) => {
          set((state) => ({ ...state, wellId: value }));
        },
        resetWellId: () => {
          set((state) => ({ ...state, wellId: null }));
        },
      },
    }),
    {
      name: 'AddBookStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        wellId: state.wellId,
        setWellId: state.actions.setWellId,
        resetWellId: state.actions.resetWellId,
      }),
    }
  )
);

export default useAddBookStore;
