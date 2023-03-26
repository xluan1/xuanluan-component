import { FC, MouseEventHandler, ReactNode } from "react";
type PropsType = {
    className?: string;
    color?: string;
    type?: "submit" | "reset" | "button" | undefined;
    tittle?: string;
    icon?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};
declare const IconButton: FC<PropsType>;
export default IconButton;
