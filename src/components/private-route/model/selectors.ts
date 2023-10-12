import { RootStore } from "features/store";

export const isAuthenticated = (state: RootStore) => state.auth.isAuthenticated;