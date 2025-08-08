"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var table_toaster_1 = require("../molecules/table-toaster");
var _1 = require("./");
exports.default = {
    title: "Components/DeclarativeToaster",
    component: _1.default,
};
var Template = function (args) { return (<div className="flex justify-center">
    <span>Toggle the visible control below to show the toaster</span>
    <_1.default {...args}>
      <table_toaster_1.TableToasterContainer>
        <span className="text-grey-0">Helloooo</span>
      </table_toaster_1.TableToasterContainer>
    </_1.default>
  </div>); };
exports.Default = Template.bind({});
exports.Default.args = {
    visible: false,
    duration: Infinity,
    position: "bottom-center",
};
