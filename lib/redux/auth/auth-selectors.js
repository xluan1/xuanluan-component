"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUsername = exports.selectUserOrgId = exports.selectAuthState = void 0;
const selectAuthState = (state) => state.auth;
exports.selectAuthState = selectAuthState;
const selectUserOrgId = (state) => (0, exports.selectAuthState)(state).orgId;
exports.selectUserOrgId = selectUserOrgId;
const selectUsername = (state) => (0, exports.selectAuthState)(state).username;
exports.selectUsername = selectUsername;
