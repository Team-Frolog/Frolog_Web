import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface Actions {
  resetJoinStep: () => void;
  resetFindStep: () => void;
  resetTestStep: () => void;
  goNextJoinStep: () => void;
  goNextFindStep: () => void;
  goNextTestStep: () => void;
}

interface StepStore {
  joinStep: number;
  findStep: number;
  testStep: number;
  actions: Actions;
}

const useStepStore = create<StepStore>()(
  devtools(
    persist(
      (set) => ({
        joinStep: 1,
        findStep: 1,
        testStep: 1,
        actions: {
          resetJoinStep: () =>
            set(() => ({
              joinStep: 1,
            })),
          resetFindStep: () =>
            set(() => ({
              findStep: 1,
            })),
          resetTestStep: () =>
            set(() => ({
              testStep: 1,
            })),
          goNextJoinStep: () =>
            set((state) => ({
              joinStep: state.joinStep + 1,
            })),
          goNextFindStep: () =>
            set((state) => ({
              findStep: state.findStep + 1,
            })),
          goNextTestStep: () =>
            set((state) => ({
              testStep: state.testStep + 1,
            })),
        },
      }),
      {
        name: 'StepStore',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          joinStep: state.joinStep,
          findStep: state.findStep,
          testStep: state.testStep,
          resetJoinStep: state.actions.resetJoinStep,
          resetFindStep: state.actions.resetFindStep,
          resetTestStep: state.actions.resetTestStep,
          goNextJoinStep: state.actions.goNextJoinStep,
          goNextFindStep: state.actions.goNextFindStep,
          goNextTestStep: state.actions.goNextTestStep,
        }),
      }
    )
  )
);

export const useJoinStep = () => useStepStore((state) => state.joinStep);
export const useFindStep = () => useStepStore((state) => state.findStep);
export const useTestStep = () => useStepStore((state) => state.testStep);
export const useSteps = () =>
  useStepStore((state) => ({
    joinStep: state.joinStep,
    findStep: state.findStep,
    testStep: state.testStep,
  }));
export const useStepActions = () => useStepStore((state) => state.actions);

export default useStepStore;
