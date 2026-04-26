import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const rawData = JSON.parse(localStorage.getItem('auth-storage') || 'false')

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: rawData === true,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    },
  ),
)
