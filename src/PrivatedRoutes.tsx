import Cookies from "js-cookie";
import React, { FC, ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { JwtResponse } from "./utils/types/authType";

export const currentUser = (clientId: string): JwtResponse => {
  return JSON.parse(localStorage.getItem(clientId + "currentUser") as string);
};

export const isSuccessLogin = (clientId: string): boolean => {
  const isLogined = Cookies.get(clientId + "_SSID-FINAL");
  const sessionId = Cookies.get(clientId + "_Token-CODE");
  return isLogined && sessionId ? true : false;
};

type PropsType = {
  clientId: string;
};
const PrivatedRoutes: FC<PropsType> = ({ clientId }): ReactElement => {
  return isSuccessLogin(clientId) ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivatedRoutes;
