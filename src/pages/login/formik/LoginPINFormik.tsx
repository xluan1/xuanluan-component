import { FormikHelpers } from "formik";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import ProccessLogin from "./ProccessLogin";

interface Values {
  pinCode: string;
  error?: string;
}

class LoginPINFormik {
  initValue: Values = {
    pinCode: "",
  };

  handleSubmit = async (
    domain: string,
    clientId: string,
    toPage: string,
    sessionId: string,
    actions: FormikHelpers<Values>,
    errors: WrapperResponse | undefined,
    dispatch: Dispatch<any>
  ) => {
    actions.resetForm({
      values: {
        pinCode: "",
      },
    });
    if (errors) {
      actions.setFieldError("pinCode", errors?.data?.pinCode);
      // clear error after 5s
      setTimeout(() => {
        actions.resetForm({ errors: {} });
      }, 5000);
    } else {
      ProccessLogin(domain, clientId, toPage, sessionId, dispatch);
    }

    actions.setSubmitting(false);
  };
}

export default new LoginPINFormik();
