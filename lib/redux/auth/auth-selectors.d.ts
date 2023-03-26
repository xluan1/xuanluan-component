import { RootState } from "../store";
import { AuthState } from "./auth-slice";
export declare const selectAuthState: (state: RootState) => AuthState;
export declare const selectUserOrgId: (state: RootState) => string;
export declare const selectUsername: (state: RootState) => string;
