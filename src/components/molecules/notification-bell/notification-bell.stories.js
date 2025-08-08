"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoNotifications = exports.HasNotifications = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/NotificationBell",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.HasNotifications = Template.bind({});
exports.HasNotifications.args = {
    hasNotifications: true,
};
exports.NoNotifications = Template.bind({});
exports.NoNotifications.args = {
    hasNotifications: false,
};
