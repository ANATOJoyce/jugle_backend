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
var TileIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "20px" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M8.5 3.5H3.5V8.5H8.5V3.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5 3.5H11.5V8.5H16.5V3.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5 11.5H11.5V16.5H16.5V11.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 11.5H3.5V16.5H8.5V11.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>);
};
exports.default = TileIcon;
