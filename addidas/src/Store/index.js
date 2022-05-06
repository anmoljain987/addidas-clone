import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = "";
    },
  },
});

export const store = configureStore({
  reducer: authSlice.reducer,
});
export const authActions = authSlice.actions;
