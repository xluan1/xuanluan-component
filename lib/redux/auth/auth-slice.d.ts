import { PayloadAction } from "@reduxjs/toolkit";
import { JwtResponse } from "../../utils/types/authType";
export interface AuthState {
    username: string;
    orgId: string;
    expiredAt?: Date;
    isLogined: boolean;
}
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    setCurrentUser: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<JwtResponse>) => void;
    resetAuthState: () => AuthState;
}, "auth">;
export declare const resetAuthState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/resetAuthState">, setCurrentUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<JwtResponse, "auth/setCurrentUser">;
declare const _default: import("redux").Reducer<AuthState, import("redux").AnyAction>;
export default _default;
