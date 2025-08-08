"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var package_icon_1 = require("../../fundamentals/icons/package-icon");
var event_container_1 = require("./event-container");
var event_item_container_1 = require("./event-item-container");
var ItemsFulfilled = function (_a) {
    var event = _a.event;
    var title = event.sourceType === "claim"
        ? "Claim Items Fulfilled"
        : event.sourceType === "exchange"
            ? "Exchange Items Fulfilled"
            : "Items Fulfilled";
    var args = {
        icon: <package_icon_1.default size={20}/>,
        time: event.time,
        title: title,
        children: event.items.map(function (item) { return <event_item_container_1.default item={item}/>; }),
        noNotification: event.noNotification,
        isFirst: event.first,
    };
    return <event_container_1.default {...args}/>;
};
exports.default = ItemsFulfilled;
