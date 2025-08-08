"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var cancel_icon_1 = require("../../fundamentals/icons/cancel-icon");
var event_container_1 = require("./event-container");
var OrderCanceled = function (_a) {
    var event = _a.event;
    var args = {
        icon: <cancel_icon_1.default size={20}/>,
        iconColor: event_container_1.EventIconColor.RED,
        time: event.time,
        title: "Order Canceled",
    };
    return <event_container_1.default {...args}/>;
};
exports.default = OrderCanceled;
