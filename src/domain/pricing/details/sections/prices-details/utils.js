"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
var merge = function (l1, l2) {
    if (l1 === void 0) { l1 = []; }
    if (l2 === void 0) { l2 = []; }
    var normalizedListA = normalize(l1, "id");
    var normalizedListB = normalize(l2, "id");
    var merged = Object.values(normalizedListA);
    Object.values(normalizedListB).forEach(function (element) {
        if (!normalizedListA[element.id]) {
            merged.push(element);
        }
    });
    return merged;
};
exports.merge = merge;
var normalize = function (arr, key) {
    return arr.reduce(function (obj, curr) { return ((obj[curr[key]] = __assign({}, curr)), obj); }, {});
};
