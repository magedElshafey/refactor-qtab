import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  openForm: false,
  isLogin: JSON.parse(window.localStorage.getItem("auth")) || false,
  userToken: JSON.parse(window.localStorage.getItem("userToken")) || "",
  userId: JSON.parse(window.localStorage.getItem("userId")) || null,
};
const authState = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    openForm: (state) => {
      state.openForm = true;
    },
    closeForm: (state) => {
      state.openForm = false;
    },
    dispatchLogout: (state) => {
      state.isLogin = false;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
      window.localStorage.removeItem("userToken");
      window.localStorage.removeItem("userId");
    },
    dispatchLogin: (state) => {
      state.isLogin = true;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
    },
    addToken: (state, action) => {
      state.userToken = action.payload;
      window.localStorage.setItem("userToken", JSON.stringify(state.userToken));
    },
    addUserId: (state, action) => {
      state.userId = action.payload;
      window.localStorage.setItem("userId", JSON.stringify(state.userId));
    },
  },
});
export const {
  dispatchLogout,
  dispatchLogin,
  openForm,
  closeForm,
  addToken,
  addUserId,
} = authState.actions;
export default authState.reducer;
