"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNullish = void 0;
var removeNullish = function (obj) {
    return Object.entries(obj).reduce(function (a, _a) {
        var k = _a[0], v = _a[1];
        return (v ? ((a[k] = v), a) : a);
    }, {});
};
exports.removeNullish = removeNullish;
