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
exports.mapFormValuesToUpdatePriceListPrices = exports.mapFormValuesToUpdatePriceListDetails = exports.mapFormValuesToCreatePriceList = exports.mapPriceListToFormValues = void 0;
var xorObjFields_1 = require("../../../../utils/xorObjFields");
var types_1 = require("../types");
var mapPriceListToFormValues = function (priceList) {
    return {
        description: priceList.description,
        type: priceList.type,
        name: priceList.name,
        ends_at: priceList.ends_at ? new Date(priceList.ends_at) : null,
        starts_at: priceList.starts_at ? new Date(priceList.starts_at) : null,
        prices: priceList.prices.map(function (p) { return ({
            amount: p.amount,
            max_quantity: p.max_quantity,
            min_quantity: p.min_quantity,
            variant_id: p.variant_id,
            currency_code: p.currency_code,
            region_id: p.region_id,
        }); }),
        customer_groups: priceList.customer_groups.map(function (pl) { return ({
            label: pl.name,
            value: pl.id,
        }); }),
    };
};
exports.mapPriceListToFormValues = mapPriceListToFormValues;
var mapFormValuesToCreatePriceList = function (values, status) {
    var prices;
    if (values.prices) {
        prices = Object.entries(values.prices)
            .map(function (_a) {
            var variantId = _a[0], price = _a[1];
            return price.map(function (pr) { return (__assign(__assign({ variant_id: variantId, amount: pr.amount }, (0, xorObjFields_1.default)(pr, "currency_code", "region_id")), { min_quantity: pr.min_quantity, max_quantity: pr.max_quantity })); });
        })
            .flat(1);
    }
    return {
        description: values.description,
        name: values.name,
        type: types_1.PriceListType.SALE,
        status: status,
        customer_groups: values.customer_groups
            ? values.customer_groups.map(function (cg) { return ({ id: cg.value }); })
            : undefined,
        ends_at: values.ends_at || undefined,
        starts_at: values.starts_at || undefined,
        prices: prices,
    };
};
exports.mapFormValuesToCreatePriceList = mapFormValuesToCreatePriceList;
var mapFormValuesToUpdatePriceListDetails = function (values) {
    return {
        name: values.name || undefined,
        description: values.description || undefined,
        customer_groups: values.customer_groups
            ? values.customer_groups.map(function (cg) { return ({ id: cg.value }); })
            : [],
        ends_at: values.ends_at,
        starts_at: values.starts_at,
        type: values.type || undefined,
    };
};
exports.mapFormValuesToUpdatePriceListDetails = mapFormValuesToUpdatePriceListDetails;
var mapFormValuesToUpdatePriceListPrices = function (values) {
    var prices;
    if (values.prices) {
        prices = Object.entries(values.prices)
            .map(function (_a) {
            var variantId = _a[0], price = _a[1];
            return price.map(function (pr) { return (__assign(__assign({ variant_id: variantId, amount: pr.amount }, (0, xorObjFields_1.default)(pr, "currency_code", "region_id")), { min_quantity: pr.min_quantity, max_quantity: pr.max_quantity })); });
        })
            .flat(1);
        return {
            prices: prices,
        };
    }
};
exports.mapFormValuesToUpdatePriceListPrices = mapFormValuesToUpdatePriceListPrices;
