"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLineItemReturned = exports.isLineItemCanceled = void 0;
var isLineItemCanceled = function (item, order) {
    var swap_id = item.swap_id, claim_order_id = item.claim_order_id;
    var travFind = function (col, id) {
        return col.filter(function (f) { return f.id == id && f.canceled_at; }).length > 0;
    };
    if (swap_id) {
        return travFind(order.swaps, swap_id);
    }
    if (claim_order_id) {
        return travFind(order.claims, claim_order_id);
    }
    return false;
};
exports.isLineItemCanceled = isLineItemCanceled;
var isLineItemReturned = function (item) {
    var shipped_quantity = item.shipped_quantity, returned_quantity = item.returned_quantity;
    if (!returned_quantity) {
        return false;
    }
    if (shipped_quantity && returned_quantity === shipped_quantity) {
        return true;
    }
};
exports.isLineItemReturned = isLineItemReturned;
