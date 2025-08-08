"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var react_1 = require("react");
var details_1 = require("./details");
var manage_1 = require("./manage");
var overview_1 = require("./overview");
var GiftCard = function () {
    return (<router_1.Router>
      <overview_1.default path="/"/>
      <details_1.default path="/:id"/>
      <manage_1.default path="manage"/>
    </router_1.Router>);
};
exports.default = GiftCard;
