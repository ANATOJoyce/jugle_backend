"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentStatusComponent = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../../../components/fundamentals/status-indicator");
var FulfillmentStatusComponent = function (_a) {
    var status = _a.status;
    switch (status) {
        case "shipped":
            return <status_indicator_1.default title="Shipped" variant="success"/>;
        case "fulfilled":
            return <status_indicator_1.default title="Fulfilled" variant="warning"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "partially_fulfilled":
            return <status_indicator_1.default title="Partially fulfilled" variant="warning"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires Action" variant="danger"/>;
        default:
            return null;
    }
};
exports.FulfillmentStatusComponent = FulfillmentStatusComponent;
