"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_currency_input_field_1 = require("react-currency-input-field");
/**
 * A controlled input component that renders the formatted amount
 * and the currency of the provided price.
 */
function PriceInput(props) {
    var amount = props.amount, currency = props.currency, onAmountChange = props.onAmountChange;
    var code = currency.code, symbol_native = currency.symbol_native, decimal_digits = currency.decimal_digits;
    /** ******** COMPUTED **********/
    var step = Math.pow(10, -decimal_digits);
    var rightOffset = 24 + symbol_native.length * 4;
    var placeholder = "0.".concat("0".repeat(decimal_digits));
    /** ******** HANDLERS **********/
    var onChange = function (value) {
        onAmountChange(value);
    };
    return (<div className="w-[314px] relative">
      <div className="absolute flex items-center h-full top-0 left-3">
        <span className="text-small text-grey-40 mt-[1px]">{code}</span>
      </div>

      <react_currency_input_field_1.default step={step} value={amount} onValueChange={onChange} allowNegativeValue={false} placeholder={placeholder} decimalScale={decimal_digits} style={{ paddingRight: rightOffset }} className="focus:bg-white focus:border-violet-6
            border border-solid border-grey-20
            w-full h-[40px]
            py-[10px] pl-12
            rounded-lg
            bg-grey-5
            text-gray-90
            text-right
            text-small"/>

      <div className="absolute flex items-center h-full top-0 right-3">
        <span className="text-small text-grey-40 mt-[1px]">
          {symbol_native}
        </span>
      </div>
    </div>);
}
exports.default = PriceInput;
