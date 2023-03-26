"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ItemList = (fieldName, fieldValue, setFieldValue, resultList, isShow, setShow) => {
    if (!isShow)
        return [];
    return (resultList &&
        resultList
            .filter((data) => { var _a; return (_a = data[fieldName]) === null || _a === void 0 ? void 0 : _a.includes(fieldValue); })
            .map((data) => (react_1.default.createElement(react_bootstrap_1.Button, { onClick: () => {
                setFieldValue && setFieldValue(fieldName, data[fieldName]);
                setShow && setShow(false);
            }, key: data.orgId }, data[fieldName ? fieldName : ""]))));
};
const InputDataList = ({ className, name = "", label, handleChange, value = "", resultList, setFieldValue, fieldName = "name", fieldValue = "", disabled, }) => {
    const [showList, setShowList] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_bootstrap_1.Form.Group, { className: className },
        react_1.default.createElement(react_bootstrap_1.Col, { sm: 3, className: "col-form-label" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null,
                react_1.default.createElement("h5", null, label))),
        react_1.default.createElement(react_bootstrap_1.Col, { md: 8, sm: 9 },
            react_1.default.createElement(react_bootstrap_1.Col, { md: 8, sm: 9 },
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: name, type: "search", value: value, onChange: handleChange, disabled: disabled, onFocus: () => setShowList && setShowList(true), onBlur: () => setTimeout(() => {
                        setShowList && setShowList(false);
                    }, 150) })),
            react_1.default.createElement("div", { className: "list" }, ItemList(fieldName, value, setFieldValue, resultList, showList, setShowList)))));
};
exports.default = InputDataList;
