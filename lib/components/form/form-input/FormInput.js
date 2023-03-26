"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormInput = ({ controlId, className, label, icon, name, id, value = undefined, error, placeholder, type, handleChange, row, disabled, }) => {
    return (react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: controlId, className: className },
        react_1.default.createElement(react_bootstrap_1.Col, { md: 4, sm: 3, className: "col-form-label" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null,
                icon,
                react_1.default.createElement("h5", null, label))),
        react_1.default.createElement(react_bootstrap_1.Col, { md: 8, sm: 9 },
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: type, placeholder: placeholder, isInvalid: !!error, name: name, value: value ? value : "", id: id, onChange: handleChange, as: row ? "textarea" : undefined, rows: row, disabled: disabled }),
            react_1.default.createElement(react_bootstrap_1.Form.Control.Feedback, { type: "invalid" }, error))));
};
exports.default = FormInput;
