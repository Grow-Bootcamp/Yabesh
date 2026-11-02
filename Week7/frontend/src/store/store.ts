import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

// persist cart data after refreshing

// Retrieve saved cart data
const savedCart = localStorage.getItem('cart');

// Load saved data into Redux
const preloadedState = savedCart 
  ? { cart: JSON.parse(savedCart) }
  : undefined;

export const store = configureStore({   // configureStore() creates the central Redux store that holds the application's state.
  reducer: {    // reducer tells Redux which slices of state the store should manage.
    cart: cartReducer,    // cart: cartReducer registers our cart slice. We'll access its state through state.cart.
  },

  preloadedState,
});

// automatically infer TypeScript values
export type RootState = ReturnType<typeof store.getState>;    // RootState automatically represents the complete Redux state structure.
export type AppDispatch = typeof store.dispatch;    // AppDispatch represents the type of the store's dispatch function.

// save cart whenever Redux state changes
store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem('cart', JSON.stringify(state.cart));
});