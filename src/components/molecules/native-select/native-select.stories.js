"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeSelectExample = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/NativeSelect",
    component: _1.default,
};
var NativeSelectTemplate = function (args) { return (<div className="h-[200px] w-[750px]">
    <_1.default defaultValue={args.items[0]}>
      {args.items.map(function (item) { return (<_1.default.Item value={item}>{item}</_1.default.Item>); })}
    </_1.default>
  </div>); };
exports.NativeSelectExample = NativeSelectTemplate.bind({});
exports.NativeSelectExample.args = {
    items: [
        "Apple",
        "Orange",
        "Grape",
        "Banana",
        "Peach",
        "Watermelon",
        "Strawberry",
    ],
};
