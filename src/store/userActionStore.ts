import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserActionState {
  /** 마지막 스크롤 위치 */
  lastScrollPos: number | null;
  actions: {
    setScrollPos: (value: number | null) => void;
  };
}

/** 스크롤, 클릭 등 사용자 액션에 대한 정보를 저장하는 스토어 */
const useUserActionStore = create<UserActionState>()(
  persist(
    (set) => ({
      lastScrollPos: null,
      actions: {
        setScrollPos: (value) => {
          set((state) => ({ ...state, lastScrollPos: value }));
        },
      },
    }),
    {
      name: 'UserActionStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        lastScrollPos: state.lastScrollPos,
      }),
    }
  )
);

export default useUserActionStore;
