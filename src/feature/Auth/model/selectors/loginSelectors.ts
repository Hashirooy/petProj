import type { RootState } from "../../../../app/providers/storeProviders/store";

export const getLoginUsername = (state: RootState) => state.loginSchema.username;
export const getLoginPassword = (state: RootState) => state.loginSchema.password;