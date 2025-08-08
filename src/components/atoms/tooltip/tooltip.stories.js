"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controlled = exports.Default = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/Tooltip",
    component: _1.default,
    argTypes: {
        triggerPosition: {
            options: [
                "top left",
                "top right",
                "top center",
                "center center",
                "center right",
                "center left",
                "bottom left",
                "bottom right",
                "bottom center",
            ],
            control: {
                type: "select",
            },
            defaultValue: "top left",
        },
    },
};
var Template = function (_a) {
    var _b;
    var triggerPosition = _a.triggerPosition, props = __rest(_a, ["triggerPosition"]);
    return (<div className={(0, clsx_1.default)((_b = {},
            _b["justify-start content-start"] = triggerPosition === "top left",
            _b["justify-center content-start"] = triggerPosition === "top center",
            _b["justify-end content-start"] = triggerPosition === "top right",
            _b["justify-start content-center"] = triggerPosition === "center left",
            _b["place-content-center"] = triggerPosition === "center center",
            _b["justify-end content-center"] = triggerPosition === "center right",
            _b["justify-start content-end"] = triggerPosition === "bottom left",
            _b["justify-center content-end"] = triggerPosition === "bottom center",
            _b["justify-end content-end"] = triggerPosition === "bottom right",
            _b), "min-h-full grid")}>
      <_1.default {...props}>
        <button className="btn btn-secondary btn-medium">hover!</button>
      </_1.default>
    </div>);
};
exports.Default = Template.bind({});
exports.Default.args = {
    content: "Tags are one word descriptors for the product used for searches",
    sideOffset: 10,
};
exports.Controlled = Template.bind({});
exports.Controlled.args = {
    open: true,
    content: "Tags are one word descriptors for the product used for searches",
    sideOffset: 10,
};
