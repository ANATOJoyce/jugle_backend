"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRateType = exports.ProductStatus = void 0;
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["DRAFT"] = "draft";
    ProductStatus["PROPOSED"] = "proposed";
    ProductStatus["PUBLISHED"] = "published";
    ProductStatus["REJECTED"] = "rejected";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var TaxRateType;
(function (TaxRateType) {
    TaxRateType["REGION"] = "region";
    TaxRateType["RATE"] = "rate";
})(TaxRateType || (exports.TaxRateType = TaxRateType = {}));
