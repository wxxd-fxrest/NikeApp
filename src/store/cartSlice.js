import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItems = state.items.find((item) => item.product._id === newProduct._id);
            if(cartItems) {
                cartItems.quantity += 1;
            } else {
                state.items.push({ product: newProduct, quantity:1 });
            }
        },
        changeQuantity: (state, action) => {
            const {productID, amount} = action.payload;
            const cartItem = state.items.find((item) => item.product._id === productID);
            if(cartItem) {
                cartItem.quantity += amount;
            }
            if(cartItem.quantity <= 0) {
                state.items = state.items.filter((item) => item !== cartItem);
            }
        },
        deleteProduct: (state, action) => {
            const {productID} = action.payload;
            const cartItem = state.items.find((item) => item.product._id === productID);
            state.items = state.items.filter((item) => item !== cartItem);
        },
    },
});

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity, 
    0
);

const cartSelector = (state) => state.cart;
export const selectDeliceryPrice = createSelector(
    cartSelector,
    selectSubtotal, 
    (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliceryPrice,
    (subtotal, delivery) => subtotal + delivery
);