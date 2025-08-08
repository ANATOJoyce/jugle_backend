"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decideStatus = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var decideStatus = function (status) {
    switch (status) {
        case "published":
            return <status_indicator_1.default title="Published" variant="success"/>;
        case "draft":
            return <status_indicator_1.default title="Draft" variant="default"/>;
        case "proposed":
            return <status_indicator_1.default title="Proposed" variant="warning"/>;
        case "rejected":
            return <status_indicator_1.default title="Rejected" variant="danger"/>;
        default:
            return null;
    }
};
exports.decideStatus = decideStatus;
