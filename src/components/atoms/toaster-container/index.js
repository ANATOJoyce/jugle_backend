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
var ToasterContainer = function (_a) {
    var children = _a.children, visible = _a.visible, className = _a.className, rest = __rest(_a, ["children", "visible", "className"]);
    return (<div className={(0, clsx_1.default)("flex items-start bg-grey-90 p-base border rounded-rounded shadow-toaster mb-xsmall last:mb-0", {
            "animate-enter": visible,
        }, {
            "animate-leave": !visible,
        }, className)} {...rest}>
      {children}
    </div>);
};
exports.default = ToasterContainer;
