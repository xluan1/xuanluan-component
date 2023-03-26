import { ChangeEventHandler, FC } from "react";
type PropsType = {
    className?: string;
    name?: string;
    value?: string;
    fieldName?: string;
    fieldValue?: any;
    label?: string;
    placeHolder?: string;
    error?: string;
    setFieldValue?: (field: string, value: any) => void;
    resultList?: any[];
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
};
declare const InputDataList: FC<PropsType>;
export default InputDataList;
