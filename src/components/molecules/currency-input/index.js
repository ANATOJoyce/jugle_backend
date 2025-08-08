"use strict";
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
var clsx_1 = require("clsx");
var react_1 = require("react");
var currencies_1 = require("../../../utils/currencies");
var input_1 = require("../input");
var select_1 = require("../select");
var CurrencyInput = function (_a) {
    var options = _a.options, currentCurrency = _a.currentCurrency, _b = _a.required, required = _b === void 0 ? false : _b, onCurrencyChange = _a.onCurrencyChange, className = _a.className, name = _a.name, props = __rest(_a, ["options", "currentCurrency", "required", "onCurrencyChange", "className", "name"]);
    var initialRender = (0, react_1.useRef)(true);
    var isSelectable = options ? true : false;
    var opts = (0, react_1.useMemo)(function () {
        var codes = options
            ? options.map(function (o) { return o.toLowerCase(); })
            : [currentCurrency === null || currentCurrency === void 0 ? void 0 : currentCurrency.toLowerCase()];
        return (Object.entries(currencies_1.currencies)
            .filter(function (_a) {
            var _key = _a[0], obj = _a[1];
            return codes.includes(obj.code.toLowerCase());
        })
            .map(function (_a) {
            var _b = _a["1"], code = _b.code, symbol_native = _b.symbol_native, decimal_digits = _b.decimal_digits;
            return ({
                value: code.toLowerCase(),
                label: "".concat(code.toUpperCase()),
                symbol: symbol_native,
                digits: decimal_digits,
            });
        })
            .filter(Boolean) || []);
    }, [options, currencies_1.currencies, currentCurrency]);
    var _c = (0, react_1.useState)(opts.find(function (_a) {
        var value = _a.value;
        return value === (currentCurrency === null || currentCurrency === void 0 ? void 0 : currentCurrency.toLowerCase());
    })), selected = _c[0], setSelected = _c[1];
    (0, react_1.useEffect)(function () {
        if (onCurrencyChange && !initialRender.current) {
            onCurrencyChange(selected);
        }
        initialRender.current = false;
    }, [selected]);
    return isSelectable ? (<select_1.default enableSearch label="Currency" options={opts} value={selected} onChange={setSelected} className={className} required={required} name={name} {...props}/>) : (<input_1.default label="Currency" readOnly className={(0, clsx_1.default)("pointer-events-none", className)} value={undefined} placeholder={"".concat(selected === null || selected === void 0 ? void 0 : selected.label)} tabIndex={-1}/>);
};
exports.default = CurrencyInput;
