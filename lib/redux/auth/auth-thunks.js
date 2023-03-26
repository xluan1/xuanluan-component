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
exports.getUserToken = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const js_cookie_1 = __importDefault(require("js-cookie"));
const auth_service_api_1 = require("../../service-api/auth-service-api");
const base_rest_1 = require("../../utils/rest-controller/base-rest");
const auth_slice_1 = require("./auth-slice");
exports.getUserToken = (0, toolkit_1.createAsyncThunk)("auth/user_info", (stepFinal, thunkApi) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, auth_service_api_1.getCurrentUserToken)(stepFinal.domain, stepFinal.sessionId, stepFinal.clientId).then((response) => {
        var _a, _b, _c, _d;
        if (response.errors) {
            base_rest_1.Toast.fire({ icon: "error", title: (_a = response.errors) === null || _a === void 0 ? void 0 : _a.data });
        }
        else {
            base_rest_1.Toast.fire({ icon: "success", title: "Đăng nhập thành công" });
            const jwtResponse = {
                orgId: (_b = response.data) === null || _b === void 0 ? void 0 : _b.orgId,
                username: (_c = response.data) === null || _c === void 0 ? void 0 : _c.username,
                expiredAt: (_d = response.data) === null || _d === void 0 ? void 0 : _d.expiredAt,
            };
            js_cookie_1.default.set(stepFinal.clientId + "_Token-CODE", stepFinal.sessionId);
            localStorage.setItem(stepFinal.clientId + "currentUser", JSON.stringify(jwtResponse));
            thunkApi.dispatch((0, auth_slice_1.setCurrentUser)(jwtResponse));
            window.location.href = stepFinal.toPage
                ? stepFinal.toPage
                : "/dashboard";
        }
    });
}));
