import { create } from 'zustand';

interface User {
  id: string;
  name: string;
}

interface StackMotionState {
  commentUser: User | undefined;
  setCommentUser: (user: User | undefined) => void;
}

const useCommentStore = create<StackMotionState>((set) => ({
  commentUser: undefined,
  setCommentUser: (user) => {
    set(() => ({ commentUser: user }));
  },
}));

export default useCommentStore;
