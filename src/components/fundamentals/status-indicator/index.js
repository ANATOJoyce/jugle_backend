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
var StatusIndicator = function (_a) {
    var title = _a.title, _b = _a.variant, variant = _b === void 0 ? "success" : _b, className = _a.className, props = __rest(_a, ["title", "variant", "className"]);
    var dotClass = (0, clsx_1.default)({
        "bg-teal-50": variant === "success",
        "bg-rose-40": variant === "danger",
        "bg-yellow-50": variant === "warning",
        "bg-violet-60": variant === "primary",
        "bg-emerald-40": variant === "active",
        "bg-grey-40": variant === "default",
    });
    return (<div className={(0, clsx_1.default)("flex items-center inter-small-regular", className)} {...props}>
      <div className={(0, clsx_1.default)("w-1.5 h-1.5 self-center rounded-full", dotClass)}/>
      {title && <span className="ml-2">{title}</span>}
    </div>);
};
exports.default = StatusIndicator;
