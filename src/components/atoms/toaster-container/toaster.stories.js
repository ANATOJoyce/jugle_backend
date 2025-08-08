"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = exports.Warning = exports.Error = exports.Success = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/ToasterContainer",
    component: _1.default,
};
var Template = function (args) { return (<div className="flex items-start bg-grey-0 p-base border border-grey-20 rounded-rounded shadow-toaster w-[380px]">
    <_1.default {...args}/>
  </div>); };
exports.Success = Template.bind({});
exports.Success.args = { visible: true };
exports.Error = Template.bind({});
exports.Error.args = {
    visible: true,
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    visible: true,
};
exports.Info = Template.bind({});
exports.Info.args = {
    visible: true,
};
