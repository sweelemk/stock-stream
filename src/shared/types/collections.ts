
import { Database } from "./supabase";

type Tables = Database['public']['Tables']

export type UserType = Tables["users"]["Row"];
export type RoleType = Tables["roles"]["Row"];

export type User = Omit<UserType, 'role_id' | 'updated_at'>;
