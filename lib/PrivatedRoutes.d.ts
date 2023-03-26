import { FC } from "react";
import { JwtResponse } from "./utils/types/authType";
export declare const currentUser: (clientId: string) => JwtResponse;
export declare const isSuccessLogin: (clientId: string) => boolean;
type PropsType = {
    clientId: string;
};
declare const PrivatedRoutes: FC<PropsType>;
export default PrivatedRoutes;
