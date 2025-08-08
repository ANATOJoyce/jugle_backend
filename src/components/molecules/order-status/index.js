"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundStatus = exports.ReturnStatus = exports.FulfillmentStatus = exports.OrderStatus = exports.PaymentStatus = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var PaymentStatus = function (_a) {
    var paymentStatus = _a.paymentStatus;
    switch (paymentStatus) {
        case "captured":
            return <status_indicator_1.default title="Paid" variant="success"/>;
        case "awaiting":
            return <status_indicator_1.default title="Awaiting" variant="default"/>;
        case "not_paid":
            return <status_indicator_1.default title="Not paid" variant="default"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires Action" variant="danger"/>;
        default:
            return null;
    }
};
exports.PaymentStatus = PaymentStatus;
var OrderStatus = function (_a) {
    var orderStatus = _a.orderStatus;
    switch (orderStatus) {
        case "completed":
            return <status_indicator_1.default title="Completed" variant="success"/>;
        case "pending":
            return <status_indicator_1.default title="Processing" variant="default"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "requires_action":
            return <status_indicator_1.default title="Rejected" variant="danger"/>;
        default:
            return null;
    }
};
exports.OrderStatus = OrderStatus;
var FulfillmentStatus = function (_a) {
    var fulfillmentStatus = _a.fulfillmentStatus;
    switch (fulfillmentStatus) {
        case "shipped":
            return <status_indicator_1.default title="Shipped" variant="success"/>;
        case "fulfilled":
            return <status_indicator_1.default title="Fulfilled" variant="warning"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "partially_fulfilled":
            return <status_indicator_1.default title="Partially fulfilled" variant="warning"/>;
        case "not_fulfilled":
            return <status_indicator_1.default title="Not fulfilled" variant="default"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires Action" variant="danger"/>;
        default:
            return null;
    }
};
exports.FulfillmentStatus = FulfillmentStatus;
var ReturnStatus = function (_a) {
    var returnStatus = _a.returnStatus;
    switch (returnStatus) {
        case "received":
            return <status_indicator_1.default title="Received" variant="success"/>;
        case "requested":
            return <status_indicator_1.default title="Requested" variant="default"/>;
        case "canceled":
            return <status_indicator_1.default title="Canceled" variant="danger"/>;
        case "requires_action":
            return <status_indicator_1.default title="Requires Action" variant="danger"/>;
        default:
            return null;
    }
};
exports.ReturnStatus = ReturnStatus;
var RefundStatus = function (_a) {
    var refundStatus = _a.refundStatus;
    switch (refundStatus) {
        case "na":
            return <status_indicator_1.default title="N/A" variant="default"/>;
        case "not_refunded":
            return <status_indicator_1.default title="Refunded" variant="default"/>;
        case "refunded":
            return <status_indicator_1.default title="Refunded" variant="success"/>;
        default:
            return null;
    }
};
exports.RefundStatus = RefundStatus;
