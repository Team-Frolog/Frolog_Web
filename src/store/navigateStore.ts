import { create } from 'zustand';

interface NavigateStore {
  navigateState: any;
  setNavigateState: (state: any) => void;
}

const useNavigateStore = create<NavigateStore>((set) => ({
  navigateState: null,
  setNavigateState: (state) => set({ navigateState: state }),
}));

export default useNavigateStore;
