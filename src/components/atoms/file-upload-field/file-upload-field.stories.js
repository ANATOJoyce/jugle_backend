"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/FileUploadField",
    component: _1.default,
};
var Template = function (args) { return (<div className="h-[200px] w-[750px]">
    <_1.default {...args}/>
  </div>); };
exports.FileUpload = Template.bind({});
exports.FileUpload.args = {
    onFileChosen: function (values) { },
    filetypes: ["image/png", "image/jpeg"],
    placeholder: "Drag and drop an image here, or click to select a file",
};
