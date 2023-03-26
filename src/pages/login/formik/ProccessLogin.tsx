import Cookies from "js-cookie";
import { Dispatch } from "react";
import { getUserToken } from "../../../redux/auth/auth-thunks";
import { logout } from "../../../service-api/auth-service-api";
import { LoginFinal } from "../../../utils/types/baseType";

const ProccessLogin = async (
  domain: string,
  clientId: string,
  toPage: string,
  sessionId: string,
  dispatch: Dispatch<any>
) => {
  const cookieName: string = clientId + "_SSID-LOGIN-CODE";
  if (sessionId.startsWith("OTP")) {
    //redirect to check-otp page to check otp code
    // 45s= (1 / 86400) * 45
    Cookies.set(clientId + "_SSID-OTP", "actived");
    Cookies.set(cookieName, sessionId);
    window.location.href = "/check-otp";
  } else if (sessionId.startsWith("PIN")) {
    //redirect to check-pin page to check pin code
    Cookies.set(clientId + "_SSID-PIN", "actived");
    Cookies.set(cookieName, sessionId);
    window.location.href = "/check-pin";
  } else if (sessionId.startsWith("FINAL")) {
    //redirect to dashboard page
    Cookies.set(clientId + "_SSID-FINAL", "actived");
    // finish login => set Jwt Token to cookie
    const stepFinal: LoginFinal = {
      clientId: clientId,
      sessionId: sessionId,
      toPage: toPage,
      domain: domain,
    };
    dispatch(getUserToken(stepFinal));
  }
};

export default ProccessLogin;

export const Logout = (domain: string, clientId: string, toPage: string) => {
  const sessionId: string | undefined = Cookies.get(clientId + "_Token-CODE");
  Cookies.remove(clientId + "_SSID-FINAL");
  Cookies.remove(clientId + "_SSID-LOGIN-CODE");
  Cookies.remove(clientId + "_Token-CODE");
  localStorage.removeItem(clientId + "currentUser");
  sessionId && logout(domain, clientId, sessionId);
  window.location.href = toPage;
};
