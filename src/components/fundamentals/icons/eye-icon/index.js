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
var EyeIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "20" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M2.5 10C2.5 10 5.22727 4.58337 10 4.58337C14.7727 4.58337 17.5 10 17.5 10C17.5 10 14.7727 15.4167 10 15.4167C5.22727 15.4167 2.5 10 2.5 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99965 12.0739C11.145 12.0739 12.0735 11.1454 12.0735 10C12.0735 8.85465 11.145 7.92615 9.99965 7.92615C8.85428 7.92615 7.92578 8.85465 7.92578 10C7.92578 11.1454 8.85428 12.0739 9.99965 12.0739Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = EyeIcon;
