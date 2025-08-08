"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prices_1 = require("../../../utils/prices");
var back_icon_1 = require("../../fundamentals/icons/back-icon");
var event_container_1 = require("./event-container");
var Refund = function (_a) {
    var event = _a.event;
    var args = {
        icon: <back_icon_1.default size={20}/>,
        title: "Refund",
        time: event.time,
        topNode: getAmount(event),
        midNode: (<span className="text-grey-50">{"".concat(event.reason
                .slice(0, 1)
                .toUpperCase()).concat(event.reason.slice(1))}</span>),
        children: event.note && (<div className="rounded-2xl px-base py-base bg-grey-5">{event.note}</div>),
    };
    return <event_container_1.default {...args}/>;
};
function getAmount(event) {
    var formattedAmount = (0, prices_1.formatAmountWithSymbol)({
        amount: event.amount,
        currency: event.currencyCode,
    });
    return <span className="inter-small-semibold">{formattedAmount}</span>;
}
exports.default = Refund;
