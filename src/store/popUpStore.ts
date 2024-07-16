import { create } from 'zustand';

export type PopUpType = 'isOpenToast' | 'isOpenAlertSheet' | 'isOpenWellSheet';

interface PopUpState {
  isOpenToast: boolean;
  isOpenWellSheet: boolean;
  isOpenAlertSheet: boolean;
  actions: {
    changePopUpState: (type: PopUpType, value: boolean) => void;
  };
}

const usePopUpStore = create<PopUpState>((set) => ({
  isOpenToast: false,
  isOpenWellSheet: false,
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
export const useWellSheetState = () =>
  usePopUpStore((state) => state.isOpenWellSheet);
export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
