import { ChangeEventHandler, FC, ReactNode } from "react";
type PropTypes = {
    className?: string;
    result?: [any];
    name?: string;
    label?: string;
    icon?: ReactNode;
    fieldValue?: string;
    handleChange?: ChangeEventHandler;
    inline?: boolean;
};
declare const FormCheckBox: FC<PropTypes>;
export default FormCheckBox;
