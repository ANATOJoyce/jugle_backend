"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var units = [
    ["day", "d", 86400000],
    ["hour", "h", 3600000],
    ["minute", "m", 60000],
];
var getRelativeTime = function (dates) {
    var elapsed = new Date(dates.to).getTime() - new Date(dates.from).getTime();
    for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
        var _a = units_1[_i], unit = _a[0], displayedUnit = _a[1], amount = _a[2];
        if (Math.abs(elapsed) >= amount || unit === "minute") {
            var isLessThan1Min = Math.abs(elapsed) <= amount && unit === "minute";
            var suffix = elapsed <= 0 ? "ago" : "";
            var prefix = elapsed > 0 ? "in" : "";
            var indicator = Math.abs(elapsed) < 1 ? "<" : "";
            var timeToShow = Math.max(1, Math.abs(Math.round(elapsed / amount)));
            return {
                raw: elapsed,
                rtf: "\n          ".concat(indicator).concat(prefix ? prefix + " " : "", "\n          ").concat((isLessThan1Min ? "< " : ""), " \n          ").concat(timeToShow).concat(displayedUnit, " \n          ").concat(suffix, "\n        ")
            };
        }
    }
    return { raw: 0, rtf: "" };
};
exports.default = getRelativeTime;
