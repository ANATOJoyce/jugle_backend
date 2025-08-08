"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var react_1 = require("react");
var body_card_1 = require("../../components/organisms/body-card");
var customer_table_1 = require("../../components/templates/customer-table");
var groups_1 = require("./groups");
var details_1 = require("./details");
var header_1 = require("./header");
var CustomerIndex = function () {
    return (<div className="flex flex-col grow h-full">
      <div className="w-full flex flex-col grow">
        <body_card_1.default customHeader={<header_1.default activeView="customers"/>}>
          <customer_table_1.default />
        </body_card_1.default>
      </div>
    </div>);
};
var Customers = function () {
    return (<router_1.Router>
      <CustomerIndex path="/"/>
      <groups_1.default path="/groups/*"/>
      <details_1.default path=":id"/>
    </router_1.Router>);
};
exports.default = Customers;
