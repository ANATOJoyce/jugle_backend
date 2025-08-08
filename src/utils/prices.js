"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNormalizedAmount = exports.getNativeSymbol = exports.stringDisplayPrice = exports.extractOptionPrice = exports.displayUnitPrice = exports.extractUnitPrice = void 0;
exports.normalizeAmount = normalizeAmount;
exports.displayAmount = displayAmount;
exports.getDecimalDigits = getDecimalDigits;
exports.persistedPrice = persistedPrice;
exports.formatAmountWithSymbol = formatAmountWithSymbol;
var currencies_1 = require("./currencies");
function normalizeAmount(currency, amount) {
    var divisor = getDecimalDigits(currency);
    return Math.floor(amount) / divisor;
}
function displayAmount(currency, amount) {
    var normalizedAmount = normalizeAmount(currency, amount);
    return normalizedAmount.toFixed(currencies_1.currencies[currency.toUpperCase()].decimal_digits);
}
var extractUnitPrice = function (item, region, withTax) {
    if (withTax === void 0) { withTax = true; }
    var itemPrice = item.unit_price;
    if (itemPrice === undefined) {
        var regionPrice = item.prices.find(function (p) { return p.currency_code === region.currency_code; });
        itemPrice = regionPrice.amount;
    }
    if (itemPrice) {
        if (withTax) {
            return itemPrice * (1 + region.tax_rate / 100);
        }
        else {
            return itemPrice;
        }
    }
    return 0;
};
exports.extractUnitPrice = extractUnitPrice;
var displayUnitPrice = function (item, region) {
    var currCode = region.currency_code.toUpperCase();
    var price = (0, exports.extractUnitPrice)(item, region);
    return "".concat(displayAmount(currCode, price), " ").concat(currCode);
};
exports.displayUnitPrice = displayUnitPrice;
var extractOptionPrice = function (price, region) {
    var amount = price;
    amount = (amount * (1 + region.tax_rate / 100)) / 100;
    return "".concat(amount, " ").concat(region.currency_code.toUpperCase());
};
exports.extractOptionPrice = extractOptionPrice;
/**
 * Checks the list of currencies and returns the divider/multiplier
 * that should be used to calculate the persited and display amount.
 * @param currency
 * @return {number}
 */
function getDecimalDigits(currency) {
    var divisionDigits = currencies_1.currencies[currency.toUpperCase()].decimal_digits;
    return Math.pow(10, divisionDigits);
}
function persistedPrice(currency, amount) {
    var multiplier = getDecimalDigits(currency);
    return amount * multiplier;
}
var stringDisplayPrice = function (_a) {
    var amount = _a.amount, currencyCode = _a.currencyCode;
    if (!amount || !currencyCode) {
        return "N/A";
    }
    var display = displayAmount(currencyCode, amount);
    return "".concat(display, " ").concat(currencyCode.toUpperCase());
};
exports.stringDisplayPrice = stringDisplayPrice;
var getNativeSymbol = function (currencyCode) {
    return currencies_1.currencies[currencyCode.toUpperCase()].symbol_native;
};
exports.getNativeSymbol = getNativeSymbol;
function formatAmountWithSymbol(_a) {
    var amount = _a.amount, currency = _a.currency, digits = _a.digits, _b = _a.tax, tax = _b === void 0 ? 0 : _b;
    var locale = "en-US";
    // We need this to display 'Kr' instead of 'DKK'
    if (currency.toLowerCase() === "dkk") {
        locale = "da-DK";
    }
    digits = digits !== null && digits !== void 0 ? digits : currencies_1.currencies[currency.toUpperCase()].decimal_digits;
    var normalizedAmount = normalizeAmount(currency, amount);
    var taxRate = tax instanceof Array ? tax.reduce(function (acc, curr) { return acc + curr.rate; }, 0) : tax;
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: digits,
    }).format(normalizedAmount * (1 + taxRate / 100));
}
var extractNormalizedAmount = function (amounts, order) {
    var amount = amounts.find(function (ma) { return ma.region_id === order.region_id; });
    if (!amount) {
        amount = amounts.find(function (ma) { return ma.currency_code === order.currency_code; });
    }
    if (amount) {
        return normalizeAmount(order.currency_code, amount.amount);
    }
    return 0;
};
exports.extractNormalizedAmount = extractNormalizedAmount;
