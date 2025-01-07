import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StackMotionState {
  /** 검색을 통해 도서를 추가한 경우 */
  isThroughSearch: boolean | null;
  /** 도서를 추가할 우물 id */
  wellId: string | null;
  actions: {
    setIsThroughSearch: (value: boolean) => void;
    setWellId: (value: string) => void;
    resetWellId: () => void;
    resetAll: () => void;
  };
}

/** 우물에 도서를 추가하는 과정에서 필요한 state store */
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
