"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGOUT_URL = exports.CURRENT_USER_TOKEN_URL = exports.CHECK_PIN_URL = exports.CHECK_OTP_URL = exports.RESET_OTP_URL = exports.LOGIN_URL = void 0;
const AUTH_SERVICE_URL = "/auth-service/auth/1.0.0/";
// not login
exports.LOGIN_URL = AUTH_SERVICE_URL + "login";
exports.RESET_OTP_URL = AUTH_SERVICE_URL + "reset-otp/";
exports.CHECK_OTP_URL = AUTH_SERVICE_URL + "check-otp/";
exports.CHECK_PIN_URL = AUTH_SERVICE_URL + "check-pin/";
exports.CURRENT_USER_TOKEN_URL = AUTH_SERVICE_URL + "get_current_user_token/";
exports.LOGOUT_URL = AUTH_SERVICE_URL + "logout/";
