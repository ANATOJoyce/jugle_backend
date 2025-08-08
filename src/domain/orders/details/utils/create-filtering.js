"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterItems = void 0;
var filterItems = function (order, isClaim) {
    var orderItems = order.items.reduce(function (map, obj) {
        return map.set(obj.id, __assign({}, obj));
    }, new Map());
    var claimedItems = [];
    if (order.claims && order.claims.length) {
        for (var _i = 0, _a = order.claims; _i < _a.length; _i++) {
            var s = _a[_i];
            claimedItems = __spreadArray(__spreadArray([], claimedItems, true), s.claim_items, true);
            if (s.fulfillment_status === "not_fulfilled" &&
                s.payment_status === "na") {
                continue;
            }
            if (s.additional_items && s.additional_items.length) {
                orderItems = s.additional_items
                    .filter(function (it) {
                    return it.shipped_quantity ||
                        it.shipped_quantity === it.fulfilled_quantity;
                })
                    .reduce(function (map, obj) { return map.set(obj.id, __assign({}, obj)); }, orderItems);
            }
        }
    }
    if (!isClaim) {
        if (order.swaps && order.swaps.length) {
            for (var _b = 0, _c = order.swaps; _b < _c.length; _b++) {
                var s = _c[_b];
                orderItems = s.additional_items.reduce(function (map, obj) {
                    return map.set(obj.id, __assign({}, obj));
                }, orderItems);
            }
        }
    }
    for (var _d = 0, claimedItems_1 = claimedItems; _d < claimedItems_1.length; _d++) {
        var item = claimedItems_1[_d];
        var i = orderItems.get(item.item_id);
        if (i) {
            i.quantity = i.quantity - item.quantity;
            i.quantity !== 0 ? orderItems.set(i.id, i) : orderItems.delete(i.id);
        }
    }
    return __spreadArray([], orderItems.values(), true);
};
exports.filterItems = filterItems;
