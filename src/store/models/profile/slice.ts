import { createSlice } from "@reduxjs/toolkit";
import { User } from "shared/types/collections";
import { getUser } from ".";

const initialState: User = {
  id: "",
  username: "",
  full_name: "",
  avatar_url: "",
  email: "",
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { reducer: profileReducer, actions: profileActions } = slice;
