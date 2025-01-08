import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface Actions {
  resetStep: () => void;
  moveStep: (n: number) => void;
}

interface StepStore {
  step: number;
  actions: Actions;
}

/** 여러 단계를 가진 폼을 위한 단계 저장 state store */
const useStepStore = create<StepStore>()(
  devtools(
    persist(
      (set) => ({
        step: 1,
        actions: {
          resetStep: () => {
            set(() => ({
              step: 1,
            }));
          },
          moveStep: (n: number) =>
            set((state) => ({
              step: state.step + n,
            })),
        },
      }),
      {
        name: 'StepStore',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          step: state.step,
          resetStep: state.actions.resetStep,
          moveStep: state.actions.moveStep,
        }),
      }
    )
  )
);

export const useStep = () => useStepStore((state) => state.step);
export const useStepActions = () => useStepStore((state) => state.actions);

export default useStepStore;
