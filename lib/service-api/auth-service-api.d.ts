import { UserLocalLoginRequest, LoginOTPRequest, LoginPINRequest, ResetOTPRequest } from "../utils/types/authType";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
export declare const login: (domain: string, request: UserLocalLoginRequest, clientId: string) => Promise<BaseFetch>;
export declare const loginOTP: (domain: string, sessionId: string | undefined, request: LoginOTPRequest, clientId: string) => Promise<BaseFetch>;
export declare const loginPIN: (domain: string, sessionId: string | undefined, request: LoginPINRequest, clientId: string) => Promise<BaseFetch>;
export declare const getCurrentUserToken: (domain: string, sessiondId: string, clientId: string) => Promise<BaseFetch>;
export declare const resetOTP: (domain: string, request: ResetOTPRequest, clientId: string) => Promise<BaseFetch>;
export declare const logout: (domain: string, clientId: string, sessionId: string) => Promise<BaseFetch>;
