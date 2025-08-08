"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusByName = focusByName;
function focusByName(name) {
    var _a, _b;
    (_b = (_a = document === null || document === void 0 ? void 0 : document.getElementsByName(name)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.focus();
}
