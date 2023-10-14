import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/api";
import { User } from "shared/types";

export const getUser = createAsyncThunk(
  "profile/getUser",
  async (userId: string) => {
    try {
      const { data: users, error } = await supabase
        .from("users")
        .select(
          `
          id, 
          username, 
          full_name, 
          avatar_url, 
          email,
          roles(role)
        `
        )
        .eq("id", userId);
      const [user] = users as User[];

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
