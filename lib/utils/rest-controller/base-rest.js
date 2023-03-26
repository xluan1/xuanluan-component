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
exports.Toast = exports.tokenHeader = void 0;
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const BaseFetch_1 = __importDefault(require("service-sdk/lib/fetch/BaseFetch"));
const index_1 = __importDefault(require("service-sdk/lib/utils/index"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const tokenHeader = (clientId) => {
    return js_cookie_1.default.get(clientId + "_Token-CODE");
};
exports.tokenHeader = tokenHeader;
exports.Toast = sweetalert2_1.default.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});
const processException = (response) => {
    if (typeof (response === null || response === void 0 ? void 0 : response.data) === "string") {
        exports.Toast.fire({ icon: "error", title: response === null || response === void 0 ? void 0 : response.data });
    }
    else {
        exports.Toast.fire({ icon: "error", title: response === null || response === void 0 ? void 0 : response.message });
    }
};
class RestController {
    constructor() {
        this.getRestController = (path, clientId, csrftoken, isAlert = true) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const fetch = new BaseFetch_1.default();
            try {
                const response = yield index_1.default.get(path, clientId, csrftoken);
                fetch.data = response === null || response === void 0 ? void 0 : response.data;
                isAlert && exports.Toast.fire({ icon: "success", title: fetch.data.message });
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    const err = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
                    fetch.errors = err;
                    isAlert && processException(fetch.errors);
                }
            }
            return fetch;
        });
        this.postRestController = (path, body, clientId, csrftoken, isAlert = true, contentType) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            const fetch = new BaseFetch_1.default();
            try {
                const response = yield index_1.default.post(path, body, clientId, csrftoken, contentType);
                fetch.data = response === null || response === void 0 ? void 0 : response.data;
                isAlert && exports.Toast.fire({ icon: "success", title: fetch.data.message });
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    const err = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data;
                    fetch.errors = err;
                    isAlert && processException(fetch.errors);
                }
            }
            return fetch;
        });
        this.putRestController = (path, body, clientId, csrftoken, isAlert = true, contentType) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            const fetch = new BaseFetch_1.default();
            try {
                const response = yield index_1.default.put(path, body, clientId, csrftoken, contentType);
                fetch.data = response.data;
                isAlert && exports.Toast.fire({ icon: "success", title: fetch.data.message });
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    const err = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data;
                    fetch.errors = err;
                    isAlert && processException(fetch.errors);
                }
            }
            return fetch;
        });
        this.deleteRestController = (path, clientId, csrftoken, isAlert = true) => __awaiter(this, void 0, void 0, function* () {
            var _d;
            const fetch = new BaseFetch_1.default();
            try {
                const response = yield index_1.default.delete(path, clientId, csrftoken);
                fetch.data = response === null || response === void 0 ? void 0 : response.data;
                isAlert && exports.Toast.fire({ icon: "success", title: fetch.data.message });
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    const err = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data;
                    fetch.errors = err;
                    isAlert && processException(fetch.errors);
                }
            }
            return fetch;
        });
    }
}
exports.default = new RestController();
