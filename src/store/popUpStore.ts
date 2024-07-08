import { create } from 'zustand';

type Type = 'toastMessage';

interface PopUpState {
  toastMessage: boolean;
  actions: {
    changePopUpState: (type: Type, value: boolean) => void;
  };
}

const usePopUpStore = create<PopUpState>((set) => ({
  toastMessage: false,
  actions: {
    changePopUpState: (type, value) => {
      set((state) => ({ ...state, [type]: value }));
    },
  },
}));

export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
