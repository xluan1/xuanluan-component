"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
/******************* function for table components *******************/
const TableColumn = ({ header }) => react_1.default.createElement("th", null, getCaps(header));
const convertData = (field, data) => {
    if (field === "createdAt" || field === "updatedAt") {
        if (typeof data === "number" || typeof data === "string") {
            return new Date(data).toLocaleString();
        }
    }
    return data;
};
const TableRow = ({ item, column, toPage, pathVariable = "id", }) => (react_1.default.createElement("tr", { className: "text-center" },
    column.map((columnItem) => {
        return (react_1.default.createElement("td", { key: columnItem.field }, convertData(columnItem.field, item[columnItem.field])));
    }),
    toPage && (react_1.default.createElement("td", null,
        react_1.default.createElement(react_router_dom_1.Link, { to: toPage + "/" + item[pathVariable] }, "Chi ti\u1EBFt")))));
const TableCutom = ({ className, data, columns, toPage, pathVariable, }) => {
    return (react_1.default.createElement(react_bootstrap_1.Table, { bordered: true, hover: true, className: className ? className : "mt-3" },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", { className: "text-center" }, columns &&
                columns.map((column) => (react_1.default.createElement(TableColumn, { key: column.field, header: column.header }))))),
        react_1.default.createElement("tbody", null, (data === null || data === void 0 ? void 0 : data.resultList) &&
            (data === null || data === void 0 ? void 0 : data.resultList.map((item) => (react_1.default.createElement(react_1.default.Fragment, { key: item.id },
                react_1.default.createElement(TableRow, { item: item, column: columns, toPage: toPage, pathVariable: pathVariable }))))))));
};
const getCaps = (header) => {
    return header.toUpperCase();
};
exports.default = TableCutom;
