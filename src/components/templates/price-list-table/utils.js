"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActive = exports.isDraft = exports.getPriceListStatus = exports.formatPriceListGroups = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var isFuture = function (date) {
    var now = new Date();
    return date && new Date(date) > now;
};
var isPast = function (date) {
    var now = new Date();
    return date && new Date(date) < now;
};
var getPriceListStatus = function (priceList) {
    if (priceList.status === "draft") {
        if (isFuture(priceList === null || priceList === void 0 ? void 0 : priceList.starts_at)) {
            return <status_indicator_1.default title="Scheduled" variant="warning"/>;
        }
        if (isPast(priceList === null || priceList === void 0 ? void 0 : priceList.ends_at)) {
            return <status_indicator_1.default title="Expired" variant="danger"/>;
        }
        return <status_indicator_1.default title="Draft" variant="default"/>;
    }
    else {
        return <status_indicator_1.default title="Active" variant="success"/>;
    }
};
exports.getPriceListStatus = getPriceListStatus;
var formatPriceListGroups = function (groups) {
    if (groups === void 0) { groups = []; }
    if (!(groups === null || groups === void 0 ? void 0 : groups.length)) {
        return "";
    }
    var show = groups[0];
    var remainingLength = groups.length - 1;
    var more = remainingLength || "";
    return [show, more];
};
exports.formatPriceListGroups = formatPriceListGroups;
var isDraft = function (priceList) { return (priceList === null || priceList === void 0 ? void 0 : priceList.status) === "draft"; };
exports.isDraft = isDraft;
var isActive = function (priceList) { return (priceList === null || priceList === void 0 ? void 0 : priceList.status) === "active"; };
exports.isActive = isActive;
