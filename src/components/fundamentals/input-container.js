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
var clsx_1 = require("clsx");
var react_1 = require("react");
var InputContainer = function (_a) {
    var onClick = _a.onClick, onFocusLost = _a.onFocusLost, children = _a.children, className = _a.className, props = __rest(_a, ["onClick", "onFocusLost", "children", "className"]);
    return (<div {...props} tabIndex={-1} onClick={onClick} onBlur={function (e) {
            if (onFocusLost && !e.currentTarget.contains(e.relatedTarget)) {
                onFocusLost();
            }
        }} className={(0, clsx_1.default)([
            "bg-grey-5 inter-base-regular w-full p-3 flex h-18 flex-col cursor-text border border-grey-20 focus-within:shadow-input focus-within:border-violet-60 rounded-rounded",
            className,
        ])}>
      {children}
    </div>);
};
exports.default = InputContainer;
