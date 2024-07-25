import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: userList,
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    updateData: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.data.find((user) => user.id == id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    deleteData: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((user) => user.id != id);
    },
  },
});

export const { addData, updateData, deleteData } = userSlice.actions;
export default userSlice.reducer;
