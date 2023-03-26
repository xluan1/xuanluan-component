import { FormikHelpers } from "formik";
import { ResetOTPRequest } from "../../../utils/types/authType";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import { resetOTP } from "../../../service-api/auth-service-api";
import { Toast } from "../../../utils/rest-controller/base-rest";
import ProccessLogin from "./ProccessLogin";
import Cookies from "js-cookie";

interface Values {
  otpCode: string;
}

class LoginOTPFormik {
  initValue: Values = {
    otpCode: "",
  };

  handleSubmit = async (
    domain: string,
    clientId: string,
    toPage: string,
    actions: FormikHelpers<Values>,
    sessionId: string,
    errors: WrapperResponse | undefined,
    dispatch: Dispatch<any>
  ) => {
    actions.resetForm({
      values: {
        otpCode: "",
      },
    });

    if (errors) {
      actions.setFieldError("otpCode", errors?.data?.otpCode);
      // clear error after 5s
      setTimeout(() => {
        actions.resetForm({ errors: {} });
      }, 5000);
    } else {
      ProccessLogin(domain, clientId, toPage, sessionId, dispatch);
      Cookies.remove("_SSID-OTP");
    }

    actions.setSubmitting(false);
  };

  resetOTPHanleClick = async (
    domain: string,
    clientId: string,
    sessionId: string,
    setError: Dispatch<React.SetStateAction<string>>,
    setIsLoading: Dispatch<React.SetStateAction<boolean>>
  ) => {
    const request: ResetOTPRequest = { sessionId: sessionId };
    const fetch = await resetOTP(domain, request, clientId);
    if (fetch.data) {
      Toast.fire({
        icon: "success",
        title: "Đã gửi mã OTP đến email của bạn!",
      });
    } else {
      if (typeof fetch.errors?.data === "string") {
        setError(fetch.errors?.data);
      } else {
        setError(fetch.errors?.data?.sessionId);
      }
      setTimeout(() => {
        setError("");
      }, 4000);
    }
    setIsLoading(false);
  };
}

export default new LoginOTPFormik();
