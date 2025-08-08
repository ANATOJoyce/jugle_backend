"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithName = exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/ViewRaw",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.Default = Template.bind({});
var metadata = {
    test: true,
    valid_days: ["monday", "wednesday", "friday"],
};
exports.Default.args = {
    raw: metadata,
};
exports.WithName = Template.bind({});
exports.WithName.args = {
    raw: metadata,
    name: "metadata",
};
