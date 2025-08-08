"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitleOnly = exports.TitleOnly = exports.TitleAndSubtitle = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/PageDescription",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.TitleAndSubtitle = Template.bind({});
exports.TitleAndSubtitle.args = {
    title: "Region",
    subtitle: "Manage your regions",
};
exports.TitleOnly = Template.bind({});
exports.TitleOnly.args = {
    title: "Region",
};
exports.SubtitleOnly = Template.bind({});
exports.SubtitleOnly.args = {
    subtitle: "Manage your regions",
};
