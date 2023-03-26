import { Dispatch } from "react";
declare const ProccessLogin: (domain: string, clientId: string, toPage: string, sessionId: string, dispatch: Dispatch<any>) => Promise<void>;
export default ProccessLogin;
export declare const Logout: (domain: string, clientId: string, toPage: string) => void;
