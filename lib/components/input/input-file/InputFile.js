"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormInput_1 = __importDefault(require("../../form/form-input/FormInput"));
const InputFile = ({ className, currentImage, name, value, handleChange, roundedCircle = true, error, disabled, title = "Tải ảnh lên", }) => {
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement(react_bootstrap_1.Image, { roundedCircle: roundedCircle, fluid: true, src: currentImage }),
        react_1.default.createElement("label", { htmlFor: "file-upload", className: "btn-custom btn-file mx-auto d-block text-center" },
            react_1.default.createElement("i", { className: "fa fa-cloud-upload" }),
            " ",
            title),
        react_1.default.createElement(FormInput_1.default, { id: "file-upload", name: name, value: value, type: "file", handleChange: handleChange, error: error, disabled: disabled })));
};
exports.default = InputFile;
