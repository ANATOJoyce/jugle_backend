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
var react_currency_input_field_1 = require("react-currency-input-field");
var currencies_1 = require("../../../utils/currencies");
var prices_1 = require("../../../utils/prices");
var tooltip_1 = require("../../atoms/tooltip");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var input_1 = require("../../molecules/input");
var select_1 = require("../../molecules/select");
var CurrencyContext = react_1.default.createContext({
    currencyInfo: undefined,
});
var getCurrencyInfo = function (currencyCode) {
    if (!currencyCode) {
        return undefined;
    }
    var currencyInfo = currencies_1.currencies[currencyCode.toUpperCase()];
    return currencyInfo;
};
var CurrencyInput = function (_a) {
    var _b;
    var currentCurrency = _a.currentCurrency, currencyCodes = _a.currencyCodes, _c = _a.size, size = _c === void 0 ? "full" : _c, _d = _a.readOnly, readOnly = _d === void 0 ? false : _d, _e = _a.hideCurrency, hideCurrency = _e === void 0 ? false : _e, onChange = _a.onChange, children = _a.children, className = _a.className;
    var options = (_b = currencyCodes === null || currencyCodes === void 0 ? void 0 : currencyCodes.map(function (code) { return ({
        label: code.toUpperCase(),
        value: code,
    }); })) !== null && _b !== void 0 ? _b : [];
    var _f = (0, react_1.useState)(getCurrencyInfo(currentCurrency)), selectedCurrency = _f[0], setSelectedCurrency = _f[1];
    var _g = (0, react_1.useState)(currentCurrency
        ? {
            label: currentCurrency.toUpperCase(),
            value: currentCurrency,
        }
        : null), value = _g[0], setValue = _g[1];
    (0, react_1.useEffect)(function () {
        if (currentCurrency) {
            setSelectedCurrency(getCurrencyInfo(currentCurrency));
            setValue({
                label: currentCurrency.toUpperCase(),
                value: currentCurrency,
            });
        }
    }, [currentCurrency]);
    var onCurrencyChange = function (currency) {
        // Should not be nescessary, but the component we use for select input
        // has a bug where it passes a null object if you click on the label
        // of the already selected value
        if (!currency) {
            return;
        }
        setValue(currency);
        setSelectedCurrency(getCurrencyInfo(currency.value));
        if (onChange) {
            onChange(currency.value);
        }
    };
    return (<CurrencyContext.Provider value={{
            currencyInfo: selectedCurrency,
        }}>
      <div className={(0, clsx_1.default)("flex items-center gap-x-2xsmall", className)}>
        {!hideCurrency && (<div className={(0, clsx_1.default)({ "w-[144px]": size === "medium" }, { "w-[120px]": size === "small" }, { "flex-1": size === "full" })}>
            {!readOnly ? (<select_1.default enableSearch label="Currency" value={value} onChange={onCurrencyChange} options={options} disabled={readOnly}/>) : (<input_1.default label="Currency" value={value === null || value === void 0 ? void 0 : value.label} readOnly className="pointer-events-none" tabIndex={-1}/>)}
          </div>)}
        {children && <div className="flex-1">{children}</div>}
      </div>
    </CurrencyContext.Provider>);
};
var AmountInput = function (_a) {
    var label = _a.label, _b = _a.required, required = _b === void 0 ? false : _b, amount = _a.amount, _c = _a.step, step = _c === void 0 ? 1 : _c, _d = _a.allowNegative, allowNegative = _d === void 0 ? false : _d, onChange = _a.onChange, onValidate = _a.onValidate, invalidMessage = _a.invalidMessage, rest = __rest(_a, ["label", "required", "amount", "step", "allowNegative", "onChange", "onValidate", "invalidMessage"]);
    var currencyInfo = (0, react_1.useContext)(CurrencyContext).currencyInfo;
    var _e = (0, react_1.useState)(false), invalid = _e[0], setInvalid = _e[1];
    var _f = (0, react_1.useState)(amount ? "".concat((0, prices_1.normalizeAmount)(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.code, amount)) : undefined), value = _f[0], setValue = _f[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event("blur"));
    }, [currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.decimal_digits]);
    (0, react_1.useEffect)(function () {
        if (currencyInfo && amount) {
            setValue("".concat((0, prices_1.normalizeAmount)(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.code, amount)));
        }
    }, [amount]);
    var handleChange = function (value) {
        var persistedAmount = undefined;
        if (!value) {
            value = 0;
        }
        if (currencyInfo) {
            var amount_1 = parseFloat(value);
            var multiplier = (0, prices_1.getDecimalDigits)(currencyInfo.code);
            persistedAmount = multiplier * amount_1;
        }
        if (onChange && typeof persistedAmount !== "undefined") {
            var updateAmount = Math.round(persistedAmount);
            var update = true;
            if (onValidate) {
                update = onValidate(updateAmount);
            }
            if (update) {
                onChange(updateAmount);
                setValue("".concat(value));
                setInvalid(false);
            }
            else {
                setInvalid(true);
            }
        }
    };
    var handleManualValueChange = function (val) {
        var newValue = parseFloat(value !== null && value !== void 0 ? value : "0") + val;
        if (!allowNegative && newValue < 0) {
            return;
        }
        handleChange("".concat(newValue));
    };
    return (<input_container_1.default onClick={function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }} {...rest}>
      <input_header_1.default label={label} required={required}/>
      <div className="flex items-center mt-2xsmall">
        {(currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.symbol_native) && (<tooltip_1.default open={invalid} side={"top"} content={invalidMessage || "Amount is not valid"}>
            <span className="inter-base-regular text-grey-40 mr-xsmall">
              {currencyInfo.symbol_native}
            </span>
          </tooltip_1.default>)}
        <react_currency_input_field_1.default className="bg-inherit outline-none outline-0 w-full remove-number-spinner leading-base text-grey-90 font-normal caret-violet-60 placeholder-grey-40" decimalScale={currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.decimal_digits} value={value} onValueChange={handleChange} ref={inputRef} step={step} allowNegativeValue={allowNegative} placeholder="0.00"/>
        <div className="flex self-end">
          <button className="mr-2 text-grey-50 w-4 h-4 hover:bg-grey-10 rounded-soft cursor-pointer" type="button" onClick={function () { return handleManualValueChange(-step); }}>
            <minus_icon_1.default size={16}/>
          </button>
          <button type="button" className="text-grey-50 w-4 h-4 hover:bg-grey-10 rounded-soft cursor-pointer" onClick={function () { return handleManualValueChange(step); }}>
            <plus_icon_1.default size={16}/>
          </button>
        </div>
      </div>
    </input_container_1.default>);
};
CurrencyInput.AmountInput = AmountInput;
exports.default = CurrencyInput;
