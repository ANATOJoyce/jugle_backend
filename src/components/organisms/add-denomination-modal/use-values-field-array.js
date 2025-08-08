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
exports.useValuesFieldArray = void 0;
var react_hook_form_1 = require("react-hook-form");
var useValuesFieldArray = function (currencyCodes, _a, options) {
    var control = _a.control, name = _a.name, keyName = _a.keyName;
    if (options === void 0) { options = {
        defaultAmount: 1000,
        defaultCurrencyCode: "usd",
    }; }
    var defaultAmount = options.defaultAmount;
    var _b = (0, react_hook_form_1.useFieldArray)({
        control: control,
        name: name,
        keyName: keyName,
    }), fields = _b.fields, append = _b.append, remove = _b.remove;
    var watchedFields = (0, react_hook_form_1.useWatch)({
        control: control,
        name: name,
        defaultValue: fields,
    });
    var selectedCurrencies = watchedFields.map(function (field) { var _a; return (_a = field === null || field === void 0 ? void 0 : field.price) === null || _a === void 0 ? void 0 : _a.currency_code; });
    var availableCurrencies = currencyCodes === null || currencyCodes === void 0 ? void 0 : currencyCodes.filter(function (currency) { return !selectedCurrencies.includes(currency); });
    var controlledFields = fields.map(function (field, index) {
        return __assign(__assign({}, field), watchedFields[index]);
    });
    var appendPrice = function () {
        var newCurrency = availableCurrencies[0];
        append({
            price: {
                currency_code: newCurrency,
                amount: defaultAmount,
            },
        });
    };
    var deletePrice = function (index) {
        return function () {
            remove(index);
        };
    };
    return {
        fields: controlledFields,
        appendPrice: appendPrice,
        deletePrice: deletePrice,
        availableCurrencies: availableCurrencies,
        selectedCurrencies: selectedCurrencies,
    };
};
exports.useValuesFieldArray = useValuesFieldArray;
