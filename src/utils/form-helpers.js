"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForDirtyState = exports.numberOrNull = exports.stringOrNull = void 0;
var stringOrNull = function (value) {
    return value === "" ? null : value;
};
exports.stringOrNull = stringOrNull;
var numberOrNull = function (value) {
    var tmp = parseInt(value, 10);
    return isNaN(tmp) ? null : tmp;
};
exports.numberOrNull = numberOrNull;
var checkForDirtyState = function (dirtyFields, otherValues) {
    var otherDirtyState = otherValues
        ? Object.values(otherValues).some(function (v) { return v; })
        : false;
    return !!Object.keys(dirtyFields).length || otherDirtyState;
};
exports.checkForDirtyState = checkForDirtyState;
