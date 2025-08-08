"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var React = require("react");
var _1 = require(".");
var button_1 = require("../../fundamentals/button");
exports.default = {
    title: "Organisms/EditDenominationModal",
    component: _1.default,
};
var Template = function (args) {
    var _a = React.useState(false), isOpen = _a[0], setOpen = _a[1];
    return (<>
      <button_1.default onClick={function () { return setOpen(true); }} variant="primary" size="small">
        Edit denominations
      </button_1.default>
      {isOpen && (<_1.default {...args} handleClose={function () { return setOpen(false); }}/>)}
    </>);
};
exports.Default = Template.bind({});
exports.Default.args = {
    denominations: [],
    onSubmit: console.log,
    currencyCodes: ["USD", "EUR", "GBP", "DKK", "NOK", "SEK"],
};
