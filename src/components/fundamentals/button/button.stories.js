"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostSmallIcon = exports.GhostMediumIcon = exports.GhostLargeIcon = exports.SecondarySmallIcon = exports.SecondaryMediumIcon = exports.SecondaryLargeIcon = exports.PrimarySmallIcon = exports.PrimaryMediumIcon = exports.PrimaryLargeIcon = exports.GhostSmallLoading = exports.GhostSmall = exports.GhostMediumLoading = exports.GhostMedium = exports.GhostLargeLoading = exports.GhostLarge = exports.SecondarySmallLoading = exports.SecondarySmall = exports.SecondaryMediumLoading = exports.SecondaryMedium = exports.SecondaryLargeLoading = exports.SecondaryLarge = exports.PrimarySmallLoading = exports.PrimarySmall = exports.PrimaryMediumLoading = exports.PrimaryMedium = exports.PrimaryLargeLoading = exports.PrimaryLarge = void 0;
var react_1 = require("react");
var _1 = require(".");
var happy_icon_1 = require("../icons/happy-icon");
exports.default = {
    title: "Fundamentals/Button",
    component: _1.default,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["large", "medium", "small"],
            },
        },
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "ghost"],
            },
        },
    },
};
var Template = function (args) { return <_1.default {...args}>Action</_1.default>; };
exports.PrimaryLarge = Template.bind({});
exports.PrimaryLarge.args = {
    variant: "primary",
    size: "large",
};
exports.PrimaryLargeLoading = Template.bind({});
exports.PrimaryLargeLoading.args = {
    variant: "primary",
    size: "large",
    loading: true,
    children: "Loading",
};
exports.PrimaryMedium = Template.bind({});
exports.PrimaryMedium.args = {
    variant: "primary",
    size: "medium",
};
exports.PrimaryMediumLoading = Template.bind({});
exports.PrimaryMediumLoading.args = {
    variant: "primary",
    size: "medium",
    loading: true,
};
exports.PrimarySmall = Template.bind({});
exports.PrimarySmall.args = {
    variant: "primary",
    size: "small",
};
exports.PrimarySmallLoading = Template.bind({});
exports.PrimarySmallLoading.args = {
    variant: "primary",
    size: "small",
    loading: true,
};
exports.SecondaryLarge = Template.bind({});
exports.SecondaryLarge.args = {
    variant: "secondary",
    size: "large",
};
exports.SecondaryLargeLoading = Template.bind({});
exports.SecondaryLargeLoading.args = {
    variant: "secondary",
    size: "large",
    loading: true,
    children: "Loading",
};
exports.SecondaryMedium = Template.bind({});
exports.SecondaryMedium.args = {
    variant: "secondary",
    size: "medium",
};
exports.SecondaryMediumLoading = Template.bind({});
exports.SecondaryMediumLoading.args = {
    variant: "secondary",
    size: "medium",
    loading: true,
};
exports.SecondarySmall = Template.bind({});
exports.SecondarySmall.args = {
    variant: "secondary",
    size: "small",
};
exports.SecondarySmallLoading = Template.bind({});
exports.SecondarySmallLoading.args = {
    variant: "secondary",
    size: "small",
    loading: true,
};
exports.GhostLarge = Template.bind({});
exports.GhostLarge.args = {
    variant: "ghost",
    size: "large",
};
exports.GhostLargeLoading = Template.bind({});
exports.GhostLargeLoading.args = {
    variant: "ghost",
    size: "large",
    loading: true,
    children: "Loading",
};
exports.GhostMedium = Template.bind({});
exports.GhostMedium.args = {
    variant: "ghost",
    size: "medium",
};
exports.GhostMediumLoading = Template.bind({});
exports.GhostMediumLoading.args = {
    variant: "ghost",
    size: "medium",
    loading: true,
};
exports.GhostSmall = Template.bind({});
exports.GhostSmall.args = {
    variant: "ghost",
    size: "small",
};
exports.GhostSmallLoading = Template.bind({});
exports.GhostSmallLoading.args = {
    variant: "ghost",
    size: "small",
    loading: true,
};
var TemplateWithIcon = function (args) { return (<_1.default {...args}>
    <happy_icon_1.default size={20}/> Action
  </_1.default>); };
exports.PrimaryLargeIcon = TemplateWithIcon.bind({});
exports.PrimaryLargeIcon.args = {
    variant: "primary",
    size: "large",
};
exports.PrimaryMediumIcon = TemplateWithIcon.bind({});
exports.PrimaryMediumIcon.args = {
    variant: "primary",
    size: "medium",
};
exports.PrimarySmallIcon = TemplateWithIcon.bind({});
exports.PrimarySmallIcon.args = {
    variant: "primary",
    size: "small",
};
exports.SecondaryLargeIcon = TemplateWithIcon.bind({});
exports.SecondaryLargeIcon.args = {
    variant: "secondary",
    size: "large",
};
exports.SecondaryMediumIcon = TemplateWithIcon.bind({});
exports.SecondaryMediumIcon.args = {
    variant: "secondary",
    size: "medium",
};
exports.SecondarySmallIcon = TemplateWithIcon.bind({});
exports.SecondarySmallIcon.args = {
    variant: "secondary",
    size: "small",
};
exports.GhostLargeIcon = TemplateWithIcon.bind({});
exports.GhostLargeIcon.args = {
    variant: "ghost",
    size: "large",
};
exports.GhostMediumIcon = TemplateWithIcon.bind({});
exports.GhostMediumIcon.args = {
    variant: "ghost",
    size: "medium",
};
exports.GhostSmallIcon = TemplateWithIcon.bind({});
exports.GhostSmallIcon.args = {
    variant: "ghost",
    size: "small",
};
