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
var SadFaceIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "20" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M36.7279 11.2721C43.7573 18.3015 43.7573 29.6985 36.7279 36.7279C29.6984 43.7573 18.3015 43.7573 11.2721 36.7279C4.24264 29.6984 4.24264 18.3015 11.2721 11.2721C18.3015 4.24264 29.6985 4.24264 36.7279 11.2721" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 31.999C17 31.999 19.626 29.375 24 29.375C28.376 29.375 31 31.999 31 31.999" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 20C33.21 19.03 32.13 18.48 31 18.48C29.87 18.48 28.82 19.03 28 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 20C19.21 19.03 18.13 18.48 17 18.48C15.87 18.48 14.82 19.03 14 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = SadFaceIcon;
