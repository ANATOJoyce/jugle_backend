"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Template/AddCollectionModal",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Default = Template.bind({});
exports.Default.args = {
    onClose: function () { },
    onSubmit: function (values) { return console.log(JSON.stringify(values, null, 2)); },
};
