"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const pageNumbers = (dataResult, changePageClick) => {
    let isFirst = false;
    let isLast = false;
    let totalPage = 0;
    let pages = [];
    if (dataResult) {
        totalPage = Math.ceil(dataResult.total / dataResult.maxResult);
        //totalPage làm tròn đến số nguyên >= chính nó(vd: 0.3=> 1; 0.6=>1)
        isFirst = dataResult.index === 0;
        isLast = dataResult.index + 1 >= totalPage;
        for (let index = 0; index < totalPage; index++) {
            pages.push(react_1.default.createElement(react_bootstrap_1.Pagination.Item, { key: index, onClick: () => changePageClick(index), disabled: index === dataResult.index }, index + 1));
        }
    }
    return { pages, isFirst, isLast, totalPage };
};
const SearchPage = ({ dataResult, handleChange, nameFilter = "maxResult", changePageClick, }) => {
    const { pages, isFirst, isLast, totalPage } = pageNumbers(dataResult, changePageClick);
    return (react_1.default.createElement(react_bootstrap_1.Row, null,
        react_1.default.createElement(react_bootstrap_1.Col, { className: "col-9", md: 8 }, dataResult && (react_1.default.createElement(react_bootstrap_1.Pagination, null,
            react_1.default.createElement(react_bootstrap_1.Pagination.First, { onClick: () => changePageClick(0), disabled: isFirst }),
            react_1.default.createElement(react_bootstrap_1.Pagination.Prev, { onClick: () => changePageClick((dataResult === null || dataResult === void 0 ? void 0 : dataResult.index) - 1), disabled: isFirst }),
            pages,
            react_1.default.createElement(react_bootstrap_1.Pagination.Next, { onClick: () => changePageClick((dataResult === null || dataResult === void 0 ? void 0 : dataResult.index) + 1), disabled: isLast }),
            react_1.default.createElement(react_bootstrap_1.Pagination.Last, { onClick: () => changePageClick(totalPage - 1), disabled: isLast })))),
        react_1.default.createElement(react_bootstrap_1.Col, { className: "col-3", md: 2 },
            react_1.default.createElement(react_bootstrap_1.Form.Control, { name: nameFilter, as: "select", onChange: handleChange },
                react_1.default.createElement("option", { value: "20" }, "20"),
                react_1.default.createElement("option", { value: "40" }, "40"),
                react_1.default.createElement("option", { value: "60" }, "60")))));
};
exports.default = SearchPage;
