"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOnly = exports.CalculatedRate = exports.FlatRate = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/ShippingOption",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.FlatRate = Template.bind({});
exports.FlatRate.args = {
    option: {
        name: "Standard",
        amount: 1000,
        price_type: "flat_rate",
        requirements: [
            { type: "max_subtotal", amount: 10000 },
            { type: "min_subtotal", amount: 0 },
        ],
        admin_only: false,
        data: {
            name: "FedEx",
        },
    },
    currency_code: "USD",
    editFn: function () { },
};
exports.CalculatedRate = Template.bind({});
exports.CalculatedRate.args = {
    option: {
        name: "Standard",
        amount: 1000,
        price_type: "calculated",
        requirements: [
            { type: "max_subtotal", amount: 10000 },
            { type: "min_subtotal", amount: 0 },
        ],
        admin_only: false,
        data: {
            name: "FedEx",
        },
    },
    currency_code: "USD",
    editFn: function () { },
};
exports.AdminOnly = Template.bind({});
exports.AdminOnly.args = {
    option: {
        name: "Standard",
        amount: 1000,
        price_type: "calculated",
        requirements: [],
        admin_only: true,
        data: {
            name: "FedEx",
        },
    },
    currency_code: "USD",
    editFn: function () { },
};
