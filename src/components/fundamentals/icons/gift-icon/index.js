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
var GiftIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path d="M19 11.5V19.5H5V11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 7.5H3V11.5H21V7.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 19.5V7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7.5H8.14286C7.57454 7.5 7.02949 7.23661 6.62763 6.76777C6.22576 6.29893 6 5.66304 6 5C6 4.33696 6.22576 3.70107 6.62763 3.23223C7.02949 2.76339 7.57454 2.5 8.14286 2.5C11.1429 2.5 12 7.5 12 7.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7.5H15.8571C16.4255 7.5 16.9705 7.23661 17.3724 6.76777C17.7742 6.29893 18 5.66304 18 5C18 4.33696 17.7742 3.70107 17.3724 3.23223C16.9705 2.76339 16.4255 2.5 15.8571 2.5C12.8571 2.5 12 7.5 12 7.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
};
exports.default = GiftIcon;
