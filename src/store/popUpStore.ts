import { create } from 'zustand';

type Type = 'isOpenToast' | 'isOpenAlertSheet';

interface PopUpState {
  isOpenToast: boolean;
  isOpenAlertSheet: boolean;
  actions: {
    changePopUpState: (type: Type, value: boolean) => void;
  };
}

const usePopUpStore = create<PopUpState>((set) => ({
  isOpenToast: false,
  isOpenAlertSheet: false,
  actions: {
    changePopUpState: (type, value) => {
      set((state) => ({ ...state, [type]: value }));
    },
  },
}));

export const useToastState = () => usePopUpStore((state) => state.isOpenToast);
export const useAlertSheetState = () =>
  usePopUpStore((state) => state.isOpenAlertSheet);
export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
