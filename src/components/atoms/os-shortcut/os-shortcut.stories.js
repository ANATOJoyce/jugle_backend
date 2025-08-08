"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmdKL = exports.CmdK = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/OSShortcut",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.CmdK = Template.bind({});
exports.CmdK.args = {
    winModifiers: "Control",
    macModifiers: "⌘",
    keys: "K",
};
exports.CmdKL = Template.bind({});
exports.CmdKL.args = {
    winModifiers: "Control",
    macModifiers: "⌘",
    keys: ["K", "L"],
};
