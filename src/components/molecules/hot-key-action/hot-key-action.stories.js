"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIcon = exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
var backspace_icon_1 = require("../../fundamentals/icons/backspace-icon");
exports.default = {
    title: "Molecules/HotKeyAction",
};
var Template = function (args) { return (<div className="flex bg-grey-80 p-base">
    <_1.default {...args}/>
  </div>); };
exports.Default = Template.bind({});
exports.Default.args = {
    label: "Unpublish",
    icon: "U",
    hotKey: "U",
    onAction: function () { return alert("U key pressed!"); },
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
    label: "Delete",
    icon: <backspace_icon_1.default />,
    hotKey: "backspace",
    onAction: function () { return alert("backspace key pressed!"); },
};
