import { atom } from "jotai"

interface CartStore {
  cartOpen: boolean
  cart: { name: string; price: number }[]
}

export const useCartStore = atom<CartStore>({
  cartOpen: false,
  cart: [],
})
