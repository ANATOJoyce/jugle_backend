"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = require("react");
var index_1 = require("./index");
exports.default = {
    title: "Fundamentals/Icons/CrossIcon",
    component: index_1.default,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
};
var Template = function (args) { return <index_1.default {...args}/>; };
exports.Icon = Template.bind({});
exports.Icon.args = {
    size: "24",
    color: "currentColor",
};
