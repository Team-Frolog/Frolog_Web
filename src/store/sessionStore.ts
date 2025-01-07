import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Session {
  userId: string | undefined;
  accessToken: string | undefined;
  defaultWellId: string | null;
}

interface SessionStore {
  /** 현재 로그인 한 유저 id */
  userId: string | undefined;
  /** 유저의 access token */
  accessToken: string | undefined;
  /** 유저의 첫 우물(기본 우물) id */
  defaultWellId: string | null;
  setSession: (session: Session) => void;
}

/** 세션 유지를 위한 state store */
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
