"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var OSShortcut = function (_a) {
    var _b;
    var winModifiers = _a.winModifiers, macModifiers = _a.macModifiers, keys = _a.keys;
    var isMac = typeof window !== "undefined" &&
        ((_b = navigator === null || navigator === void 0 ? void 0 : navigator.platform) === null || _b === void 0 ? void 0 : _b.toUpperCase().indexOf("MAC")) >= 0
        ? true
        : false;
    var modifiers;
    if (isMac) {
        if (Array.isArray(macModifiers)) {
            modifiers = macModifiers.join("");
        }
        else {
            modifiers = macModifiers;
        }
    }
    else {
        if (Array.isArray(winModifiers)) {
            modifiers = winModifiers.join(" + ");
        }
        else {
            modifiers = winModifiers;
        }
    }
    var input;
    if (Array.isArray(keys)) {
        input = keys.join(" + ");
    }
    else {
        input = keys;
    }
    return (<div className="flex items-center text-grey-40">
      <p className="m-0 inter-base-semibold">
        <span className="inter-base-semibold">{modifiers} </span>
        {input}
      </p>
    </div>);
};
exports.default = OSShortcut;
