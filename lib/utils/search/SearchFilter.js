"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SearchFilter = (init) => {
    const [filter, setFilter] = (0, react_1.useState)(init);
    const changePageFilter = (page) => {
        filter.offset = page;
        setFilter(Object.assign({}, filter));
    };
    const handleFilter = (event) => {
        event.persist();
        filter.offset = 0;
        setFilter((prev) => (Object.assign(Object.assign({}, prev), { [event.target.name]: event.target.value })));
    };
    return { filter, changePageFilter, handleFilter };
};
exports.default = SearchFilter;
