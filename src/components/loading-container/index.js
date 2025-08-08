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
var React = require("react");
var spinner_1 = require("../atoms/spinner");
var LoadingContainer = function (_a) {
    var isLoading = _a.isLoading, children = _a.children, placeholder = _a.placeholder, props = __rest(_a, ["isLoading", "children", "placeholder"]);
    placeholder = placeholder || <spinner_1.default size="large" variant="secondary"/>;
    if (isLoading) {
        return (<div className="w-full pt-2xlarge flex items-center justify-center min-h-[756px]" {...props}>
        {placeholder}
      </div>);
    }
    return children;
};
exports.default = LoadingContainer;
