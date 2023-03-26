import {
  LOGIN_URL,
  CHECK_OTP_URL,
  CHECK_PIN_URL,
  RESET_OTP_URL,
  LOGOUT_URL,
  CURRENT_USER_TOKEN_URL,
} from "../service-api/urls/authUrls";
import {
  UserLocalLoginRequest,
  LoginOTPRequest,
  LoginPINRequest,
  ResetOTPRequest,
} from "../utils/types/authType";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import RestController from "../utils/rest-controller/base-rest";

export const login = (
  domain: string,
  request: UserLocalLoginRequest,
  clientId: string
): Promise<BaseFetch> => {
  return RestController.postRestController(
    domain + LOGIN_URL,
    request,
    clientId
  );
};

export const loginOTP = (
  domain: string,
  sessionId: string | undefined,
  request: LoginOTPRequest,
  clientId: string
): Promise<BaseFetch> => {
  return RestController.postRestController(
    domain + CHECK_OTP_URL + sessionId,
    request,
    clientId
  );
};

export const loginPIN = (
  domain: string,
  sessionId: string | undefined,
  request: LoginPINRequest,
  clientId: string
): Promise<BaseFetch> => {
  return RestController.postRestController(
    domain + CHECK_PIN_URL + sessionId,
    request,
    clientId
  );
};

export const getCurrentUserToken = (
  domain: string,
  sessiondId: string,
  clientId: string
): Promise<BaseFetch> => {
  return RestController.getRestController(
    domain + CURRENT_USER_TOKEN_URL + sessiondId,
    clientId
  );
};

export const resetOTP = (
  domain: string,
  request: ResetOTPRequest,
  clientId: string
): Promise<BaseFetch> => {
  return RestController.postRestController(
    domain + RESET_OTP_URL,
    request,
    clientId
  );
};

export const logout = (
  domain: string,
  clientId: string,
  sessionId: string
): Promise<BaseFetch> => {
  return RestController.deleteRestController(
    domain + LOGOUT_URL + sessionId,
    clientId
  );
};
