"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesConverter = bytesConverter;
var units = [
    ["B", 1],
    ["Kb", 1000],
    ["Mb", 1000000],
    ["Gb", 1000000000]
];
function bytesConverter(size) {
    var result = undefined;
    for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
        var _a = units_1[_i], unit = _a[0], divider = _a[1];
        if (size >= divider) {
            result = "".concat((size / divider).toFixed(2), " ").concat(unit);
        }
    }
    return result;
}
