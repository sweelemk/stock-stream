import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/api";

export const getUser = createAsyncThunk(
  "profile/getUser",
  async (userId: string) => {
    try {
      const { data: user, error } = await supabase
        .from("users")
        .select(
          `
          id, 
          username, 
          full_name, 
          avatar_url, 
          email,
          roles (role)
        `
        )
        .eq("id", userId)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
