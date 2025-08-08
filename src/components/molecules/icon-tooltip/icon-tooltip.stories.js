"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Warning = exports.Info = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/IconTooltip",
    component: _1.default,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["info", "warning", "error"],
            },
            content: {
                control: {
                    type: "text",
                },
            },
        },
    },
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Info = Template.bind({});
exports.Info.args = {
    content: "Tags are one word descriptors for the product used for searches",
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    content: "Tags are one word descriptors for the product used for searches",
    type: "warning",
};
exports.Error = Template.bind({});
exports.Error.args = {
    content: "Tags are one word descriptors for the product used for searches",
    type: "error",
};
