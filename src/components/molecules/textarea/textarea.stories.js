"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicClamping = exports.Overflow = exports.Short = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Molecules/Textarea",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Short = Template.bind({});
exports.Short.args = {
    rows: 2,
    label: "Description",
    placeholder: "Normal",
    value: "Lorem ipsum something pretty basic ",
    required: false,
};
exports.Overflow = Template.bind({});
exports.Overflow.args = {
    rows: 2,
    label: "Description",
    placeholder: "Long description",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus vitae velit tristique varius at sed sapien. Sed bibendum interdum imperdiet. Etiam et maximus libero. Ut fringilla velit non ultricies pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat metus a dui viverra, ut elementum tortor rutrum. Suspendisse pote Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    required: false,
};
exports.DynamicClamping = Template.bind({});
exports.DynamicClamping.args = {
    rows: 4,
    label: "Description",
    placeholder: "Long description",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus vitae velit tristique varius at sed sapien. Sed bibendum interdum imperdiet. Etiam et maximus libero. Ut fringilla velit non ultricies pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat metus a dui viverra, ut elementum tortor rutrum. Suspendisse pote Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus vitae velit tristique varius at sed sapien. Sed bibendum interdum imperdiet. Etiam et maximus libero. Ut fringilla velit non ultricies pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat metus a dui viverra, ut elementum tortor rutrum. Suspendisse pote lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus vitae velit tristique varius at sed sapien. Sed bibendum interdum imperdiet. Etiam et maximus libero. Ut fringilla velit non ultricies pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat metus a dui viverra, ut elementum tortor rutrum. Suspendisse pote Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lacus vitae velit tristique varius at sed sapien. Sed bibendum interdum imperdiet. Etiam et maximus libero. Ut fringilla velit non ultricies pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed placerat metus a dui viverra, ut elementum tortor rutrum. Suspendisse pote ",
    required: false,
};
