import { FormikHelpers } from "formik";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
interface Values {
    pinCode: string;
    error?: string;
}
declare class LoginPINFormik {
    initValue: Values;
    handleSubmit: (domain: string, clientId: string, toPage: string, sessionId: string, actions: FormikHelpers<Values>, errors: WrapperResponse | undefined, dispatch: Dispatch<any>) => Promise<void>;
}
declare const _default: LoginPINFormik;
export default _default;
