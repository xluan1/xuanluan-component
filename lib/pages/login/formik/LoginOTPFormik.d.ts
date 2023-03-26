import { FormikHelpers } from "formik";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
interface Values {
    otpCode: string;
}
declare class LoginOTPFormik {
    initValue: Values;
    handleSubmit: (domain: string, clientId: string, toPage: string, actions: FormikHelpers<Values>, sessionId: string, errors: WrapperResponse | undefined, dispatch: Dispatch<any>) => Promise<void>;
    resetOTPHanleClick: (domain: string, clientId: string, sessionId: string, setError: Dispatch<React.SetStateAction<string>>, setIsLoading: Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
}
declare const _default: LoginOTPFormik;
export default _default;
