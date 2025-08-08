"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var body_card_1 = require("../../components/organisms/body-card");
var custom_table_header_1 = require("../../components/organisms/custom-table-header");
var details_1 = require("./details");
var new_1 = require("./new");
var pricing_table_1 = require("./pricing-table");
var PricingIndex = function () {
    var actionables = [
        {
            label: "Add price list",
            onClick: function () { return (0, gatsby_1.navigate)("/a/pricing/new"); },
            icon: <plus_icon_1.default size={20}/>,
        },
    ];
    return (<div className="h-full flex flex-col">
      <div className="w-full flex flex-col grow">
        <body_card_1.default actionables={actionables} customHeader={<custom_table_header_1.default views={["Price lists"]}/>}>
          <pricing_table_1.default />
        </body_card_1.default>
      </div>
    </div>);
};
var Pricing = function () {
    return (<router_1.Router>
      <PricingIndex path="/"/>
      <details_1.default path="/:id"/>
      <new_1.default path="/new"/>
    </router_1.Router>);
};
exports.default = Pricing;
