import { create } from 'zustand';

export type PopUpType =
  | 'isOpenAlertSheet'
  | 'isOpenWellSheet'
  | 'isOpenDeleteSheet'
  | 'isOpenLoginSheet'
  | 'isOpenSelectBooksSheet';

interface PopUpState {
  isOpenWellSheet: boolean;
  isOpenDeleteSheet: boolean;
  isOpenAlertSheet: boolean;
  isOpenLoginSheet: boolean;
  isOpenSelectBooksSheet: boolean;
  actions: {
    changePopUpState: (type: PopUpType, value: boolean) => void;
  };
}

const usePopUpStore = create<PopUpState>((set) => ({
  isOpenWellSheet: false,
  isOpenDeleteSheet: false,
  isOpenAlertSheet: false,
  isOpenLoginSheet: false,
  isOpenSelectBooksSheet: false,
  actions: {
    changePopUpState: (type, value) => {
      set((state) => ({ ...state, [type]: value }));
    },
  },
}));

export const useAlertSheetState = () =>
  usePopUpStore((state) => state.isOpenAlertSheet);
export const useWellSheetState = () =>
  usePopUpStore((state) => state.isOpenWellSheet);
export const useDeleteSheetState = () =>
  usePopUpStore((state) => state.isOpenDeleteSheet);
export const useLoginSheetState = () =>
  usePopUpStore((state) => state.isOpenLoginSheet);
export const useSelectSheetState = () =>
  usePopUpStore((state) => state.isOpenSelectBooksSheet);
export const usePopUpActions = () => usePopUpStore((state) => state.actions);

export default usePopUpStore;
