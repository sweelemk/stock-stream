export type InitialState = {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

export type AuthUser = {
  id: string;
  email: string;
}