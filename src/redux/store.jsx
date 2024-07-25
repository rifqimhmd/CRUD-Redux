import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// console.log("on create store: ", store.getState());

// store.subscribe(() => {
//   console.log("on update store: ", store.getState());
// });

export default store;
