import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      // Check if the item already exists in the cart using name
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        console.log("Plant is already added");
      } else {
        // If it's a new item, add it to the cart
        state.items.push(newItem);
      }
    },

    removeItem: (state, action) => {
     
    },

    increaseQuantity: (state, action) => {
      const increaseItem = action.payload;
      console.log("Increase item: " + increaseItem);
      const existingItem = state.items.find(item => item.name === increaseItem.name);
      
      existingItem.quantity = increaseItem.quantity + 1;
    },

    decreaseQuantity: (state, action) =>{
      const decreaseItem = action.payload;
      console.log("Decrease item: " + decreaseItem);
      const existingItem = state.items.find(item => item.name === decreaseItem.name);
      
      existingItem.quantity = decreaseItem.quantity - 1;
    }
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;