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
const auth_service_api_1 = require("../../../service-api/auth-service-api");
const base_rest_1 = require("../../../utils/rest-controller/base-rest");
const ProccessLogin_1 = __importDefault(require("./ProccessLogin"));
const js_cookie_1 = __importDefault(require("js-cookie"));
class LoginOTPFormik {
    constructor() {
        this.initValue = {
            otpCode: "",
        };
        this.handleSubmit = (domain, clientId, toPage, actions, sessionId, errors, dispatch) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            actions.resetForm({
                values: {
                    otpCode: "",
                },
            });
            if (errors) {
                actions.setFieldError("otpCode", (_a = errors === null || errors === void 0 ? void 0 : errors.data) === null || _a === void 0 ? void 0 : _a.otpCode);
                // clear error after 5s
                setTimeout(() => {
                    actions.resetForm({ errors: {} });
                }, 5000);
            }
            else {
                (0, ProccessLogin_1.default)(domain, clientId, toPage, sessionId, dispatch);
                js_cookie_1.default.remove("_SSID-OTP");
            }
            actions.setSubmitting(false);
        });
        this.resetOTPHanleClick = (domain, clientId, sessionId, setError, setIsLoading) => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d, _e;
            const request = { sessionId: sessionId };
            const fetch = yield (0, auth_service_api_1.resetOTP)(domain, request, clientId);
            if (fetch.data) {
                base_rest_1.Toast.fire({
                    icon: "success",
                    title: "Đã gửi mã OTP đến email của bạn!",
                });
            }
            else {
                if (typeof ((_b = fetch.errors) === null || _b === void 0 ? void 0 : _b.data) === "string") {
                    setError((_c = fetch.errors) === null || _c === void 0 ? void 0 : _c.data);
                }
                else {
                    setError((_e = (_d = fetch.errors) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.sessionId);
                }
                setTimeout(() => {
                    setError("");
                }, 4000);
            }
            setIsLoading(false);
        });
    }
}
exports.default = new LoginOTPFormik();
