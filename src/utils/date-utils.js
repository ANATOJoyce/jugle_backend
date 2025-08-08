"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekFromNow = void 0;
var weekFromNow = function () {
    var now = new Date();
    var weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return weekFromNow;
};
exports.weekFromNow = weekFromNow;
