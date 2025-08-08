"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prices_1 = require("../../../utils/prices");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var event_container_1 = require("./event-container");
var OrderPlaced = function (_a) {
    var event = _a.event;
    var args = {
        icon: <check_circle_icon_1.default size={20}/>,
        iconColor: event_container_1.EventIconColor.GREEN,
        time: event.time,
        title: "Order Placed",
        topNode: (<div className="inter-small-semibold">
        {(0, prices_1.formatAmountWithSymbol)({
                amount: event.amount,
                currency: event.currency_code,
            })}
      </div>),
        isFirst: event.first,
    };
    return <event_container_1.default {...args}/>;
};
exports.default = OrderPlaced;
