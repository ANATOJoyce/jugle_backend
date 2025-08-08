"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasValue = exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/GeneratingInput",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Code",
    required: true,
    placeholder: "MEDUSA15",
};
exports.HasValue = Template.bind({});
exports.HasValue.args = {
    label: "Code",
    required: true,
    placeholder: "MEDUSA15",
    value: "SUMMER2014",
};
