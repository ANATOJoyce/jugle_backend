"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var index_1 = require("./index");
exports.default = {
    title: "Molecules/TableFieldFilters",
    component: index_1.default,
};
var Template = function (args) { return <index_1.default {...args}/>; };
exports.Default = Template.bind({});
exports.Default.args = {
    onChange: console.log,
    fields: [
        {
            id: "p-usd",
            short: "Price USD",
            label: function (_a) {
                var isSelected = _a.isSelected;
                return (<span className="text-small text-grey-50">
          <span className={(0, clsx_1.default)("text-grey-90", { "font-semibold": isSelected })}>
            USD{" "}
          </span>
          (USA)
        </span>);
            },
        },
        {
            id: "p-dkk",
            short: "Price DKK",
            label: function (_a) {
                var isSelected = _a.isSelected;
                return (<span className="text-small text-grey-50">
          <span className={(0, clsx_1.default)("text-grey-90", { "font-semibold": isSelected })}>
            DKK{" "}
          </span>
          (Denmark)
        </span>);
            },
        },
        {
            id: "p-hrk",
            short: "Price HRK",
            label: function (_a) {
                var isSelected = _a.isSelected;
                return (<span className="text-small text-grey-50">
          <span className={(0, clsx_1.default)("text-grey-90", { "font-semibold": isSelected })}>
            HRK{" "}
          </span>
          (Croatia)
        </span>);
            },
        },
    ],
};
