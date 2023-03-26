"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.resetOTP = exports.getCurrentUserToken = exports.loginPIN = exports.loginOTP = exports.login = void 0;
const authUrls_1 = require("../service-api/urls/authUrls");
const base_rest_1 = __importDefault(require("../utils/rest-controller/base-rest"));
const login = (domain, request, clientId) => {
    return base_rest_1.default.postRestController(domain + authUrls_1.LOGIN_URL, request, clientId);
};
exports.login = login;
const loginOTP = (domain, sessionId, request, clientId) => {
    return base_rest_1.default.postRestController(domain + authUrls_1.CHECK_OTP_URL + sessionId, request, clientId);
};
exports.loginOTP = loginOTP;
const loginPIN = (domain, sessionId, request, clientId) => {
    return base_rest_1.default.postRestController(domain + authUrls_1.CHECK_PIN_URL + sessionId, request, clientId);
};
exports.loginPIN = loginPIN;
const getCurrentUserToken = (domain, sessiondId, clientId) => {
    return base_rest_1.default.getRestController(domain + authUrls_1.CURRENT_USER_TOKEN_URL + sessiondId, clientId);
};
exports.getCurrentUserToken = getCurrentUserToken;
const resetOTP = (domain, request, clientId) => {
    return base_rest_1.default.postRestController(domain + authUrls_1.RESET_OTP_URL, request, clientId);
};
exports.resetOTP = resetOTP;
const logout = (domain, clientId, sessionId) => {
    return base_rest_1.default.deleteRestController(domain + authUrls_1.LOGOUT_URL + sessionId, clientId);
};
exports.logout = logout;
