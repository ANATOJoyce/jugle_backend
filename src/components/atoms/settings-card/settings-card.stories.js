"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var react_1 = require("react");
var _1 = require(".");
var happy_icon_1 = require("../../fundamentals/icons/happy-icon");
exports.default = {
    title: "Atoms/SettingsCard",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
var icon = <happy_icon_1.default />;
exports.CustomerService = Template.bind({});
exports.CustomerService.args = {
    icon: icon,
    heading: "Customer Service",
    description: "Reach out to our customer service team",
    to: "/customer-service",
    externalLink: null,
    disabled: false,
};
