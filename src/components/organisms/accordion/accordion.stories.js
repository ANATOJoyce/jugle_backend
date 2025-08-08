"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
var input_1 = require("../../molecules/input");
exports.default = {
    title: "Organisms/Accordion",
    component: _1.default,
};
var Template = function (args) { return (<div className="max-w-3xl max-h-6xlarge">
    <_1.default {...args}>
      <_1.default.Item title={"General"} required value={"item.1"} description="test 12342 ">
        <div className="flex flex-col gap-y-small">
          <input_1.default label="First Name"/>
          <input_1.default label="Last Name"/>
        </div>
      </_1.default.Item>
      <_1.default.Item title="Configuration" description="The price overrides apply from the time you hit the publish button and forever if left untouched." tooltip="You could add some useful information here." value={"item.2"}>
        <div className="flex flex-col gap-y-small">
          <input_1.default label="Limit"/>
          <input_1.default label="Amount"/>
          <input_1.default label="Scale"/>
        </div>
      </_1.default.Item>
      <_1.default.Item title="Prices" description="The price overrides apply from the time you hit the publish button and forever if left untouched." value={"item.3"}>
        <div className="flex flex-col gap-y-small">
          <input_1.default label="Limit"/>
          <input_1.default label="Amount"/>
          <input_1.default label="Scale"/>
        </div>
      </_1.default.Item>
      <_1.default.Item forceMountContent title="Metadata" description="The price overrides apply from the time you hit the publish button and forever if left untouched." tooltip="You could add some useful information here." value={"item.4"}>
        <div className="flex flex-col gap-y-small">
          <input_1.default label="Limit"/>
          <input_1.default label="Amount"/>
          <input_1.default label="Scale"/>
        </div>
      </_1.default.Item>
    </_1.default>
  </div>); };
exports.Default = Template.bind({});
exports.Default.args = {
    defaultValue: ["item.1"],
    type: "multiple",
};
