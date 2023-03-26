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
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormInput_1 = __importDefault(require("../../components/form/form-input/FormInput"));
const IconButton_1 = __importDefault(require("../../components/icon-button/IconButton"));
const auth_service_api_1 = require("../../service-api/auth-service-api");
const LoginFormik_1 = __importDefault(require("./formik/LoginFormik"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const store_1 = require("../../redux/store");
const Login = ({ domain = "http://localhost:8888", clientId, toPage, imageBackground, className, classNameForm, classNameBg, }) => {
    // remove cookie when load to login page
    js_cookie_1.default.remove(clientId + "_SSID-FINAL");
    js_cookie_1.default.remove(clientId + "_SSID-LOGIN-CODE");
    js_cookie_1.default.remove(clientId + "_Token-CODE");
    const dispatch = (0, store_1.useAppDispatch)();
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: className, fluid: true },
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { className: classNameForm },
                react_1.default.createElement(react_bootstrap_1.Card, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement("h4", null, "\u0110\u0103ng nh\u1EADp"),
                        react_1.default.createElement("h5", null, "Nh\u1EADp th\u00F4ng tin \u0111\u1EC3 truy c\u1EADp \u0111\u1EBFn trang qu\u1EA3n l\u00FD"),
                        react_1.default.createElement("div", { className: "text-success" },
                            react_1.default.createElement("hr", null)),
                        react_1.default.createElement(formik_1.Formik, { initialValues: LoginFormik_1.default.initValue, onSubmit: (values, actions) => __awaiter(void 0, void 0, void 0, function* () {
                                actions.setSubmitting(true);
                                const fetch = yield (0, auth_service_api_1.login)(domain, values, clientId);
                                LoginFormik_1.default.handleSubmit(domain, clientId, toPage, fetch.data, actions, fetch.errors, dispatch);
                            }) }, ({ handleSubmit, handleChange, values, errors, isSubmitting, }) => (react_1.default.createElement(react_bootstrap_1.Form, { noValidate: true, onSubmit: handleSubmit },
                            react_1.default.createElement(FormInput_1.default, { className: "row mb-3", label: "T\u00EAn \u0111\u0103ng nh\u1EADp", placeholder: "Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp", name: "username", value: values.username, controlId: "validationFormik01", handleChange: handleChange, error: errors.username }),
                            react_1.default.createElement(FormInput_1.default, { className: "row mb-3", label: "M\u1EADt kh\u1EA9u", placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u", type: "password", name: "password", value: values.password, controlId: "validationFormik02", handleChange: handleChange, error: errors.password }),
                            react_1.default.createElement(IconButton_1.default, { tittle: "\u0110\u0103ng nh\u1EADp", disabled: isSubmitting }))))))),
            imageBackground && (react_1.default.createElement(react_bootstrap_1.Col, { className: classNameBg },
                react_1.default.createElement(react_bootstrap_1.Image, { fluid: true, src: imageBackground }))))));
};
exports.default = Login;
