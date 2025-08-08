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
var Badge = function (_a) {
    var _b;
    var children = _a.children, variant = _a.variant, onClick = _a.onClick, className = _a.className, props = __rest(_a, ["children", "variant", "onClick", "className"]);
    var variantClassname = (0, clsx_1.default)((_b = {},
        _b["badge-primary"] = variant === "primary",
        _b["badge-danger"] = variant === "danger",
        _b["badge-success"] = variant === "success",
        _b["badge-warning"] = variant === "warning",
        _b["badge-ghost"] = variant === "ghost",
        _b["badge-default"] = variant === "default",
        _b));
    return (<div className={(0, clsx_1.default)("badge", variantClassname, className)} onClick={onClick} {...props}>
      {children}
    </div>);
};
exports.default = Badge;
