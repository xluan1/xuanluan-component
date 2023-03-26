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
const ProccessLogin_1 = __importDefault(require("./ProccessLogin"));
class LoginPINFormik {
    constructor() {
        this.initValue = {
            pinCode: "",
        };
        this.handleSubmit = (domain, clientId, toPage, sessionId, actions, errors, dispatch) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            actions.resetForm({
                values: {
                    pinCode: "",
                },
            });
            if (errors) {
                actions.setFieldError("pinCode", (_a = errors === null || errors === void 0 ? void 0 : errors.data) === null || _a === void 0 ? void 0 : _a.pinCode);
                // clear error after 5s
                setTimeout(() => {
                    actions.resetForm({ errors: {} });
                }, 5000);
            }
            else {
                (0, ProccessLogin_1.default)(domain, clientId, toPage, sessionId, dispatch);
            }
            actions.setSubmitting(false);
        });
    }
}
exports.default = new LoginPINFormik();
