"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const auth_thunks_1 = require("../../../redux/auth/auth-thunks");
const auth_service_api_1 = require("../../../service-api/auth-service-api");
const ProccessLogin = (domain, clientId, toPage, sessionId, dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    const cookieName = clientId + "_SSID-LOGIN-CODE";
    if (sessionId.startsWith("OTP")) {
        //redirect to check-otp page to check otp code
        // 45s= (1 / 86400) * 45
        js_cookie_1.default.set(clientId + "_SSID-OTP", "actived");
        js_cookie_1.default.set(cookieName, sessionId);
        window.location.href = "/check-otp";
    }
    else if (sessionId.startsWith("PIN")) {
        //redirect to check-pin page to check pin code
        js_cookie_1.default.set(clientId + "_SSID-PIN", "actived");
        js_cookie_1.default.set(cookieName, sessionId);
        window.location.href = "/check-pin";
    }
    else if (sessionId.startsWith("FINAL")) {
        //redirect to dashboard page
        js_cookie_1.default.set(clientId + "_SSID-FINAL", "actived");
        // finish login => set Jwt Token to cookie
        const stepFinal = {
            clientId: clientId,
            sessionId: sessionId,
            toPage: toPage,
            domain: domain,
        };
        dispatch((0, auth_thunks_1.getUserToken)(stepFinal));
    }
});
exports.default = ProccessLogin;
const Logout = (domain, clientId, toPage) => {
    const sessionId = js_cookie_1.default.get(clientId + "_Token-CODE");
    js_cookie_1.default.remove(clientId + "_SSID-FINAL");
    js_cookie_1.default.remove(clientId + "_SSID-LOGIN-CODE");
    js_cookie_1.default.remove(clientId + "_Token-CODE");
    localStorage.removeItem(clientId + "currentUser");
    sessionId && (0, auth_service_api_1.logout)(domain, clientId, sessionId);
    window.location.href = toPage;
};
exports.Logout = Logout;
