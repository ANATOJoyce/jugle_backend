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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOptionsMap = void 0;
var buildOptionsMap = function (product, variant) {
    var _a, _b;
    if (variant === void 0) { variant = { options: [] }; }
    var optionsMap = (_a = product === null || product === void 0 ? void 0 : product.options) === null || _a === void 0 ? void 0 : _a.reduce(function (map, _a) {
        var title = _a.title, id = _a.id;
        map[id] = { title: title, value: "", option_id: id };
        return map;
    }, {});
    (_b = variant === null || variant === void 0 ? void 0 : variant.options) === null || _b === void 0 ? void 0 : _b.forEach(function (_a) {
        var option_id = _a.option_id, option = __rest(_a, ["option_id"]);
        if (option_id) {
            optionsMap[option_id] = __assign(__assign(__assign({}, optionsMap[option_id]), { option_id: option_id }), option);
        }
    });
    return optionsMap;
};
exports.buildOptionsMap = buildOptionsMap;
