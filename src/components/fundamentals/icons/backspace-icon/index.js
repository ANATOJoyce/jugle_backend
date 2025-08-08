"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BackspaceIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "16" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 6.66675L10.1667 9.33341" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1667 6.66675L7.5 9.33341" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.56137 11.8559L2.55004 9.49392H2.55004C1.81665 8.63293 1.81665 7.36691 2.55004 6.50592L4.56137 4.14392V4.14392C4.9991 3.62949 5.64058 3.33312 6.31604 3.33325H11.6954V3.33325C12.9682 3.33325 14 4.36509 14 5.63792C14 5.63792 14 5.63792 14 5.63792V10.3619V10.3619C14 11.6348 12.9682 12.6666 11.6954 12.6666H6.31604V12.6666C5.64058 12.6667 4.99911 12.3704 4.56137 11.8559V11.8559Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = BackspaceIcon;
