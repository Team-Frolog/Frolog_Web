import { create } from 'zustand';

interface User {
  parentId: string;
  id: string;
  name: string;
}

interface StackMotionState {
  /** 대댓글 대상이 되는 유저 정보 */
  commentUser: User | null;
  setCommentUser: (user: User | null) => void;
}

/** 대댓글 작성을 위한 state store */
const useCommentStore = create<StackMotionState>((set) => ({
  commentUser: null,
  setCommentUser: (user) => {
    set(() => ({ commentUser: user }));
  },
}));

export default useCommentStore;
