import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log('Adding item:', newItem);

      // Check if the item already exists in the cart using name
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push(newItem);
      }
    },


    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;