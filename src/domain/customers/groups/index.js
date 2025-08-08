"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@reach/router");
var body_card_1 = require("../../../components/organisms/body-card");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var header_1 = require("../header");
var details_1 = require("./details");
var customer_group_context_1 = require("./context/customer-group-context");
var customer_groups_table_1 = require("../../../components/templates/customer-group-table/customer-groups-table");
/*
 * Customer groups index page
 */
function Index(_) {
    var showModal = (0, react_1.useContext)(customer_group_context_1.default).showModal;
    var actions = [
        {
            label: "New group",
            onClick: showModal,
            icon: (<span className="text-grey-90">
          <plus_icon_1.default size={20}/>
        </span>),
        },
    ];
    return (<div className="flex flex-col grow h-full">
      <div className="w-full flex flex-col grow">
        <body_card_1.default actionables={actions} customHeader={<header_1.default activeView="groups"/>}>
          <customer_groups_table_1.default />
        </body_card_1.default>
      </div>
    </div>);
}
/*
 * Customer groups routes
 */
function CustomerGroups(_) {
    return (<customer_group_context_1.CustomerGroupContextContainer>
      <router_1.Router basepath="/a/customers/groups">
        <Index path="/"/>
        <details_1.default path=":id"/>
      </router_1.Router>
    </customer_group_context_1.CustomerGroupContextContainer>);
}
exports.default = CustomerGroups;
