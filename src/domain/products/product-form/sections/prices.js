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
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../../components/fundamentals/button");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var body_card_1 = require("../../../../components/organisms/body-card");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var product_form_context_1 = require("../form/product-form-context");
var usePricesFieldArray_1 = require("../form/usePricesFieldArray");
var Prices = function (_a) {
    var currencyCodes = _a.currencyCodes, defaultCurrencyCode = _a.defaultCurrencyCode, defaultAmount = _a.defaultAmount;
    var _b = (0, product_form_context_1.useProductForm)(), register = _b.register, control = _b.control;
    var _c = (0, usePricesFieldArray_1.default)(currencyCodes, {
        control: control,
        name: "prices",
        keyName: "indexId",
    }, {
        defaultAmount: defaultAmount,
        defaultCurrencyCode: defaultCurrencyCode,
    }), fields = _c.fields, appendPrice = _c.appendPrice, deletePrice = _c.deletePrice, availableCurrencies = _c.availableCurrencies;
    return (<body_card_1.default title="Pricing" subtitle="Give products a price for each of the currencies that you sell in">
      <div className="mt-base">
        <h6 className="inter-base-semibold text-grey-90 mr-1.5">Prices</h6>

        <div className="max-w-[630px]">
          {fields.map(function (field, index) {
            return (<div key={field.indexId} className="last:mb-0 mb-xsmall flex items-center">
                <div className="flex-1">
                  <react_hook_form_1.Controller control={control} key={field.indexId} name={"prices[".concat(index, "].price")} ref={register()} defaultValue={field.price} render={function (_a) {
                    var onChange = _a.onChange, value = _a.value;
                    var codes = __spreadArray([
                        value === null || value === void 0 ? void 0 : value.currency_code
                    ], availableCurrencies, true);
                    codes.sort();
                    return (<currency_input_1.default currencyCodes={codes} currentCurrency={value === null || value === void 0 ? void 0 : value.currency_code} size="medium" readOnly={index === 0} onChange={function (code) {
                            return onChange(__assign(__assign({}, value), { currency_code: code }));
                        }}>
                          <currency_input_1.default.AmountInput label="Amount" onChange={function (amount) {
                            return onChange(__assign(__assign({}, value), { amount: amount }));
                        }} amount={value === null || value === void 0 ? void 0 : value.amount}/>
                        </currency_input_1.default>);
                }}/>
                </div>
                {index !== 0 ? (<button className="ml-large">
                    <trash_icon_1.default onClick={deletePrice(index)} className="text-grey-40" size="20"/>
                  </button>) : null}
              </div>);
        })}
          <div className="mt-large mb-small">
            <button_1.default onClick={appendPrice} type="button" variant="ghost" size="small" disabled={(availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) === 0}>
              <plus_icon_1.default size={20}/>
              Add a price
            </button_1.default>
          </div>
        </div>
      </div>
    </body_card_1.default>);
};
exports.default = Prices;
