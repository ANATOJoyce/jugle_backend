"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/TagInput",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Normal = Template.bind({});
exports.Normal.args = {
    label: "Tags (comma separated values)",
    values: ["SS21", "Core"],
    placeholder: "Sprint, autumn, etc.",
    tooltipContent: "Used to add keywords",
};
