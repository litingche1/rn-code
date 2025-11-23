import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  email?: string;
}

interface AppState {
  // 计数器状态 (保留)
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;

  // 认证状态
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  // 计数器逻辑
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  // 认证逻辑
  token: null,
  user: null,
  isAuthenticated: false,
  login: (token, user) => set({ token, user, isAuthenticated: true }),
  logout: () => set({ token: null, user: null, isAuthenticated: false }),
}));
