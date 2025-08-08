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
var arrow_down_icon_1 = require("../../fundamentals/icons/arrow-down-icon");
var arrow_up_icon_1 = require("../../fundamentals/icons/arrow-up-icon");
var down_left_1 = require("../../fundamentals/icons/down-left");
var pointer_icon_1 = require("../../fundamentals/icons/pointer-icon");
var KeyboardShortcuts = function (_a) {
    var props = __rest(_a, []);
    return (<p {...props}>
      <span className="rounded p-1 bg-grey-10">
        <pointer_icon_1.default color="#9CA3AF" size="16px"/>
      </span>
      or
      <span className="rounded p-1 bg-grey-10">
        <arrow_up_icon_1.default color="#9CA3AF" size="16px"/>
      </span>
      <span className="rounded -ml-1 p-1 bg-grey-10">
        <arrow_down_icon_1.default color="#9CA3AF" size="16px"/>
      </span>
      to navigate,
      <span className="rounded p-1 bg-grey-10">
        <down_left_1.default color="#9CA3AF" size="16px"/>
      </span>
      to select, and
      <span className="rounded px-1.5 py-0.5 bg-grey-10 font-semibold leading-small font-small">
        <OSCommandIcon />
      </span>
      <span className="-mx-2">+</span>
      <span className="rounded px-1.5 py-0.5 bg-grey-10 font-semibold leading-small font-small">
        K
      </span>
      to search anytime
    </p>);
};
var OSCommandIcon = function () {
    var _a;
    var isMac = typeof window !== "undefined" &&
        ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.platform) === null || _a === void 0 ? void 0 : _a.toUpperCase().indexOf("MAC")) >= 0
        ? true
        : false;
    return <>{isMac ? "⌘" : "Ctrl"}</>;
};
exports.default = KeyboardShortcuts;
