"use client"

import * as React from "react"

import type { CartItem } from "@/lib/types"

const STORAGE_KEY = "artesian-cart"

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; productId: string; size: string; color: string }
  | {
      type: "UPDATE_QUANTITY"
      productId: string
      size: string
      color: string
      quantity: number
    }
  | { type: "CLEAR_CART" }

const isSameLine = (
  item: CartItem,
  productId: string,
  size: string,
  color: string
) => item.productId === productId && item.size === size && item.color === color

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items }

    case "ADD_ITEM": {
      const existing = state.items.find((item) =>
        isSameLine(item, action.item.productId, action.item.size, action.item.color)
      )

      if (existing) {
        return {
          items: state.items.map((item) =>
            isSameLine(item, action.item.productId, action.item.size, action.item.color)
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item
          ),
        }
      }

      return { items: [...state.items, action.item] }
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => !isSameLine(item, action.productId, action.size, action.color)
        ),
      }

    case "UPDATE_QUANTITY": {
      if (action.quantity < 1) {
        return {
          items: state.items.filter(
            (item) => !isSameLine(item, action.productId, action.size, action.color)
          ),
        }
      }

      return {
        items: state.items.map((item) =>
          isSameLine(item, action.productId, action.size, action.color)
            ? { ...item, quantity: action.quantity }
            : item
        ),
      }
    }

    case "CLEAR_CART":
      return { items: [] }

    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  isHydrated: boolean
  isDrawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number
  ) => void
  clearCart: () => void
}

const CartContext = React.createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(cartReducer, { items: [] })
  const [isHydrated, setIsHydrated] = React.useState(false)
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          dispatch({ type: "HYDRATE", items: parsed as CartItem[] })
        }
      }
    } catch {
      // Ignore malformed or unavailable storage.
    }
    setIsHydrated(true)
  }, [])

  React.useEffect(() => {
    if (!isHydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      // Storage may be unavailable (private mode / quota).
    }
  }, [state.items, isHydrated])

  const addItem = React.useCallback((item: CartItem) => {
    dispatch({ type: "ADD_ITEM", item })
  }, [])

  const removeItem = React.useCallback(
    (productId: string, size: string, color: string) => {
      dispatch({ type: "REMOVE_ITEM", productId, size, color })
    },
    []
  )

  const updateQuantity = React.useCallback(
    (productId: string, size: string, color: string, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", productId, size, color, quantity })
    },
    []
  )

  const clearCart = React.useCallback(() => {
    dispatch({ type: "CLEAR_CART" })
  }, [])

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const value = React.useMemo<CartContextValue>(
    () => ({
      items: state.items,
      itemCount,
      subtotal,
      isHydrated,
      isDrawerOpen,
      setDrawerOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      state.items,
      itemCount,
      subtotal,
      isHydrated,
      isDrawerOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
