import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StackMotionState {
  newReviewId: string | null;
  isStacked: boolean;
  actions: {
    setNewReviewId: (value: string | null) => void;
    setIsStacked: (value: boolean) => void;
  };
}

const useStackMotionStore = create<StackMotionState>()(
  persist(
    (set) => ({
      newReviewId: null,
      isStacked: false,
      actions: {
        setNewReviewId: (value) => {
          set((state) => ({ ...state, newReviewId: value }));
        },
        setIsStacked: (value) => {
          set((state) => ({ ...state, isStacked: value }));
        },
      },
    }),
    {
      name: 'NewReviewStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        newReviewId: state.newReviewId,
        isStacked: state.isStacked,
        setNewReviewId: state.actions.setNewReviewId,
        setIsStacked: state.actions.setIsStacked,
      }),
    }
  )
);

export const useNewReviewId = () =>
  useStackMotionStore((state) => state.newReviewId);
export const useStackState = () =>
  useStackMotionStore((state) => state.isStacked);
export const useStackMotionActions = () =>
  useStackMotionStore((state) => state.actions);

export default useStackMotionStore;
