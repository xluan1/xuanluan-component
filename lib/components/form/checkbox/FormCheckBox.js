"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormCheckBox = ({ className, result, name, label, icon, fieldValue = "name", inline, handleChange, }) => {
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement(react_bootstrap_1.Col, null,
            react_1.default.createElement(react_bootstrap_1.Form.Label, null,
                icon,
                react_1.default.createElement("h5", null, label))),
        react_1.default.createElement(react_bootstrap_1.Col, null, result &&
            result.map((data, index) => (react_1.default.createElement(react_bootstrap_1.Form.Check, { key: index, name: name, label: data[fieldValue], value: data[fieldValue], onChange: handleChange, inline: inline }))))));
};
exports.default = FormCheckBox;
