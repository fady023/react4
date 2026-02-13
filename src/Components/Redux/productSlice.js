import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],total : 0
};

localStorage.getItem("cart") !== null ?
    initialState.items = JSON.parse(localStorage.getItem("cart")) :
    initialState.items = [];

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removefromcart: (state, action) => {

            let itemid = action.payload.id;
            let removed = false;

            state.items = state.items.filter((item) => {

                if (!removed && item.id === itemid) {
                    removed = true;
                    return false;
                }


                return true;
            });
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        calctotal: (state) => {

            let total = 0;
            state.items.forEach((item) => {
            total += item.price;
            });

            state.total = total;
        }

    }
})