import { FC, ReactNode } from "react";
type PropsType = {
    className?: string;
    label?: string;
    icon?: ReactNode;
    name?: string;
    options?: any[];
    optionValue?: string;
    optionLabel?: string;
    error?: string;
    placeholder?: string;
    type?: string;
    handleChange?: any;
};
declare const FormSelectCustom: FC<PropsType>;
export default FormSelectCustom;
