"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const IconButton_1 = __importDefault(require("../../icon-button/IconButton"));
const InputSearch = ({ className, placeHolder, icon, name, value, handleChange, hanleClick, isButton = true, }) => {
    return (react_1.default.createElement(react_bootstrap_1.InputGroup, { className: className },
        react_1.default.createElement(react_bootstrap_1.Form.Control, { name: name, value: value, placeholder: placeHolder, onChange: handleChange }),
        isButton && (react_1.default.createElement(IconButton_1.default, { onClick: hanleClick, icon: icon, className: "btn-custom", type: "button" }))));
};
exports.default = InputSearch;
