"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentUser = exports.resetAuthState = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    username: "",
    orgId: "",
    isLogined: false,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.orgId = action.payload.orgId;
            state.username = action.payload.username;
            state.expiredAt = action.payload.expiredAt;
            state.isLogined = true;
        },
        resetAuthState: () => initialState,
    },
});
_a = exports.authSlice.actions, exports.resetAuthState = _a.resetAuthState, exports.setCurrentUser = _a.setCurrentUser;
exports.default = exports.authSlice.reducer;
