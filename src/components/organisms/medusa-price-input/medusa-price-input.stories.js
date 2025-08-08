"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var currencies_1 = require("../../../utils/currencies");
var _1 = require("./");
function C(args) {
    return (<_1.default {...args} currency={currencies_1.currencies[args.currency]} onChange={console.log}/>);
}
exports.default = {
    title: "Organisms/MedusaPriceInput",
    component: _1.default,
    argTypes: {
        amount: {
            description: "Amount as received from the medusa server. Try both non-divisible and divisible currencies",
        },
        currency: {
            description: "desc",
            control: {
                type: "select",
            },
            options: Object.values(currencies_1.currencies).map(function (c) { return c.code; }),
        },
    },
};
var Template = function (args) { return <C {...args}/>; };
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    amount: 1999,
};
