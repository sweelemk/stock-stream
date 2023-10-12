import { supabase } from "shared/api";
import { CreateUser } from "shared/types";

export const signUp = async (user: CreateUser) => {
  return await supabase.auth.signUp(
    {
      email: user.email,
      password: user.password,
    }
  );
};

export const signIn = async (user: CreateUser) => {
  return await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
};


export const signOut = async () => {
  return await supabase.auth.signOut();
};