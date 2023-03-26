import { FormikHelpers } from "formik";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
interface Values {
    username: string;
    password: string;
}
declare class LoginFormik {
    initValue: Values;
    handleSubmit: (domain: string, clientId: string, toPage: string, sessionId: string, actions: FormikHelpers<Values>, errors: WrapperResponse | undefined, dispatch: Dispatch<any>) => Promise<void>;
}
declare const _default: LoginFormik;
export default _default;
