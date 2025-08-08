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
var ImagePlaceholderIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M18.2222 4H5.77778C4.79594 4 4 4.79594 4 5.77778V18.2222C4 19.2041 4.79594 20 5.77778 20H18.2222C19.2041 20 20 19.2041 20 18.2222V5.77778C20 4.79594 19.2041 4 18.2222 4Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 15.0909L15.625 11L6 20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>);
};
exports.default = ImagePlaceholderIcon;
