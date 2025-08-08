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
var ImagePlaceholder = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "38" : _b, _c = _a.color, color = _c === void 0 ? "#b8b8bf" : _c, attributes = __rest(_a, ["size", "color"]);
    var height = +size * 0.75;
    return (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={height} viewBox="0 0 64 48">
      <path fill={color} d="M56,0H8A8,8,0,0,0,0,8V40a7.27,7.27,0,0,0,.48,2.64A8.05,8.05,0,0,0,4,46.91,8.1,8.1,0,0,0,8,48H56a8.08,8.08,0,0,0,6.72-3.65A8.18,8.18,0,0,0,64,40V8A8,8,0,0,0,56,0ZM33,42.67H8a2.35,2.35,0,0,1-.83-.16L21.65,22.75,33.52,34.61l3.76,3.76,4.27,4.3ZM58.67,40A2.68,2.68,0,0,1,56,42.67H49.12l-8-8.06,6.82-6.74,10.78,12Zm0-8.13L50,22.21a2.72,2.72,0,0,0-1.89-.88,2.53,2.53,0,0,0-1.95.78l-8.82,8.74L23.23,16.77A2.84,2.84,0,0,0,21.12,16a2.76,2.76,0,0,0-1.95,1.09L5.33,36V8A2.68,2.68,0,0,1,8,5.33H56A2.68,2.68,0,0,1,58.67,8Z"/>
      <circle fill={color} cx="37.33" cy="18.67" r="5.33"/>
    </svg>);
};
exports.default = ImagePlaceholder;
