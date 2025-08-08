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
exports.mapToPriceList = void 0;
var xorObjFields_1 = require("../../../../../../utils/xorObjFields");
var mapToPriceList = function (values, variantId) {
    return values.prices
        .map(function (price) { return (__assign(__assign({ id: price.id }, (0, xorObjFields_1.default)(price, "currency_code", "region_id")), { amount: price.amount, min_quantity: price.min_quantity, max_quantity: price.max_quantity, variant_id: variantId })); })
        .filter(function (pr) { return pr.amount > 0; });
};
exports.mapToPriceList = mapToPriceList;
