"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimValues = void 0;
var trimValues = function (obj) {
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === "string") {
            obj[key] = obj[key].trim();
        }
    });
    return obj;
};
exports.trimValues = trimValues;
