import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JwtResponse } from "../../utils/types/authType";

export interface AuthState {
  username: string;
  orgId: string;
  expiredAt?: Date;
  isLogined: boolean;
}

const initialState: AuthState = {
  username: "",
  orgId: "",
  isLogined: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<JwtResponse>) => {
      state.orgId = action.payload.orgId;
      state.username = action.payload.username;
      state.expiredAt = action.payload.expiredAt;
      state.isLogined = true;
    },
    resetAuthState: () => initialState,
  },
});

export const { resetAuthState, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
