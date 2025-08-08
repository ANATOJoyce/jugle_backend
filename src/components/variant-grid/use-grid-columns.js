"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGridColumns = void 0;
var lodash_1 = require("lodash");
var useGridColumns = function (product, isEditing) {
    var defaultFields = [
        { header: "Title", field: "title" },
        { header: "SKU", field: "sku" },
        { header: "EAN", field: "ean" },
        { header: "Inventory", field: "inventory_quantity" },
    ];
    if (isEditing) {
        var optionColumns = product.options.map(function (o) { return ({
            header: o.title,
            field: "options",
            formatter: function (variantOptions) {
                var displayVal = variantOptions.find(function (val) { return val.option_id === o.id; });
                return (displayVal === null || displayVal === void 0 ? void 0 : displayVal.value) || " - ";
            },
        }); });
        return __spreadArray(__spreadArray(__spreadArray([], optionColumns, true), [
            {
                header: "Prices",
                field: "prices",
                formatter: function (prices) { return "".concat(prices.length, " price(s)"); },
            }
        ], false), defaultFields, true);
    }
    else {
        return __spreadArray([
            {
                header: "Variant",
                field: "options",
                formatter: function (value) {
                    var options = value.map(function (v) {
                        if (v.value) {
                            return (0, lodash_1.capitalize)(v.value);
                        }
                        return (0, lodash_1.capitalize)(v);
                    });
                    return options.join(" / ");
                },
                readOnly: true,
                headCol: true,
            }
        ], defaultFields, true);
    }
};
exports.useGridColumns = useGridColumns;
