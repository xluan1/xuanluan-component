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
Object.defineProperty(exports, "__esModule", { value: true });
const base_rest_1 = require("../service-api/base-rest");
const client_service_api_1 = require("../service-api/client-service-api");
class EmailUtils {
    constructor() {
        this.checkServerOfMail = (values, setSubmitting) => __awaiter(this, void 0, void 0, function* () {
            const emailSender = {
                messageBody: `Test server của email: ${values.usernameMail}`,
                subject: "Test Server",
                toEmail: values.usernameMail,
            };
            const emailConfig = {
                hostMail: values.hostMail,
                isConnectMail: true,
                passwordMail: values.passwordMail,
                usernameMail: values.usernameMail,
                portMail: values.portMail,
                protocolMail: values.protocolMail,
            };
            const emailSenderConfig = {
                config: emailConfig,
                sender: emailSender,
            };
            yield (0, client_service_api_1.sendEmailOfConfig)(emailSenderConfig).then((result) => {
                result.errors &&
                    base_rest_1.Toast.fire({
                        icon: "error",
                        title: "Thông tin cấu hình của email không chính xác!",
                    });
            });
            setSubmitting(false);
        });
    }
}
exports.default = new EmailUtils();
