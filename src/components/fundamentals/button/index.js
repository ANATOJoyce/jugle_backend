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
var spinner_1 = require("../../atoms/spinner");
var Button = react_1.default.forwardRef(function (_a, ref) {
    var _b, _c;
    var _d = _a.variant, variant = _d === void 0 ? "primary" : _d, _e = _a.size, size = _e === void 0 ? "large" : _e, _f = _a.loading, loading = _f === void 0 ? false : _f, children = _a.children, attributes = __rest(_a, ["variant", "size", "loading", "children"]);
    var handleClick = function (e) {
        if (!loading && attributes.onClick) {
            attributes.onClick(e);
        }
    };
    var variantClassname = (0, clsx_1.default)((_b = {},
        _b["btn-primary"] = variant === "primary",
        _b["btn-secondary"] = variant === "secondary",
        _b["btn-ghost"] = variant === "ghost",
        _b["btn-danger"] = variant === "danger",
        _b["btn-nuclear"] = variant === "nuclear",
        _b));
    var sizeClassname = (0, clsx_1.default)((_c = {},
        _c["btn-large"] = size === "large",
        _c["btn-medium"] = size === "medium",
        _c["btn-small"] = size === "small",
        _c));
    return (<button {...attributes} className={(0, clsx_1.default)("btn", variantClassname, sizeClassname, attributes.className)} disabled={attributes.disabled || loading} ref={ref} onClick={handleClick}>
        {loading ? (<spinner_1.default size={size} variant={"secondary"}/>) : (react_1.Children.map(children, function (child, i) {
            return (<span key={i} className="mr-xsmall last:mr-0">
                {child}
              </span>);
        }))}
      </button>);
});
exports.default = Button;
