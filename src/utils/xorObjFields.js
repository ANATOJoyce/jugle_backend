"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xorObjFields = function (obj, keyA, keyB) {
    var _a, _b;
    return obj[keyA] ? (_a = {}, _a[keyA] = obj[keyA], _a) : (_b = {}, _b[keyB] = obj[keyB], _b);
};
exports.default = xorObjFields;
