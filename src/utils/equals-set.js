"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setsEqual = void 0;
var setsEqual = function (as, bs) {
    if (as.size !== bs.size) {
        return false;
    }
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!bs.has(a)) {
            return false;
        }
    }
    return true;
};
exports.setsEqual = setsEqual;
