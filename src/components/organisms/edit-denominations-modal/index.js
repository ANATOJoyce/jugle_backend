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
var lodash_1 = require("lodash");
var React = require("react");
var uuid_1 = require("uuid");
var button_1 = require("../../fundamentals/button");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../molecules/icon-tooltip");
var modal_1 = require("../../molecules/modal");
var currency_input_1 = require("../../organisms/currency-input");
var EditDenominationsModal = function (_a) {
    var _b = _a.defaultDenominations, defaultDenominations = _b === void 0 ? [] : _b, onSubmit = _a.onSubmit, handleClose = _a.handleClose, _c = _a.currencyCodes, currencyCodes = _c === void 0 ? [] : _c, _d = _a.defaultNewAmount, defaultNewAmount = _d === void 0 ? 1000 : _d;
    var _e = React.useState(augmentWithIds(defaultDenominations)), denominations = _e[0], setDenominations = _e[1];
    var selectedCurrencies = denominations.map(function (denomination) { return denomination.currency_code; });
    var availableCurrencies = currencyCodes === null || currencyCodes === void 0 ? void 0 : currencyCodes.filter(function (currency) { return !selectedCurrencies.includes(currency); });
    var onAmountChange = function (index) {
        return function (amount) {
            var newDenominations = denominations.slice();
            newDenominations[index] = __assign(__assign({}, newDenominations[index]), { amount: amount });
            setDenominations(newDenominations);
        };
    };
    var onCurrencyChange = function (index) {
        return function (currencyCode) {
            var newDenominations = denominations.slice();
            newDenominations[index] = __assign(__assign({}, newDenominations[index]), { currency_code: currencyCode });
            setDenominations(newDenominations);
        };
    };
    var onClickDelete = function (index) {
        return function () {
            var newDenominations = denominations.slice();
            newDenominations.splice(index, 1);
            setDenominations(newDenominations);
        };
    };
    var appendDenomination = function () {
        var newDenomination = {
            amount: defaultNewAmount,
            currency_code: availableCurrencies[0],
        };
        setDenominations(__spreadArray(__spreadArray([], denominations, true), [augmentWithId(newDenomination)], false));
    };
    var submitHandler = function () {
        var strippedDenominations = stripDenominationFromIndexId(denominations);
        if (onSubmit) {
            onSubmit(strippedDenominations);
        }
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Edit Denominations</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="pt-1">
            <div className="flex items-center">
              <label className="inter-base-semibold text-grey-90 mr-1.5">
                Prices
              </label>
              <icon_tooltip_1.default content={"Helpful denominations"}/>
            </div>
            {denominations.map(function (field, index) {
            return (<div key={field.indexId} className="first:mt-0 mt-xsmall flex items-center">
                  <div className="flex-1">
                    <currency_input_1.default currencyCodes={currencyCodes} currentCurrency={field.currency_code} onChange={onCurrencyChange(index)} size="medium">
                      <currency_input_1.default.AmountInput label="Amount" onChange={onAmountChange(index)} amount={field.amount}/>
                    </currency_input_1.default>
                  </div>
                  <button className="ml-2xlarge">
                    <trash_icon_1.default onClick={onClickDelete(index)} className="text-grey-40" size="20"/>
                  </button>
                </div>);
        })}
          </div>
          <div className="mt-large">
            <button_1.default onClick={appendDenomination} type="button" variant="ghost" size="small" disabled={availableCurrencies.length === 0}>
              <plus_icon_1.default size={20}/>
              Add a price
            </button_1.default>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2 min-w-[130px] justify-center">
              Cancel
            </button_1.default>
            <button_1.default variant="primary" size="small" className="mr-2 min-w-[130px] justify-center" onClick={submitHandler}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = EditDenominationsModal;
var augmentWithId = function (obj) { return (__assign(__assign({}, obj), { indexId: (0, uuid_1.v4)() })); };
var augmentWithIds = function (list) {
    return list.map(augmentWithId);
};
var stripDenominationFromIndexId = function (list) {
    return list.map(function (element) { return lodash_1.default.omit(element, "indexId"); });
};
