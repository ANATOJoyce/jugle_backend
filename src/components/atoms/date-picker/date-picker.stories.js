"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePickerExample = exports.DatePickerExample = void 0;
var react_1 = require("react");
var time_picker_1 = require("./time-picker");
var date_picker_1 = require("./date-picker");
exports.default = {
    title: "Atoms/DateTimePicker",
    component: date_picker_1.default,
};
var DatePickertemplate = function (args) { return (<div className="h-[200px] w-[750px]">
    <date_picker_1.default {...args}/>
  </div>); };
var TimePickertemplate = function (args) { return (<div className="h-[200px] w-[750px]">
    <time_picker_1.default {...args}/>
  </div>); };
exports.DatePickerExample = DatePickertemplate.bind({});
date_picker_1.default.args = {
    date: new Date("01/20/2022"),
    onChange: function (date) { },
};
exports.TimePickerExample = TimePickertemplate.bind({});
date_picker_1.default.args = {
    date: new Date("01/20/2022"),
    onChange: function (date) { },
};
