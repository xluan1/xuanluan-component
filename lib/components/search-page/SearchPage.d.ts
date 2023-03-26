import { ChangeEventHandler, FC } from "react";
import { ResultList } from "../../utils/types/baseType";
type PropsType = {
    dataResult?: ResultList<any>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    nameFilter?: string;
    changePageClick: (page: number) => void | undefined;
};
declare const SearchPage: FC<PropsType>;
export default SearchPage;
