import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface NewItemState {
  /** 새로 추가된 아이템 id */
  newItemId: string | null;
  setNewItemId: (value: string | null) => void;
}

/** 우물에 새로운 아이템 추가 시 그 아이템에 대한 id를 저장하는 state store
 * - 새로 추가된 아이템의 id를 저장합니다.
 * - 우물에 접근 시 저장된 id와 같은 아이템이 있는 경우, 모션을 동작시킵니다.
 * - TODO: 여러 우물에 도서 추가 시 마지막 우물의 아이템만 저장됨
 */
const useNewItemStore = create<NewItemState>()(
  persist(
    (set) => ({
      newItemId: null,
      setNewItemId: (value) => {
        set((state) => ({ ...state, newItemId: value }));
      },
    }),
    {
      name: 'NewItemStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        newItemId: state.newItemId,
        setNewItemId: state.setNewItemId,
      }),
    }
  )
);

export default useNewItemStore;
