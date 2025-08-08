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
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var modal_1 = require("../../../../components/molecules/modal");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var rma_select_receive_product_table_1 = require("../../../../components/organisms/rma-select-receive-product-table");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var prices_1 = require("../../../../utils/prices");
var ReceiveMenu = function (_a) {
    var order = _a.order, returnRequest = _a.returnRequest, onReceiveReturn = _a.onReceiveReturn, onReceiveSwap = _a.onReceiveSwap, onDismiss = _a.onDismiss, refunded = _a.refunded;
    var _b = (0, react_1.useState)(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = (0, react_1.useState)(false), refundEdited = _c[0], setRefundEdited = _c[1];
    var _d = (0, react_1.useState)(0), refundAmount = _d[0], setRefundAmount = _d[1];
    var _e = (0, react_1.useState)({}), toReturn = _e[0], setToReturn = _e[1];
    var notification = (0, use_notification_1.default)();
    var allItems = (0, react_1.useMemo)(function () {
        var idLookUp = returnRequest.items.map(function (i) { return i.item_id; });
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
        var withAdjustedQuantity = allItems
            .filter(function (i) { return idLookUp.includes(i.id); });
        return withAdjustedQuantity;
    }, [order, returnRequest]);
    (0, react_1.useEffect)(function () {
        var returns = {};
        returnRequest.items.forEach(function (i) {
            var _a;
            var item = allItems.find(function (l) { return l.id === i.item_id; });
            if (item && item.quantity - item.returned_quantity > 0) {
                returns[i.item_id] = __assign(__assign({}, item), { quantity: (_a = returnRequest.items.find(function (i) { return i.item_id === item.id; })) === null || _a === void 0 ? void 0 : _a.quantity });
            }
        });
        setToReturn(returns);
    }, [allItems]);
    var shippingTaxRate = (0, react_1.useMemo)(function () {
        return returnRequest.shipping_method.tax_lines.reduce(function (acc, curr) {
            return acc + curr.rate;
        }, 0);
    }, [returnRequest]);
    (0, react_1.useEffect)(function () {
        if (!Object.entries(toReturn).length) {
            setRefundAmount(0);
            return;
        }
        var items = Object.keys(toReturn)
            .map(function (t) { return (__assign({}, allItems.find(function (i) { return i.id === t; }))); })
            .filter(function (i) { return typeof i !== "undefined"; });
        var itemTotal = items.reduce(function (acc, curr) {
            var unitRefundable = (curr.refundable || 0) / (curr.quantity - curr.returned_quantity);
            return acc + unitRefundable * toReturn[curr.id].quantity;
        }, 0);
        var shippingTotal = (returnRequest.shipping_method &&
            returnRequest.shipping_method.price *
                (1 + shippingTaxRate / 100)) ||
            0;
        var total = itemTotal - shippingTotal;
        if (!refundEdited || total < refundAmount) {
            setRefundAmount(refundAmount < 0 ? 0 : total);
        }
    }, [toReturn, shippingTaxRate]);
    var onSubmit = function () {
        var items = Object.keys(toReturn).map(function (k) { return ({
            item_id: k,
            quantity: toReturn[k].quantity,
        }); });
        if (returnRequest.swap_id && onReceiveSwap) {
            setSubmitting(true);
            return onReceiveSwap(items)
                .then(function () { return onDismiss(); })
                .then(function () {
                return notification("Success", "Successfully received return", "success");
            })
                .catch(function (error) {
                return notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            })
                .finally(function () { return setSubmitting(false); });
        }
        if (!returnRequest.swap_id && onReceiveReturn) {
            setSubmitting(true);
            return onReceiveReturn(items, Math.round(refundAmount))
                .then(function () { return onDismiss(); })
                .then(function () {
                return notification("Success", "Successfully returned order", "success");
            })
                .catch(function (error) {
                return notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            })
                .finally(function () { return setSubmitting(false); });
        }
    };
    var handleRefundUpdated = function (value) {
        if (!value) {
            return;
        }
        if (value < order.refundable_amount && value >= 0) {
            setRefundEdited(true);
            setRefundAmount(value);
        }
    };
    return (<modal_1.default handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Receive Return</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <h3 className="inter-base-semibold">Items to receive</h3>
          <rma_select_receive_product_table_1.default order={order} allItems={allItems} toReturn={toReturn} setToReturn={function (items) { return setToReturn(items); }}/>

          {!returnRequest.swap_id && (<>
              {returnRequest.shipping_method &&
                returnRequest.shipping_method.price !== undefined && (<div className="my-4 flex justify-between">
                    <span className="inter-base-semibold">Shipping cost</span>
                    <span>
                      {((returnRequest.shipping_method.price / 100) *
                    (1 + shippingTaxRate / 100)).toFixed(2)}{" "}
                      <span className="text-grey-50">
                        {order.currency_code.toUpperCase()}
                      </span>
                    </span>
                  </div>)}
              {!refunded && (<div>
                  <div className="flex inter-base-semibold justify-between w-full">
                    <span>Total Refund</span>
                    <div className="flex items-center">
                      {!refundEdited && (<>
                          <span className="mr-2 cursor-pointer text-grey-40" onClick={function () { return setRefundEdited(true); }}>
                            <edit_icon_1.default size={20}/>{" "}
                          </span>
                          {"".concat((0, prices_1.displayAmount)(order.currency_code, refundAmount), " ").concat(order.currency_code.toUpperCase())}
                        </>)}
                    </div>
                  </div>
                  {refundEdited && (<currency_input_1.default className="mt-2" size="small" currentCurrency={order.currency_code} readOnly>
                      <currency_input_1.default.AmountInput label={"Amount"} amount={refundAmount} onChange={handleRefundUpdated}/>
                    </currency_input_1.default>)}
                </div>)}
            </>)}
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end gap-x-xsmall">
            <button_1.default onClick={function () { return onDismiss(); }} className="w-[112px]" type="submit" size="small" variant="ghost">
              Back
            </button_1.default>
            <button_1.default onClick={onSubmit} loading={submitting} className="w-[112px]" variant="primary" size="small">
              Complete
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = ReceiveMenu;
