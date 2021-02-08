import create from "zustand"
import { devtools } from "zustand/middleware"

type MenuStore = {
  open: boolean
  actions: {
    toggle: () => void
    open: () => void
    close: () => void
  }
}

const initialState: Omit<MenuStore, "actions"> = {
  open: false,
}

export const useMenuStore = create<MenuStore>(
  devtools(
    set => ({
      ...initialState,
      actions: {
        toggle: () => set(state => ({ open: !state.open })),
        open: () => set(() => ({ open: true })),
        close: () => set(() => ({ open: false })),
      },
    }),
    "MenuStore"
  )
)
