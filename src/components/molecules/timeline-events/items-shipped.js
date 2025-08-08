"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var truck_icon_1 = require("../../fundamentals/icons/truck-icon");
var event_container_1 = require("./event-container");
var event_item_container_1 = require("./event-item-container");
var ItemsShipped = function (_a) {
    var event = _a.event;
    var title = event.sourceType === "claim"
        ? "Claim Items Shipped"
        : event.sourceType === "exchange"
            ? "Exchange Items Shipped"
            : "Items Shipped";
    var args = {
        icon: <truck_icon_1.default size={20}/>,
        time: event.time,
        title: title,
        children: event.items.map(function (item) { return <event_item_container_1.default item={item}/>; }),
        noNotification: event.noNotification,
        isFirst: event.first,
    };
    return <event_container_1.default {...args}/>;
};
exports.default = ItemsShipped;
