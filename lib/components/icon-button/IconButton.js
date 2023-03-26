"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const IconButton = ({ className, color, type, tittle, icon, onClick, disabled, }) => {
    return (react_1.default.createElement(react_bootstrap_1.Button, { className: className ? className : "btn-custom mt-2 ms-3 me-3", type: type ? type : "submit", variant: color, disabled: disabled, onClick: onClick },
        icon && typeof icon === "string" ? react_1.default.createElement("i", { className: icon }) : icon,
        tittle));
};
exports.default = IconButton;
