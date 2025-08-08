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
var button_1 = require("../../fundamentals/button");
var bell_icon_1 = require("../../fundamentals/icons/bell-icon");
var bell_noti_icon_1 = require("../../fundamentals/icons/bell-noti-icon");
var NotificationBell = function (_a) {
    var _b = _a.hasNotifications, hasNotifications = _b === void 0 ? false : _b, attributes = __rest(_a, ["hasNotifications"]);
    return (<button_1.default className="w-8 h-8 mr-3" size="small" {...attributes}>
      {hasNotifications ? <bell_noti_icon_1.default /> : <bell_icon_1.default />}
    </button_1.default>);
};
exports.default = NotificationBell;
