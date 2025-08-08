"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRegionOptions = extractRegionOptions;
exports.extractProductOptions = extractProductOptions;
function extractRegionOptions(regions) {
    if (!regions) {
        return [];
    }
    return regions.map(function (region) { return ({
        label: region.name,
        value: region.id,
        currency: region.currency_code,
    }); });
}
function extractProductOptions(products) {
    if (!products) {
        return [];
    }
    return products.map(function (product) { return ({
        label: product.title,
        value: product.id,
    }); });
}
