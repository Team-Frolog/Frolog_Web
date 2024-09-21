import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface Actions {
  setEmailCodeToken: (value: string | null) => void;
  setEmailVerifiedToken: (value: string | null) => void;
  resetToken: () => void;
  setEndTime: (time: number | null) => void;
}

interface AuthStore {
  emailCodeToken: string | null;
  emailVerifiedToken: string | null;
  expiredTime: number | null;
  actions: Actions;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        emailCodeToken: null,
        emailVerifiedToken: null,
        expiredTime: null,
        actions: {
          setEmailCodeToken: (value: string | null) =>
            set(() => ({ emailCodeToken: value })),
          setEmailVerifiedToken: (value: string | null) =>
            set(() => ({ emailVerifiedToken: value })),
          resetToken: () =>
            set(() => ({
              emailCodeToken: null,
              emailVerifiedToken: null,
            })),
          setEndTime: (time: number | null) =>
            set(() => ({ expiredTime: time })),
        },
      }),
      {
        name: 'AuthStore',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          emailCodeToken: state.emailCodeToken,
          emailVerifiedToken: state.emailVerifiedToken,
          expiredTime: state.expiredTime,
          setEmailCodeToken: state.actions.setEmailCodeToken,
          setEmailVerifiedToken: state.actions.setEmailVerifiedToken,
          resetToken: state.actions.resetToken,
          setEndTime: state.actions.setEndTime,
        }),
      }
    )
  )
);

export const useCodeToken = () => useAuthStore((state) => state.emailCodeToken);
export const useVerifyToken = () =>
  useAuthStore((state) => state.emailVerifiedToken);
export const useCodeTime = () => useAuthStore((state) => state.expiredTime);
export const useAuthActions = () => useAuthStore((state) => state.actions);

export default useAuthStore;
