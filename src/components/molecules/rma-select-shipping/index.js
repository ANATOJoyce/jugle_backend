"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var currency_input_1 = require("../../organisms/currency-input");
var RMAShippingPrice = function (_a) {
    var useCustomShippingPrice = _a.useCustomShippingPrice, inclTax = _a.inclTax, shippingPrice = _a.shippingPrice, currencyCode = _a.currencyCode, updateShippingPrice = _a.updateShippingPrice, setUseCustomShippingPrice = _a.setUseCustomShippingPrice;
    return useCustomShippingPrice ? (<div className="flex items-center mt-4">
      <currency_input_1.default readOnly size="small" currentCurrency={currencyCode} className="w-full">
        <currency_input_1.default.AmountInput label={"Amount (".concat(inclTax ? "incl." : "excl.", " tax)")} amount={shippingPrice} onChange={updateShippingPrice}/>
      </currency_input_1.default>
      <button_1.default onClick={function () { return setUseCustomShippingPrice(false); }} className="w-8 h-8 ml-8 text-grey-40" variant="ghost" size="small">
        <trash_icon_1.default size={20}/>
      </button_1.default>
    </div>) : (<div className="flex w-full mt-4 justify-end">
      <button_1.default onClick={function () { return setUseCustomShippingPrice(true); }} variant="ghost" className="border border-grey-20" size="small">
        Add custom price
      </button_1.default>
    </div>);
};
exports.default = RMAShippingPrice;
