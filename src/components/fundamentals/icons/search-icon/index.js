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
var SearchIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "24" : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, attributes = __rest(_a, ["size", "color"]);
    return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <title>Search</title>
      <path d="M20.4696 21.5303C20.7625 21.8232 21.2373 21.8232 21.5302 21.5303C21.8231 21.2374 21.8231 20.7626 21.5302 20.4697L20.4696 21.5303ZM17.1802 16.1197C16.8873 15.8268 16.4125 15.8268 16.1196 16.1197C15.8267 16.4126 15.8267 16.8874 16.1196 17.1803L17.1802 16.1197ZM18.25 11C18.25 15.0041 15.0041 18.25 11 18.25V19.75C15.8325 19.75 19.75 15.8325 19.75 11H18.25ZM11 18.25C6.99594 18.25 3.75 15.0041 3.75 11H2.25C2.25 15.8325 6.16751 19.75 11 19.75V18.25ZM3.75 11C3.75 6.99594 6.99594 3.75 11 3.75V2.25C6.16751 2.25 2.25 6.16751 2.25 11H3.75ZM11 3.75C15.0041 3.75 18.25 6.99594 18.25 11H19.75C19.75 6.16751 15.8325 2.25 11 2.25V3.75ZM21.5302 20.4697L17.1802 16.1197L16.1196 17.1803L20.4696 21.5303L21.5302 20.4697Z" fill={color}/>
    </svg>);
};
exports.default = SearchIcon;
