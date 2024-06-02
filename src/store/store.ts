import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Store {}

const useStore = create(
  devtools(
    persist<Store>((set) => ({}), {
      name: 'store',
    })
  )
);

export default useStore;
