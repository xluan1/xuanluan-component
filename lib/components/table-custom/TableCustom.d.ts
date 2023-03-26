import { FC } from "react";
import { ResultList } from "../../utils/types/baseType";
interface TypeTable {
    className?: string;
    data?: ResultList<any>;
    columns: ColumnCustom[];
    toPage?: string;
    pathVariable?: string;
}
export interface ColumnCustom {
    field: string;
    header: string;
}
declare const TableCutom: FC<TypeTable>;
export default TableCutom;
