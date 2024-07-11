import { create } from 'zustand';

interface StackMotionState {
  newReviewId: string | null;
  isStacked: boolean;
  actions: {
    setNewReviewId: (value: string | null) => void;
    setIsStacked: (value: boolean) => void;
  };
}

const useStackMotionStore = create<StackMotionState>((set) => ({
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
}));

export const useNewReviewId = () =>
  useStackMotionStore((state) => state.newReviewId);
export const useStackState = () =>
  useStackMotionStore((state) => state.isStacked);
export const useStackMotionActions = () =>
  useStackMotionStore((state) => state.actions);

export default useStackMotionStore;
