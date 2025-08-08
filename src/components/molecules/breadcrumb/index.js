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
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var chevron_right_icon_1 = require("../../fundamentals/icons/chevron-right-icon");
var Breadcrumb = function (_a) {
    var _b = _a.previousRoute, previousRoute = _b === void 0 ? "/a/settings" : _b, _c = _a.previousBreadcrumb, previousBreadcrumb = _c === void 0 ? "Settings" : _c, currentPage = _a.currentPage, className = _a.className, props = __rest(_a, ["previousRoute", "previousBreadcrumb", "currentPage", "className"]);
    return (<div className={(0, clsx_1.default)("w-full flex items-center inter-small-semibold text-grey-50 mb-4", className)} {...props}>
      <span className="text-violet-60 cursor-pointer" onClick={function () { return (0, gatsby_1.navigate)(previousRoute); }}>
        {previousBreadcrumb}
      </span>
      <span className="mx-0.5">
        <chevron_right_icon_1.default size={16}/>
      </span>
      <span>{currentPage}</span>
    </div>);
};
exports.default = Breadcrumb;
