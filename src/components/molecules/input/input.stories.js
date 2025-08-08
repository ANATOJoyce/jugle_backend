"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCustomTooltip = exports.WithInfoTooltip = exports.Required = exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
var tooltip_1 = require("../../atoms/tooltip");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
exports.default = {
    title: "Molecules/Input",
    component: _1.default,
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.Default = Template.bind({});
exports.Default.args = {
    label: "First name",
    placeholder: "LeBron James",
};
exports.Required = Template.bind({});
exports.Required.args = {
    label: "Email",
    required: true,
    placeholder: "lebron@james.com",
};
exports.WithInfoTooltip = Template.bind({});
exports.WithInfoTooltip.args = {
    label: "Default",
    tooltipContent: "This is a tooltip",
};
exports.WithCustomTooltip = Template.bind({});
exports.WithCustomTooltip.args = {
    label: "Tricky",
    tooltip: (<tooltip_1.default content={"Changing this might cause bad luck"} className="text-rose-50" side="right" align="end">
      <alert_icon_1.default size={16} className="flex text-rose-50"/>
    </tooltip_1.default>),
};
