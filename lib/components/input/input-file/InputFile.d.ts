import { ChangeEventHandler, FC } from "react";
type PropTypes = {
    className?: string;
    currentImage?: string;
    name?: string;
    value?: any;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    roundedCircle?: boolean;
    error?: string;
    disabled?: boolean;
    title?: string;
};
declare const InputFile: FC<PropTypes>;
export default InputFile;
