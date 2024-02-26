import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        //empty store/cart
        items: [],
    },
    reducers: {
        //reducer function
        addToCart: (state, action) => {
            state.items.push(action.payload); // push item
        },
        removeFromCart: (state) => {
            // state.items = state.items.filter((item) => item.card.info.id !== action.payload);
            state.items.pop(); // remove item
        },
        clearCart: (state) => {
            state.items.length = 0; //originalState = []

            //return {items:[]}
        },
    },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
