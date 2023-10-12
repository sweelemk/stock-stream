export type AuthUser = {
  id: string;
  email: string;
}

export type CreateUser = {
  email: string;
  password: string;
}

export type UserProfile = {
  id: string;
  name?: string;
  email?: string;
  picture?: string;
}