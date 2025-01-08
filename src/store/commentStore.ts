import { create } from 'zustand';

interface User {
  parentId: string;
  id: string;
  name: string;
}

interface StackMotionState {
  /** 대댓글 대상이 되는 유저 정보 */
  commentUser: User | undefined;
  setCommentUser: (user: User | undefined) => void;
}

/** 대댓글 작성을 위한 state store */
const useCommentStore = create<StackMotionState>((set) => ({
  commentUser: undefined,
  setCommentUser: (user) => {
    set(() => ({ commentUser: user }));
  },
}));

export default useCommentStore;
