"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/TextInput",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.Primary = Template.bind({});
exports.Primary.args = {
    placeholder: "Search anything...",
};
