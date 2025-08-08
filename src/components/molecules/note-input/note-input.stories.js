"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var storybook_addon_state_1 = require("storybook-addon-state");
var _1 = require(".");
exports.default = {
    title: "Molecules/NoteInput",
    component: _1.default,
};
var Template = function (args) {
    var _a = (0, storybook_addon_state_1.default)("note", undefined), note = _a[0], setNote = _a[1];
    return (<div className="max-w-md px-xlarge py-large">
      <_1.default {...args} onSubmit={setNote}/>
      <div>{note}</div>
    </div>);
};
exports.Default = Template.bind({});
exports.Default.args = {};
