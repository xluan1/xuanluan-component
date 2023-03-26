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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const IconButton_1 = __importDefault(require("../icon-button/IconButton"));
const ContentError = ({ className, title, titleLink = "Trở về trang chủ", toPage = "home", srcImage, duration = 5000, rollBack = true, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [timeBack, setTimeBack] = (0, react_1.useState)(duration);
    const [clicked, setClicked] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (rollBack) {
            const timerInterval = setInterval(() => {
                setTimeBack(timeBack - 1000);
            }, 1000);
            !clicked &&
                setTimeout(() => {
                    navigate(toPage);
                }, duration);
            console.log(clicked);
            return () => {
                clearInterval(timerInterval);
            };
        }
    }, [clicked, timeBack]);
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: className, fluid: true },
        react_1.default.createElement("h3", { className: "cb-title" }, title),
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { className: "col-4 align-self-center text-center" },
                react_1.default.createElement("p", { className: "cb-timer" }, rollBack && (react_1.default.createElement(react_1.default.Fragment, null,
                    titleLink,
                    " sau ",
                    timeBack / 1000,
                    " gi\u00E2y"))),
                react_1.default.createElement(IconButton_1.default, { tittle: "Tr\u1EDF v\u1EC1", onClick: () => {
                        setClicked(true);
                        navigate(toPage);
                    } })),
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement(react_bootstrap_1.Image, { src: srcImage, className: "cb-image", fluid: true })))));
};
exports.default = ContentError;
