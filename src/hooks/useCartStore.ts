import { atom } from "jotai"

interface CartStore {
  cartOpen: boolean
  cart: {
    id: number
    name: string
    price: number
    quantity: number
    image: number
  }[]
}

export const useCartStore = atom<CartStore>({
  cartOpen: false,
  cart: [],
})
