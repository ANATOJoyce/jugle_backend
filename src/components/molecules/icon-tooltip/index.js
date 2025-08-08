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
var tooltip_1 = require("../../atoms/tooltip");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
var info_icon_1 = require("../../fundamentals/icons/info-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var IconTooltip = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "info" : _b, _c = _a.size, size = _c === void 0 ? 16 : _c, content = _a.content, props = __rest(_a, ["type", "size", "content"]);
    var icon = function (type) {
        switch (type) {
            case "warning":
                return <alert_icon_1.default size={size} className="flex text-orange-40"/>;
            case "error":
                return <x_circle_icon_1.default size={size} className="flex text-rose-40"/>;
            default:
                return <info_icon_1.default size={size} className="flex text-grey-40"/>;
        }
    };
    return (<tooltip_1.default content={content} {...props}>
      {icon(type)}
    </tooltip_1.default>);
};
exports.default = IconTooltip;
