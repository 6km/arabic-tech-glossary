import { create } from 'zustand'

interface AppState {
  query: string | null
  page: number
  setQuery: (query: AppState['query']) => void
  setPage: (page: number) => void
}

const useStore = create<AppState>((set) => ({
  query: null,
  page: 1,
  setQuery: (newQuery) => set(() => ({ page: 1, query: newQuery?.trim() ? newQuery : null })),
  setPage: (newPage) => set(() => ({ page: newPage })),
}))

export default useStore
