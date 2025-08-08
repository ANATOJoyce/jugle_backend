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
var TagIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M20.4843 14.1202L14.1264 20.4797C13.9617 20.6447 13.7661 20.7755 13.5509 20.8648C13.3356 20.9541 13.1048 21 12.8717 21C12.6387 21 12.4079 20.9541 12.1926 20.8648C11.9773 20.7755 11.7817 20.6447 11.617 20.4797L4 12.8696V4H12.8673L20.4843 11.619C20.8146 11.9514 21 12.401 21 12.8696C21 13.3383 20.8146 13.7879 20.4843 14.1202V14.1202Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9H9.01006" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = TagIcon;
