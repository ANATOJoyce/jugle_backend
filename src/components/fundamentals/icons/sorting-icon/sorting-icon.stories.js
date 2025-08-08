"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AscendingIcon = exports.DescendingIcon = exports.Icon = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Fundamentals/Icons/SortingIcon",
    component: _1.default,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.Icon = Template.bind({});
exports.Icon.args = {
    size: "24",
    color: "#a0a0a0",
};
exports.DescendingIcon = Template.bind({});
exports.DescendingIcon.args = {
    size: "24",
    color: "#a0a0a0",
    descendingColor: "#111827",
};
exports.AscendingIcon = Template.bind({});
exports.AscendingIcon.args = {
    size: "24",
    color: "#a0a0a0",
    ascendingColor: "#111827",
};
