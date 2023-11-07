import { supabase } from "shared/api";
import { SignInWithPassword, SignUpWithPassword } from "shared/types";

export const signUp = async (user: SignUpWithPassword) => {
  return await supabase.auth.signUp(user);
};

export const signIn = async (user: SignInWithPassword) => {
  return await supabase.auth.signInWithPassword(user);
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
