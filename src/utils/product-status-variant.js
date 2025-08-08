"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductStatusVariant = void 0;
var getProductStatusVariant = function (title) {
    switch (title) {
        case "proposed":
            return "warning";
        case "published":
            return "success";
        case "rejected":
            return "danger";
        case "draft":
        default:
            return "default";
    }
};
exports.getProductStatusVariant = getProductStatusVariant;
