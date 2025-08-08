"use strict";
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
exports.useBuildTimelime = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var ReturnStatus;
(function (ReturnStatus) {
    ReturnStatus["REQUESTED"] = "requested";
    ReturnStatus["RECEIVED"] = "received";
    ReturnStatus["REQUIRES_ACTION"] = "requires_action";
    ReturnStatus["CANCELED"] = "canceled";
})(ReturnStatus || (ReturnStatus = {}));
var useBuildTimelime = function (orderId) {
    var _a = (0, medusa_react_1.useAdminOrder)(orderId), order = _a.order, orderLoading = _a.isLoading, orderError = _a.isError, refetch = _a.refetch;
    var _b = (0, medusa_react_1.useAdminNotes)({ resource_id: orderId, limit: 100, offset: 0 }), notes = _b.notes, notesLoading = _b.isLoading, notesError = _b.isError;
    var _c = (0, medusa_react_1.useAdminNotifications)({ resource_id: orderId }), notifications = _c.notifications, notificationsLoading = _c.isLoading, notificationsError = _c.isError;
    var events = (0, react_1.useMemo)(function () {
        if (!order) {
            return undefined;
        }
        var allItems = __spreadArray([], order.items, true);
        if (order.swaps && order.swaps.length) {
            for (var _i = 0, _a = order.swaps; _i < _a.length; _i++) {
                var swap = _a[_i];
                allItems = __spreadArray(__spreadArray([], allItems, true), swap.additional_items, true);
            }
        }
        if (order.claims && order.claims.length) {
            for (var _b = 0, _c = order.claims; _b < _c.length; _b++) {
                var claim = _c[_b];
                allItems = __spreadArray(__spreadArray([], allItems, true), claim.additional_items, true);
            }
        }
        var events = [];
        events.push({
            id: "".concat(order.id, "-placed"),
            time: order.created_at,
            amount: order.total,
            currency_code: order.currency_code,
            tax: order.tax_rate,
            type: "placed",
            orderId: order.id,
        });
        if (order.status === "canceled") {
            events.push({
                id: "".concat(order.id, "-canceled"),
                time: order.updated_at,
                type: "canceled",
                orderId: order.id,
            });
        }
        if (notes) {
            for (var _d = 0, notes_1 = notes; _d < notes_1.length; _d++) {
                var note = notes_1[_d];
                events.push({
                    id: note.id,
                    time: note.created_at,
                    type: "note",
                    authorId: note.author_id,
                    value: note.value,
                    orderId: order.id,
                });
            }
        }
        for (var _e = 0, _f = order.refunds; _e < _f.length; _e++) {
            var event_1 = _f[_e];
            events.push({
                amount: event_1.amount,
                currencyCode: order.currency_code,
                id: event_1.id,
                note: event_1.note,
                reason: event_1.reason,
                time: event_1.created_at,
                type: "refund",
            });
        }
        for (var _g = 0, _h = order.fulfillments; _g < _h.length; _g++) {
            var event_2 = _h[_g];
            events.push({
                id: event_2.id,
                time: event_2.created_at,
                type: "fulfilled",
                items: event_2.items.map(function (item) { return getLineItem(allItems, item.item_id); }),
                noNotification: event_2.no_notification,
                orderId: order.id,
            });
            if (event_2.shipped_at) {
                events.push({
                    id: event_2.id,
                    time: event_2.shipped_at,
                    type: "shipped",
                    items: event_2.items.map(function (item) { return getLineItem(allItems, item.item_id); }),
                    noNotification: event_2.no_notification,
                    orderId: order.id,
                });
            }
        }
        for (var _j = 0, _k = order.returns; _j < _k.length; _j++) {
            var event_3 = _k[_j];
            events.push({
                id: event_3.id,
                items: event_3.items.map(function (i) { return getReturnItems(allItems, i); }),
                status: event_3.status,
                currentStatus: event_3.status,
                time: event_3.updated_at,
                type: "return",
                noNotification: event_3.no_notification,
                orderId: order.id,
                raw: event_3,
                refunded: getWasRefundClaim(event_3.claim_order_id, order),
            });
            if (event_3.status !== "requested") {
                events.push({
                    id: event_3.id,
                    items: event_3.items.map(function (i) { return getReturnItems(allItems, i); }),
                    status: "requested",
                    time: event_3.created_at,
                    type: "return",
                    currentStatus: event_3.status,
                    noNotification: event_3.no_notification,
                    orderId: order.id,
                });
            }
        }
        for (var _l = 0, _m = order.swaps; _l < _m.length; _l++) {
            var event_4 = _m[_l];
            events.push({
                id: event_4.id,
                time: event_4.canceled_at ? event_4.canceled_at : event_4.created_at,
                noNotification: event_4.no_notification === true,
                fulfillmentStatus: event_4.fulfillment_status,
                returnId: event_4.return_order.id,
                paymentStatus: event_4.payment_status,
                returnStatus: event_4.return_order.status,
                type: "exchange",
                newItems: event_4.additional_items.map(function (i) { return getSwapItem(i); }),
                returnItems: event_4.return_order.items.map(function (i) {
                    return getReturnItems(allItems, i);
                }),
                exchangeCartId: event_4.payment_status !== "captured" ? event_4.cart_id : undefined,
                canceledAt: event_4.canceled_at,
                orderId: event_4.order_id,
                raw: event_4,
            });
            if (event_4.fulfillment_status === "fulfilled" ||
                event_4.fulfillment_status === "shipped") {
                events.push({
                    id: event_4.id,
                    time: event_4.fulfillments[0].created_at,
                    type: "fulfilled",
                    items: event_4.additional_items.map(function (i) { return getSwapItem(i); }),
                    noNotification: event_4.no_notification,
                    orderId: order.id,
                    sourceType: "exchange",
                });
                if (event_4.fulfillments[0].shipped_at) {
                    events.push({
                        id: event_4.id,
                        time: event_4.fulfillments[0].shipped_at,
                        type: "shipped",
                        items: event_4.additional_items.map(function (i) { return getSwapItem(i); }),
                        noNotification: event_4.no_notification,
                        orderId: order.id,
                        sourceType: "exchange",
                    });
                }
            }
        }
        if (order.claims) {
            for (var _o = 0, _p = order.claims; _o < _p.length; _o++) {
                var claim = _p[_o];
                events.push({
                    id: claim.id,
                    type: "claim",
                    newItems: claim.additional_items.map(function (i) {
                        var _a;
                        return ({
                            quantity: i.quantity,
                            title: i.title,
                            thumbnail: i.thumbnail,
                            variant: {
                                title: (_a = i.variant) === null || _a === void 0 ? void 0 : _a.title,
                            },
                        });
                    }),
                    fulfillmentStatus: claim.fulfillment_status,
                    refundStatus: claim.payment_status,
                    refundAmount: claim.refund_amount,
                    currencyCode: order.currency_code,
                    claimItems: claim.claim_items.map(function (i) { return getClaimItem(i); }),
                    time: claim.canceled_at ? claim.canceled_at : claim.created_at,
                    noNotification: claim.no_notification,
                    claimType: claim.type,
                    canceledAt: claim.canceled_at,
                    orderId: order.id,
                    claim: claim,
                    order: order,
                });
                if (claim.fulfillment_status === "fulfilled" ||
                    claim.fulfillment_status === "shipped") {
                    events.push({
                        id: claim.id,
                        time: claim.fulfillments[0].created_at,
                        type: "fulfilled",
                        items: claim.additional_items.map(function (i) { return getSwapItem(i); }),
                        noNotification: claim.no_notification,
                        orderId: order.id,
                        sourceType: "claim",
                    });
                    if (claim.fulfillments[0].shipped_at) {
                        events.push({
                            id: claim.id,
                            time: claim.fulfillments[0].shipped_at,
                            type: "shipped",
                            items: claim.additional_items.map(function (i) { return getSwapItem(i); }),
                            noNotification: claim.no_notification,
                            orderId: order.id,
                            sourceType: "claim",
                        });
                    }
                }
                if (claim.canceled_at) {
                    events.push({
                        id: "".concat(claim.id, "-created"),
                        type: "claim",
                        newItems: claim.additional_items.map(function (i) {
                            var _a;
                            return ({
                                quantity: i.quantity,
                                title: i.title,
                                thumbnail: i.thumbnail,
                                variant: {
                                    title: (_a = i.variant) === null || _a === void 0 ? void 0 : _a.title,
                                },
                            });
                        }),
                        fulfillmentStatus: claim.fulfillment_status,
                        refundStatus: claim.payment_status,
                        refundAmount: claim.refund_amount,
                        currencyCode: order.currency_code,
                        claimItems: claim.claim_items.map(function (i) { return getClaimItem(i); }),
                        time: claim.created_at,
                        noNotification: claim.no_notification,
                        claimType: claim.type,
                        isCanceled: true,
                        orderId: order.id,
                    });
                }
            }
        }
        if (notifications) {
            for (var _q = 0, notifications_1 = notifications; _q < notifications_1.length; _q++) {
                var notification = notifications_1[_q];
                events.push({
                    id: notification.id,
                    time: notification.created_at,
                    to: notification.to,
                    type: "notification",
                    title: notification.event_name,
                    orderId: order.id,
                });
            }
        }
        events.sort(function (a, b) {
            if (a.time > b.time) {
                return -1;
            }
            if (a.time < b.time) {
                return 1;
            }
            return 0;
        });
        events[events.length - 1].first = true;
        return events;
    }, [
        order,
        orderLoading,
        orderError,
        notes,
        notesLoading,
        notesError,
        notifications,
        notificationsLoading,
        notificationsError,
    ]);
    return { events: events, refetch: refetch };
};
exports.useBuildTimelime = useBuildTimelime;
function getLineItem(allItems, itemId) {
    var _a;
    var line = allItems.find(function (line) { return line.id === itemId; });
    if (!line) {
        return;
    }
    return {
        title: line.title,
        quantity: line.quantity,
        thumbnail: line.thumbnail,
        variant: { title: ((_a = line === null || line === void 0 ? void 0 : line.variant) === null || _a === void 0 ? void 0 : _a.title) || "-" },
    };
}
function getReturnItems(allItems, item) {
    var _a;
    var line = allItems.find(function (li) { return li.id === item.item_id; });
    if (!line) {
        return;
    }
    return {
        title: line.title,
        quantity: item.quantity,
        requestedQuantity: item.requested_quantity,
        receivedQuantity: item.received_quantity,
        variant: {
            title: ((_a = line === null || line === void 0 ? void 0 : line.variant) === null || _a === void 0 ? void 0 : _a.title) || "-",
        },
        thumbnail: line.thumbnail,
    };
}
function getClaimItem(claimItem) {
    var _a;
    return {
        title: claimItem.item.title,
        quantity: claimItem.quantity,
        thumbnail: claimItem.item.thumbnail,
        variant: {
            title: (_a = claimItem.item.variant) === null || _a === void 0 ? void 0 : _a.title,
        },
    };
}
function getSwapItem(item) {
    var _a;
    return {
        title: item.title,
        quantity: item.quantity,
        thumbnail: item.thumbnail,
        variant: { title: (_a = item.variant) === null || _a === void 0 ? void 0 : _a.title },
    };
}
function getWasRefundClaim(claimId, order) {
    var claim = order.claims.find(function (c) { return c.id === claimId; });
    if (!claim) {
        return false;
    }
    return claim.type === "refund";
}
