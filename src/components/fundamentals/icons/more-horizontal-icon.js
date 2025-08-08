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
var MoreHorizontalIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "20" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = MoreHorizontalIcon;
