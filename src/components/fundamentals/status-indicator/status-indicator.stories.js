"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = exports.Warning = exports.Danger = exports.Success = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Fundamentals/StatusIndicator",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.Success = Template.bind({});
exports.Success.args = {
    variant: "success",
    title: "Active",
};
exports.Danger = Template.bind({});
exports.Danger.args = {
    variant: "danger",
    title: "Expired",
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    variant: "warning",
    title: "Pending",
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    variant: "primary",
    title: "Go",
};
