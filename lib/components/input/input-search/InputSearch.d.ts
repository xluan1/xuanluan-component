import { ChangeEventHandler, FC, MouseEventHandler, ReactNode } from "react";
type PropsType = {
    className?: string;
    placeHolder?: string;
    icon?: ReactNode;
    name?: string;
    value?: string;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    hanleClick?: MouseEventHandler;
    isButton?: boolean;
};
declare const InputSearch: FC<PropsType>;
export default InputSearch;
