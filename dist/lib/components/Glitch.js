"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Glitch_module_css_1 = __importDefault(require("../../styles/Glitch.module.css"));
const Glitch = ({ children, color = 'whitesmoke', fontSize = '42px', style = {}, className = null, onClick = () => null, }) => {
    return ((0, jsx_runtime_1.jsxs)("p", Object.assign({ className: `${Glitch_module_css_1.default.item}${className ? ` ${className}` : ''}`, style: Object.assign({ color, fontSize }, style), onClick: onClick }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ "aria-hidden": 'true' }, { children: children }), void 0), children, (0, jsx_runtime_1.jsx)("span", Object.assign({ "aria-hidden": 'true' }, { children: children }), void 0)] }), void 0));
};
exports.default = Glitch;
