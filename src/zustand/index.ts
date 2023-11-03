import { create } from 'zustand'

export const useLangauje = create((set) => ({
  languaje: 'es',
  //@ts-ignore
  setLanguaje: () =>
    set((state) => ({ languaje: state.bears === 'es' ? 'en' : 'es' }))
}))
