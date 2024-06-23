import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface Actions {
  setEmailCodeToken: (value: string | null) => void;
  setEmailVerifiedToken: (value: string | null) => void;
  resetToken: () => void;
  codeTimePass: () => void;
  resetCodeTime: () => void;
}

interface AuthStore {
  emailCodeToken: string | null;
  emailVerifiedToken: string | null;
  expiredTime: number;
  actions: Actions;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        emailCodeToken: null,
        emailVerifiedToken: null,
        expiredTime: 3 * 60 * 1000,
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
          codeTimePass: () =>
            set((state) => ({
              expiredTime: state.expiredTime - 1000,
            })),
          resetCodeTime: () =>
            set(() => ({
              expiredTime: 3 * 60 * 1000,
            })),
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
          codeTimePass: state.actions.codeTimePass,
          resetCodeTime: state.actions.resetCodeTime,
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
