import { RootState } from "../store";
import { AuthState } from "./auth-slice";

export const selectAuthState = (state: RootState): AuthState => state.auth;
export const selectUserOrgId = (state: RootState): string =>
  selectAuthState(state).orgId;
export const selectUsername = (state: RootState): string =>
  selectAuthState(state).username;
