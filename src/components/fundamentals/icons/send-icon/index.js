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
var SendIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M18.0893 3.08926C18.4147 2.76382 18.4147 2.23618 18.0893 1.91074C17.7638 1.58531 17.2362 1.58531 16.9107 1.91074L18.0893 3.08926ZM9.41074 9.41074L8.82149 10L10 11.1785L10.5893 10.5893L9.41074 9.41074ZM16.9107 1.91074L9.41074 9.41074L10.5893 10.5893L18.0893 3.08926L16.9107 1.91074Z" fill={color}/>
      <path d="M17.5 2.5L12.25 17.5L9.25 10.75L2.5 7.75L17.5 2.5Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = SendIcon;
