"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithAmount = exports.ReadOnly = exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Organisms/CurrencyInput",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Default = Template.bind({});
exports.Default.args = {
    currentCurrency: "usd",
    currencyCodes: ["usd", "eur", "gbp"],
};
exports.ReadOnly = Template.bind({});
exports.ReadOnly.args = {
    currentCurrency: "usd",
    readOnly: true,
};
var TemplateWithAmount = function (args) { return (<_1.default {...args.currencyArgs}>
    <_1.default.AmountInput {...args.amountArgs}></_1.default.AmountInput>
  </_1.default>); };
exports.WithAmount = TemplateWithAmount.bind({});
exports.WithAmount.args = {
    currencyArgs: {
        currentCurrency: "usd",
        currencyCodes: ["usd", "eur", "krw"],
        size: "small",
    },
    amountArgs: {
        label: "Price",
        amount: 10000,
    },
};
