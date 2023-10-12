
import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "shared/types";
import { getProfile } from ".";

const initialState: UserProfile = {
  id: "",
  name: "",
  picture: "",
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (_, action) => {
      return action.payload
    });
  },
});

export const { reducer: profileReducer, actions: profileActions } = slice;
