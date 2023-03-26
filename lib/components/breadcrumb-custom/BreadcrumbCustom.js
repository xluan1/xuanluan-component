"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const BreadcrumbCustom = ({ className, items }) => {
    return (react_1.default.createElement(react_bootstrap_1.Breadcrumb, { className: className }, items.map((data, index) => {
        return (react_1.default.createElement(react_bootstrap_1.Breadcrumb.Item, { key: index, href: data.toPage, active: data.isActive }, data.title));
    })));
};
exports.default = BreadcrumbCustom;
