export type AuthUser = {
  id: string;
  email: string;
}

export type CreateUser = {
  email: string;
  password: string;
}

export type Roles = string[];

export type User = {
  id: string;
  username: string;
  full_name: string;
  email: string;
  avatar_url: string;
}