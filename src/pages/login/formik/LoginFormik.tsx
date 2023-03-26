import { FormikHelpers } from "formik";
import { Dispatch } from "react";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import ProccessLogin from "./ProccessLogin";

interface Values {
  username: string;
  password: string;
}

class LoginFormik {
  initValue: Values = {
    username: "",
    password: "",
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
    actions.setFieldValue("password", "");

    if (errors) {
      actions.setFieldError("username", errors?.data?.username);
      actions.setFieldError("password", errors?.data?.password);

      setTimeout(() => {
        actions.setErrors({});
      }, 5000);
    } else {
      ProccessLogin(domain, clientId, toPage, sessionId, dispatch);
    }

    actions.setSubmitting(false);
  };
}

export default new LoginFormik();
