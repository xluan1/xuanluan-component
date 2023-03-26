"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormSelectCustom = ({ className, label, icon, name, options, optionValue, optionLabel, error, placeholder, handleChange, }) => {
    return (react_1.default.createElement(react_bootstrap_1.Form.Group, { className: className },
        react_1.default.createElement(react_bootstrap_1.Col, { sm: 3, className: "col-form-label" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null,
                icon,
                react_1.default.createElement("h5", null, label))),
        react_1.default.createElement(react_bootstrap_1.Col, { md: 8, sm: 9 },
            react_1.default.createElement(react_bootstrap_1.Form.Select, { placeholder: placeholder, isInvalid: !!error, name: name, onChange: handleChange },
                react_1.default.createElement("option", { defaultChecked: true, value: "" }, "Ch\u1ECDn D\u1EEF Li\u1EC7u"), options === null || options === void 0 ? void 0 :
                options.map((data, index) => (react_1.default.createElement("option", { key: index, value: data[optionValue ? optionValue : ""] }, data[optionLabel ? optionLabel : ""])))),
            react_1.default.createElement(react_bootstrap_1.Form.Control.Feedback, { type: "invalid" }, error))));
};
exports.default = FormSelectCustom;
