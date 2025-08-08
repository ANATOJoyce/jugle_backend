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
var SidedMouthFaceIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M36.7279 11.2721C43.7573 18.3015 43.7573 29.6985 36.7279 36.7279C29.6984 43.7573 18.3015 43.7573 11.2721 36.7279C4.24264 29.6984 4.24264 18.3015 11.2721 11.2721C18.3015 4.24264 29.6985 4.24264 36.7279 11.2721" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 33.6649C20.592 33.6809 17.128 31.7849 16 28.2969" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 18.4805C33.21 19.4505 32.13 20.0005 31 20.0005C29.87 20.0005 28.82 19.4505 28 18.4805" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 18.4805C19.21 19.4505 18.13 20.0005 17 20.0005C15.87 20.0005 14.82 19.4505 14 18.4805" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

    </svg>);
};
exports.default = SidedMouthFaceIcon;
