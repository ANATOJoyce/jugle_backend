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
var SortingIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, ascendingColor = _a.ascendingColor, descendingColor = _a.descendingColor, attributes = __rest(_a, ["size", "color", "ascendingColor", "descendingColor"]);
    return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M4.66602 10L7.99935 13.3333L11.3327 10" stroke={descendingColor || color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66602 6.00008L7.99935 2.66675L11.3327 6.00008" stroke={ascendingColor || color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = SortingIcon;
