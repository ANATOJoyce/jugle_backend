"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var body_card_1 = require("../../../components/organisms/body-card");
var custom_table_header_1 = require("../../../components/organisms/custom-table-header");
var draft_order_table_1 = require("../../../components/templates/draft-order-table");
var details_1 = require("./details");
var new_order_1 = require("../new/new-order");
var VIEWS = ["orders", "drafts"];
var DraftOrderIndex = function () {
    var view = "drafts";
    var _a = (0, react_1.useState)(false), showNewOrder = _a[0], setShowNewOrder = _a[1];
    var actions = (0, react_1.useMemo)(function () {
        return [
            {
                label: "Create draft order",
                onClick: function () { return setShowNewOrder(true); },
                icon: <plus_icon_1.default size={20}/>,
            },
        ];
    }, [view]);
    return (<div className="flex flex-col grow h-full">
      <div className="w-full flex flex-col grow">
        <body_card_1.default customHeader={<custom_table_header_1.default views={VIEWS} setActiveView={function (v) {
                if (v === "orders") {
                    (0, gatsby_1.navigate)("/a/orders");
                }
            }} activeView={view}/>} actionables={actions}>
          <draft_order_table_1.default />
        </body_card_1.default>
      </div>
      {showNewOrder && (<new_order_1.default onDismiss={function () { return setShowNewOrder(false); }} refresh/>)}
    </div>);
};
var DraftOrders = function () {
    return (<router_1.Router>
      <DraftOrderIndex path="/"/>
      <details_1.default path=":id"/>
    </router_1.Router>);
};
exports.default = DraftOrders;
