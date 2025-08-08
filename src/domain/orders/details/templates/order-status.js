"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusComponent = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../../../components/fundamentals/status-indicator");
var OrderStatusComponent = function (_a) {
    var status = _a.status;
    switch (status) {
        case "completed":
            return <status_indicator_1.default title="Completed" variant="success"/>;
        case "pending":
            return <status_indicator_1.default title="Processing" variant="default"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires action" variant="danger"/>;
        default:
            return null;
    }
};
exports.OrderStatusComponent = OrderStatusComponent;
