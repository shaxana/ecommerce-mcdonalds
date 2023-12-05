import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    isLogin: false,
    wishlist:[],
    cart:[]
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLogin = false;
    },
    addToFavorite: (state, action) => {
        console.log("oldu");
      state.wishlist.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    addToCart: (state,action) =>{
      if (state.cart.find((item)=> item.id === action.payload)){
        cart.count +=1
      }
      else{
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
});
export const { loginSuccess, logout, addToFavorite,removeFavorite, addToCart, removeFromCart, clearCart } = loginSlice.actions;
export default loginSlice.reducer;
