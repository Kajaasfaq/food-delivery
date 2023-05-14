import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items : [],
    },
    reducers: {
        addItem: (state , action) => { 
          state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        removeCart: (state, action) => {
            state.items = state.items.filter((item,index) => index !== action.payload);
          }     
    }
})

export const {addItem , clearCart , removeCart } = cartSlice.actions

export default cartSlice.reducer