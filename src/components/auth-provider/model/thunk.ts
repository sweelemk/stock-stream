import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signOut, signUp } from "../api";
import { SignInWithPassword, SignUpWithPassword } from "shared/types";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (credentials: SignInWithPassword) => {
    try {
      const {
        data: { user },
        error,
      } = await signIn(credentials);

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async (credentials: SignUpWithPassword) => {
    try {
      const {
        data: { user },
        error,
      } = await signUp(credentials);

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const authLogout = createAsyncThunk("auth/logout", async () => {
  try {
    const { error } = await signOut();

    if (error) {
      throw new Error(error.message);
    }

    return null;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
