"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var price_input_1 = require("../price-input");
/**
 * A controlled input component that wraps around PriceInput and renders the amount
 * and the currency of the provided price coming from a medusa server.
 */
function MedusaPriceInput(props) {
    var _a = React.useState("".concat(props.amount || 0)), rawValue = _a[0], setRawValue = _a[1];
    var amount = props.amount, currency = props.currency, onChange = props.onChange;
    var decimal_digits = currency.decimal_digits;
    React.useEffect(function () {
        var value = amount / Math.pow(10, decimal_digits);
        setRawValue("".concat(value));
    }, [amount, decimal_digits]);
    /** ******** HANDLERS **********/
    var onAmountChange = function (value) {
        if (value) {
            var numericalValue = Math.round(parseFloat(value) * Math.pow(10, decimal_digits));
            onChange(numericalValue);
        }
        else {
            onChange(0);
        }
        setRawValue(value);
    };
    return (<price_input_1.default amount={rawValue} onAmountChange={onAmountChange} currency={currency}/>);
}
exports.default = MedusaPriceInput;
