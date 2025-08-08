"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusComponent = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../../../components/fundamentals/status-indicator");
var PaymentStatusComponent = function (_a) {
    var status = _a.status;
    switch (status) {
        case "captured":
            return <status_indicator_1.default title="Paid" variant="success"/>;
        case "awaiting":
            return <status_indicator_1.default title="Awaiting" variant="default"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires Action" variant="danger"/>;
        default:
            return null;
    }
};
exports.PaymentStatusComponent = PaymentStatusComponent;
