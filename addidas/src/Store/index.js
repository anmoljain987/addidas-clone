// // import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   isAuth: false,
//   token: "",
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.isAuth = true;
//       state.token = action.payload;
//     },
//     logout(state) {
//       state.isAuth = false;
//       state.token = "";
//     },
//   },
// });
// const userSlice = createSlice({
//   name: "user",
//   initialState: { username: "" },
//   reducers: {
//     userUpdate(state, action) {
//       state.username = action.payload;
//     },
//   },
// });
// export const store = configureStore({
//   reducer: { auth: authSlice.reducer, user: userSlice.reducer },
// });
// export const authActions = authSlice.actions;
// export const userActions = userSlice.actions;
