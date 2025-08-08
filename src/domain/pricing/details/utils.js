"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeExistingWithDefault = void 0;
var mergeExistingWithDefault = function (variantPrices, defaultPrices) {
    if (variantPrices === void 0) { variantPrices = []; }
    return defaultPrices.map(function (pr) {
        var price = variantPrices.find(function (vpr) { return (vpr === null || vpr === void 0 ? void 0 : vpr.currency_code) === pr.currency_code; });
        return price || pr;
    });
};
exports.mergeExistingWithDefault = mergeExistingWithDefault;
