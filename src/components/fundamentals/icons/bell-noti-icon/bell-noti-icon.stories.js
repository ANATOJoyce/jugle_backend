"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = require("react");
var bell_noti_icon_1 = require("../bell-noti-icon");
exports.default = {
    title: "Fundamentals/Icons/BellNotiIcon",
    component: bell_noti_icon_1.default,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
};
var Template = function (args) { return <bell_noti_icon_1.default {...args}/>; };
exports.Icon = Template.bind({});
exports.Icon.args = {
    size: "24",
    color: "currentColor",
    accentColor: "#F43F5E",
};
