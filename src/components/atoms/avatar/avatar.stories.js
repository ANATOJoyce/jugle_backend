"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoUser = exports.User = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Atoms/Avatar",
    component: _1.default,
};
var Template = function (args) { return (<div className="h-large w-large">
    <_1.default {...args}/>
  </div>); };
exports.User = Template.bind({});
exports.User.args = {
    user: {
        first_name: "Kasper",
        last_name: "Kristensen",
        email: "kasper@medusajs.com",
    },
};
exports.NoUser = Template.bind({});
exports.NoUser.args = {};
