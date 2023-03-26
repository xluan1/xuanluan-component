import { ChangeEvent } from "react";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
declare const SearchFilter: <T extends BaseFilter>(init: T) => {
    filter: T;
    changePageFilter: (page: number) => void;
    handleFilter: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default SearchFilter;
