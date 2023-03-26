"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const formik_1 = require("formik");
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormInput_1 = __importDefault(require("../../components/form/form-input/FormInput"));
const IconButton_1 = __importDefault(require("../../components/icon-button/IconButton"));
const store_1 = require("../../redux/store");
const auth_service_api_1 = require("../../service-api/auth-service-api");
const LoginOTPFormik_1 = __importDefault(require("./formik/LoginOTPFormik"));
const LoginOTP = ({ domain = "http://localhost:8888", clientId, toPage, imageBackground, className, classNameForm, classNameBg, }) => {
    const sessionId = js_cookie_1.default.get(clientId + "_SSID-LOGIN-CODE");
    const ssidOtp = js_cookie_1.default.get(clientId + "_SSID-OTP");
    (0, react_1.useEffect)(() => {
        if (!sessionId || !ssidOtp) {
            js_cookie_1.default.remove(clientId + "_SSID-OTP");
            window.location.href = "/login";
        }
    }, [sessionId, ssidOtp]);
    const dispatch = (0, store_1.useAppDispatch)();
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)("");
    const resetOTPClick = () => {
        setIsLoading(true);
        sessionId &&
            LoginOTPFormik_1.default.resetOTPHanleClick(domain, clientId, sessionId, setError, setIsLoading);
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: className, fluid: true },
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { className: classNameForm },
                react_1.default.createElement(react_bootstrap_1.Card, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement("h4", null, "Ki\u1EC3m tra m\u00E3 OTP"),
                        react_1.default.createElement("h5", null, "H\u00E3y ki\u1EC3m tra email c\u1EE7a b\u1EA1n, \u0111\u1EC3 l\u1EA5y m\u00E3 OTP!"),
                        react_1.default.createElement("div", { className: "text-success" },
                            react_1.default.createElement("hr", null)),
                        react_1.default.createElement(formik_1.Formik, { initialValues: LoginOTPFormik_1.default.initValue, onSubmit: (values, actions) => __awaiter(void 0, void 0, void 0, function* () {
                                actions.setSubmitting(true);
                                const fetch = yield (0, auth_service_api_1.loginOTP)(domain, sessionId, values, clientId);
                                LoginOTPFormik_1.default.handleSubmit(domain, clientId, toPage, actions, fetch.data, fetch.errors, dispatch);
                            }) }, ({ handleSubmit, handleChange, values, errors, isSubmitting, }) => (react_1.default.createElement(react_bootstrap_1.Form, { noValidate: true, onSubmit: handleSubmit },
                            react_1.default.createElement("div", { className: "text-danger mb-4" }, error),
                            react_1.default.createElement(FormInput_1.default, { label: "M\u00E3 OTP", placeholder: "Nh\u1EADp m\u00E3 OTP", name: "otpCode", value: values.otpCode, handleChange: handleChange, error: errors.otpCode }),
                            react_1.default.createElement(IconButton_1.default, { tittle: "G\u1EEDi l\u1EA1i m\u00E3", type: "button", onClick: resetOTPClick, disabled: isLoading || isSubmitting ? true : false }),
                            react_1.default.createElement(IconButton_1.default, { tittle: "Ti\u1EBFp theo", disabled: isLoading || isSubmitting ? true : false }))))))),
            imageBackground && (react_1.default.createElement(react_bootstrap_1.Col, { className: classNameBg },
                react_1.default.createElement(react_bootstrap_1.Image, { fluid: true, src: imageBackground }))))));
};
exports.default = LoginOTP;
