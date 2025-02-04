import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserActionState {
  /** 마지막 스크롤 위치 - 스크롤 유지에 활용 */
  lastScrollPos: number | null;
  /** 피드 내 리뷰/메모인지 여부 - 리뷰/메모에서 도서 상세로 이동 시 replace/push 조건으로 활용 */
  isInFeed: boolean;
  actions: {
    setScrollPos: (value: number | null) => void;
    setIsInFeed: (value: boolean) => void;
  };
}

/** 스크롤, 클릭 등 사용자 액션에 대한 정보를 저장하는 스토어 */
const useUserActionStore = create<UserActionState>()(
  persist(
    (set) => ({
      lastScrollPos: null,
      isInFeed: false,
      actions: {
        setScrollPos: (value) => {
          set((state) => ({ ...state, lastScrollPos: value }));
        },
        setIsInFeed: (value) => {
          set((state) => ({ ...state, isInFeed: value }));
        },
      },
    }),
    {
      name: 'UserActionStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        lastScrollPos: state.lastScrollPos,
        isInFeed: state.isInFeed,
      }),
    }
  )
);

export const useScrollPos = () =>
  useUserActionStore((state) => state.lastScrollPos);
export const useIsInFeed = () => useUserActionStore((state) => state.isInFeed);
export const useUserActionActions = () =>
  useUserActionStore((state) => state.actions);

export default useUserActionStore;
