import { FC, ReactNode } from "react";
type PropsType = {
    controlId?: string;
    className?: string;
    label?: string;
    icon?: ReactNode;
    name?: string;
    id?: string;
    value?: any;
    error?: string;
    placeholder?: string;
    type?: string;
    handleChange?: any;
    row?: number;
    disabled?: boolean;
};
declare const FormInput: FC<PropsType>;
export default FormInput;
