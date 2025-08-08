"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthNames = exports.getYearRange = exports.range = void 0;
var range = function (start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};
exports.range = range;
var getYearRange = function (step) {
    if (step === void 0) { step = 20; }
    return (0, exports.range)(new Date().getFullYear() - step, new Date().getFullYear() + step);
};
exports.getYearRange = getYearRange;
exports.monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
