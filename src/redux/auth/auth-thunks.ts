import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getCurrentUserToken } from "../../service-api/auth-service-api";
import { Toast } from "../../utils/rest-controller/base-rest";
import { JwtResponse } from "../../utils/types/authType";
import { LoginFinal } from "../../utils/types/baseType";
import { setCurrentUser } from "./auth-slice";

export const getUserToken = createAsyncThunk(
  "auth/user_info",
  async (stepFinal: LoginFinal, thunkApi) => {
    await getCurrentUserToken(
      stepFinal.domain,
      stepFinal.sessionId,
      stepFinal.clientId
    ).then((response) => {
      if (response.errors) {
        Toast.fire({ icon: "error", title: response.errors?.data });
      } else {
        Toast.fire({ icon: "success", title: "Đăng nhập thành công" });

        const jwtResponse: JwtResponse = {
          orgId: response.data?.orgId,
          username: response.data?.username,
          expiredAt: response.data?.expiredAt,
        };

        Cookies.set(stepFinal.clientId + "_Token-CODE", stepFinal.sessionId);

        localStorage.setItem(
          stepFinal.clientId + "currentUser",
          JSON.stringify(jwtResponse)
        );
        thunkApi.dispatch(setCurrentUser(jwtResponse));
        window.location.href = stepFinal.toPage
          ? stepFinal.toPage
          : "/dashboard";
      }
    });
  }
);
