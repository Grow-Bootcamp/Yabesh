import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// define the structure of one cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// define the structure of the cart state
interface CartState {
  items: CartItem[];
}

// initial cart state
const initialState: CartState = {
  items: [],
};

// create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // add a product to the cart
    addToCart(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // remove a product from the cart
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload,
      );
    },

    // change product quantity
    changeQuantity(state, action: PayloadAction<{ id: number; quantity: number}>) {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },

    // empty the entire cart
    clearCart(state) {
      state.items = [];
    },
  },
});

// export automatically generated actions
export const {
  addToCart,
  removeFromCart,
  changeQuantity,
  clearCart
} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;