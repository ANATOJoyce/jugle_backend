"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var _1 = require("./");
exports.default = {
    title: "Atoms/Switch",
    component: _1.default,
};
var Template = function (args) {
    var _a = (0, react_1.useState)(args.checked), checked = _a[0], setChecked = _a[1];
    (0, react_1.useEffect)(function () {
        setChecked(args.checked);
    }, [args.checked]);
    return (<_1.default {...args} checked={checked} onCheckedChange={function (c) { return setChecked(c); }}/>);
};
exports.Default = Template.bind({});
exports.Default.args = { checked: true };
