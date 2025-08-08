"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = require("react");
var _1 = require(".");
var input_1 = require("../../molecules/input");
exports.default = {
    title: "Organisms/DetailsCollapsible",
    component: _1.default,
};
var Template = function (args) { return (<_1.default {...args}/>); };
exports.Component = Template.bind({});
exports.Component.args = {
    children: (<div className="flex flex-col w-1/2 space-y-4">
      <input_1.default label="Handle" name="handle" value="medusa-t-shirt"/>
      <input_1.default label="Subtitle" name="subtitle" placeholder="Add a subtitle"/>
    </div>),
    triggerProps: {
        className: "ml-2",
    },
    contentProps: {
        className: "px-6",
    },
    rootProps: {},
};
