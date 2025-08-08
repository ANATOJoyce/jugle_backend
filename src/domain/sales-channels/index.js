"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@reach/router");
var details_1 = require("./pages/details");
var SalesChannels = function () {
    return (<router_1.Router>
      <details_1.default path="/"/>
      <details_1.default path="/:id"/>
    </router_1.Router>);
};
exports.default = SalesChannels;
