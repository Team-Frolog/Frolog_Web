import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Session {
  userId: string | undefined;
  accessToken: string | undefined;
  defaultWellId: string | null;
}

interface SessionStore {
  userId: string | undefined;
  accessToken: string | undefined;
  defaultWellId: string | null;
  setSession: (session: Session) => void;
}

const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      userId: undefined,
      accessToken: undefined,
      defaultWellId: null,
      setSession: (session: Session) =>
        set({
          userId: session.userId,
          accessToken: session.accessToken,
          defaultWellId: session.defaultWellId,
        }),
    }),
    {
      name: 'SessionStore',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        userId: state.userId,
        accessToken: state.accessToken,
        defaultWellId: state.defaultWellId,
        setSession: state.setSession,
      }),
    }
  )
);

export const useUserId = () => useSessionStore((state) => state.userId);
export const useAccessToken = () =>
  useSessionStore((state) => state.accessToken);
export const useDefaultWell = () =>
  useSessionStore((state) => state.defaultWellId);

export default useSessionStore;
