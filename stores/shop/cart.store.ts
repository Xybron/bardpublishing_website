import { defineStore } from 'pinia'
import type { CartItem, Product } from './types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    discount: 5.00,
    taxRate: 0.065,
    subtotal : 0,
    tax : 0,
  }),

  getters: {
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    
    subtotal: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    
    tax: (state): number => parseFloat((state.subtotal * state.taxRate).toFixed(2)),
    
    total: (state): number => parseFloat((state.subtotal - state.discount + state.tax).toFixed(2))
  },

  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeItem(productId: string) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(productId: string, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
        }
      }
    },

    clearCart() {
      this.items = []
    }
  }
})