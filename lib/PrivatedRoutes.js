"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuccessLogin = exports.currentUser = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const currentUser = (clientId) => {
    return JSON.parse(localStorage.getItem(clientId + "currentUser"));
};
exports.currentUser = currentUser;
const isSuccessLogin = (clientId) => {
    const isLogined = js_cookie_1.default.get(clientId + "_SSID-FINAL");
    const sessionId = js_cookie_1.default.get(clientId + "_Token-CODE");
    return isLogined && sessionId ? true : false;
};
exports.isSuccessLogin = isSuccessLogin;
const PrivatedRoutes = ({ clientId }) => {
    return (0, exports.isSuccessLogin)(clientId) ? react_1.default.createElement(react_router_dom_1.Outlet, null) : react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login" });
};
exports.default = PrivatedRoutes;
