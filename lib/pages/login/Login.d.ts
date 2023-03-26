import { FC } from "react";
export type LoginPage = {
    domain: string;
    clientId: string;
    toPage: string;
    imageBackground?: string;
    className?: string;
    classNameForm?: string;
    classNameBg?: string;
};
declare const Login: FC<LoginPage>;
export default Login;
