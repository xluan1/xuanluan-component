"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const CardContent = ({ className, title, image, content }) => {
    return (react_1.default.createElement(react_bootstrap_1.Card, { className: className },
        image && react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: image }),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.default.createElement(react_bootstrap_1.Card.Title, { className: "text-center" }, title),
            content)));
};
exports.default = CardContent;
