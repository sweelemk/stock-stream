import { AuthUser } from "shared/types";

export type InitialState = {
  isAuthenticated: boolean;
  user: AuthUser | null;
}