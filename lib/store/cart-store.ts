"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products, type Product } from "@/lib/data/products";

export type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (productId: string, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

function findProduct(productId: string): Product | undefined {
  return products.find((p) => p.id === productId);
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find(
          (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
        );
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === item.productId && i.color === item.color && i.size === item.size
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (productId, color, size) => {
        set({
          items: get().items.filter(
            (i) => !(i.productId === productId && i.color === color && i.size === size)
          ),
        });
      },
      updateQuantity: (productId, color, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, color, size);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId && i.color === color && i.size === size ? { ...i, quantity } : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: "artesian-cart" }
  )
);

export function getCartTotals(items: CartItem[]) {
  let subtotal = 0;
  let count = 0;
  for (const item of items) {
    const product = findProduct(item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
      count += item.quantity;
    }
  }
  return { subtotal, count };
}
