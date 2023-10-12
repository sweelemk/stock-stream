import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/api";
import { UserProfile } from "shared/types";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (userId: string) => {
    try {
      const { data: profiles, error } = await supabase
        .from("profile")
        .select("id, email, name, picture, country, city, province, bio")
        .eq("id", userId);
      const [profile] = profiles as UserProfile[];

      if (error) {
        throw new Error(error.message);
      }

      return profile;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
