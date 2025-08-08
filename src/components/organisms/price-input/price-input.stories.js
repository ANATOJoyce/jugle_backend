"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var index_1 = require("./index");
var currencies_1 = require("../../../utils/currencies");
function C(args) {
    var _a = (0, react_1.useState)(), amount = _a[0], setAmount = _a[1];
    return <index_1.default {...args} amount={amount} onAmountChange={setAmount}/>;
}
exports.default = {
    title: "Organisms/PriceInput",
    component: index_1.default,
};
var Template = function (args) { return <C {...args}/>; };
exports.Default = Template.bind({});
exports.Default.args = {
    currency: currencies_1.currencies.BHD,
};
