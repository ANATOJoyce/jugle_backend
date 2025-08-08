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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var moment_1 = require("moment");
var react_1 = require("react");
var react_hotkeys_hook_1 = require("react-hotkeys-hook");
var react_json_view_1 = require("react-json-view");
var avatar_1 = require("../../../components/atoms/avatar");
var copy_to_clipboard_1 = require("../../../components/atoms/copy-to-clipboard");
var spinner_1 = require("../../../components/atoms/spinner");
var tooltip_1 = require("../../../components/atoms/tooltip");
var badge_1 = require("../../../components/fundamentals/badge");
var button_1 = require("../../../components/fundamentals/button");
var details_icon_1 = require("../../../components/fundamentals/details-icon");
var feature_toggle_1 = require("../../../components/fundamentals/feature-toggle");
var cancel_icon_1 = require("../../../components/fundamentals/icons/cancel-icon");
var clipboard_copy_icon_1 = require("../../../components/fundamentals/icons/clipboard-copy-icon");
var corner_down_right_icon_1 = require("../../../components/fundamentals/icons/corner-down-right-icon");
var dollar_sign_icon_1 = require("../../../components/fundamentals/icons/dollar-sign-icon");
var mail_icon_1 = require("../../../components/fundamentals/icons/mail-icon");
var truck_icon_1 = require("../../../components/fundamentals/icons/truck-icon");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var raw_json_1 = require("../../../components/organisms/raw-json");
var timeline_1 = require("../../../components/organisms/timeline");
var use_clipboard_1 = require("../../../hooks/use-clipboard");
var use_imperative_dialog_1 = require("../../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var prices_1 = require("../../../utils/prices");
var address_modal_1 = require("./address-modal");
var create_fulfillment_1 = require("./create-fulfillment");
var email_modal_1 = require("./email-modal");
var mark_shipped_1 = require("./mark-shipped");
var order_line_1 = require("./order-line");
var refund_1 = require("./refund");
var templates_1 = require("./templates");
var gatherAllFulfillments = function (order) {
    var _a, _b;
    if (!order) {
        return [];
    }
    var all = [];
    order.fulfillments.forEach(function (f, index) {
        all.push({
            title: "Fulfillment #".concat(index + 1),
            type: "default",
            fulfillment: f,
        });
    });
    if ((_a = order.claims) === null || _a === void 0 ? void 0 : _a.length) {
        order.claims.forEach(function (claim) {
            if (claim.fulfillment_status !== "not_fulfilled") {
                claim.fulfillments.forEach(function (fulfillment, index) {
                    all.push({
                        title: "Claim fulfillment #".concat(index + 1),
                        type: "claim",
                        fulfillment: fulfillment,
                        claim: claim,
                    });
                });
            }
        });
    }
    if ((_b = order.swaps) === null || _b === void 0 ? void 0 : _b.length) {
        order.swaps.forEach(function (swap) {
            if (swap.fulfillment_status !== "not_fulfilled") {
                swap.fulfillments.forEach(function (fulfillment, index) {
                    all.push({
                        title: "Swap fulfillment #".concat(index + 1),
                        type: "swap",
                        fulfillment: fulfillment,
                        swap: swap,
                    });
                });
            }
        });
    }
    return all;
};
var OrderDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var id = _a.id;
    var dialog = (0, use_imperative_dialog_1.default)();
    var _j = (0, react_1.useState)(null), addressModal = _j[0], setAddressModal = _j[1];
    var _k = (0, react_1.useState)(null), emailModal = _k[0], setEmailModal = _k[1];
    var _l = (0, react_1.useState)(false), showFulfillment = _l[0], setShowFulfillment = _l[1];
    var _m = (0, react_1.useState)(false), showRefund = _m[0], setShowRefund = _m[1];
    var _o = (0, react_1.useState)(null), fullfilmentToShip = _o[0], setFullfilmentToShip = _o[1];
    var _p = (0, medusa_react_1.useAdminOrder)(id), order = _p.order, isLoading = _p.isLoading;
    var capturePayment = (0, medusa_react_1.useAdminCapturePayment)(id);
    var cancelOrder = (0, medusa_react_1.useAdminCancelOrder)(id);
    var updateOrder = (0, medusa_react_1.useAdminUpdateOrder)(id);
    // @ts-ignore
    var region = (0, medusa_react_1.useAdminRegion)(order === null || order === void 0 ? void 0 : order.region_id, {
        enabled: !!(order === null || order === void 0 ? void 0 : order.region_id),
    }).region;
    var notification = (0, use_notification_1.default)();
    var _q = (0, use_clipboard_1.default)("".concat(order === null || order === void 0 ? void 0 : order.display_id), {
        successDuration: 5500,
        onCopied: function () { return notification("Success", "Order ID copied", "success"); },
    }), handleCopy = _q[1];
    var _r = (0, use_clipboard_1.default)(order === null || order === void 0 ? void 0 : order.email, {
        successDuration: 5500,
        onCopied: function () { return notification("Success", "Email copied", "success"); },
    }), handleCopyEmail = _r[1];
    // @ts-ignore
    (0, react_hotkeys_hook_1.useHotkeys)("esc", function () { return (0, gatsby_1.navigate)("/a/orders"); });
    (0, react_hotkeys_hook_1.useHotkeys)("command+i", handleCopy);
    var _s = (0, react_1.useMemo)(function () {
        var _a;
        var manualRefund = 0;
        var swapRefund = 0;
        var returnRefund = 0;
        var swapAmount = (0, lodash_1.sum)((order === null || order === void 0 ? void 0 : order.swaps.map(function (s) { return s.difference_due; })) || [0]);
        if ((_a = order === null || order === void 0 ? void 0 : order.refunds) === null || _a === void 0 ? void 0 : _a.length) {
            order.refunds.forEach(function (ref) {
                if (ref.reason === "other" || ref.reason === "discount") {
                    manualRefund += ref.amount;
                }
                if (ref.reason === "return") {
                    returnRefund += ref.amount;
                }
                if (ref.reason === "swap") {
                    swapRefund += ref.amount;
                }
            });
        }
        return {
            hasMovements: swapAmount + manualRefund + swapRefund + returnRefund !== 0,
            swapAmount: swapAmount,
            manualRefund: manualRefund,
            swapRefund: swapRefund,
            returnRefund: returnRefund,
        };
    }, [order]), hasMovements = _s.hasMovements, swapAmount = _s.swapAmount, manualRefund = _s.manualRefund, swapRefund = _s.swapRefund, returnRefund = _s.returnRefund;
    var handleDeleteOrder = function () { return __awaiter(void 0, void 0, void 0, function () {
        var shouldDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog({
                        heading: "Cancel order",
                        text: "Are you sure you want to cancel the order?",
                    })];
                case 1:
                    shouldDelete = _a.sent();
                    if (!shouldDelete) {
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, cancelOrder.mutate(void {}, {
                            onSuccess: function () {
                                return notification("Success", "Successfully canceled order", "success");
                            },
                            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                        })];
            }
        });
    }); };
    var handleUpdateAddress = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var updateObj;
        var data = _b.data, type = _b.type;
        return __generator(this, function (_c) {
            updateObj = {};
            if (type === "shipping") {
                updateObj["shipping_address"] = __assign({}, data);
            }
            else {
                updateObj["billing_address"] = __assign({}, data);
            }
            return [2 /*return*/, updateOrder.mutate(updateObj, {
                    onSuccess: function () {
                        notification("Success", "Successfully updated address", "success");
                        setAddressModal(null);
                    },
                    onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                })];
        });
    }); };
    var handleUpdateEmail = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var updateObj;
        var email = _b.email;
        return __generator(this, function (_c) {
            updateObj = email ? { email: email } : {};
            return [2 /*return*/, updateOrder.mutate(updateObj, {
                    onSuccess: function () {
                        notification("Success", "Successfully updated the email address", "success");
                        setEmailModal(null);
                    },
                    onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                })];
        });
    }); };
    var allFulfillments = gatherAllFulfillments(order);
    var customerActionables = [
        {
            label: "Edit Shipping Address",
            icon: <truck_icon_1.default size={"20"}/>,
            onClick: function () {
                return setAddressModal({
                    address: order === null || order === void 0 ? void 0 : order.shipping_address,
                    type: "shipping",
                });
            },
        },
        {
            label: "Go to Customer",
            icon: <details_icon_1.default size={"20"}/>,
            onClick: function () { return (0, gatsby_1.navigate)("/a/customers/".concat(order === null || order === void 0 ? void 0 : order.customer.id)); },
        },
    ];
    if (order === null || order === void 0 ? void 0 : order.billing_address) {
        customerActionables.push({
            label: "Edit Billing Address",
            icon: <dollar_sign_icon_1.default size={"20"}/>,
            onClick: function () {
                if (order.billing_address) {
                    setAddressModal({
                        address: order === null || order === void 0 ? void 0 : order.billing_address,
                        type: "billing",
                    });
                }
            },
        });
    }
    if (order === null || order === void 0 ? void 0 : order.email) {
        customerActionables.push({
            label: "Edit Email Address",
            icon: <mail_icon_1.default size={"20"}/>,
            onClick: function () {
                setEmailModal({
                    email: order === null || order === void 0 ? void 0 : order.email,
                });
            },
        });
    }
    return (<div>
      <breadcrumb_1.default currentPage={"Order Details"} previousBreadcrumb={"Orders"} previousRoute="/a/orders"/>
      {isLoading || !order ? (<body_card_1.default className="w-full pt-2xlarge flex items-center justify-center">
          <spinner_1.default size={"large"} variant={"secondary"}/>
        </body_card_1.default>) : (<div className="flex space-x-4">
          <div className="flex flex-col w-7/12 h-full">
            <body_card_1.default className={"w-full mb-4 min-h-[200px]"} customHeader={<tooltip_1.default side="top" content={"Copy ID"}>
                  <button className="inter-xlarge-semibold text-grey-90 active:text-violet-90 cursor-pointer gap-x-2 flex items-center" onClick={handleCopy}>
                    #{order.display_id} <clipboard_copy_icon_1.default size={16}/>
                  </button>
                </tooltip_1.default>} subtitle={(0, moment_1.default)(order.created_at).format("DD MMM YYYY hh:mm")} status={<templates_1.OrderStatusComponent status={order === null || order === void 0 ? void 0 : order.status}/>} forceDropdown={true} actionables={[
                {
                    label: "Cancel Order",
                    icon: <cancel_icon_1.default size={"20"}/>,
                    variant: "danger",
                    onClick: function () { return handleDeleteOrder(); },
                },
            ]}>
              <div className="flex mt-6 space-x-6 divide-x">
                <div className="flex flex-col">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Email
                  </div>
                  <button className="text-grey-90 active:text-violet-90 cursor-pointer gap-x-1 flex items-center" onClick={handleCopyEmail}>
                    {order === null || order === void 0 ? void 0 : order.email}
                    <clipboard_copy_icon_1.default size={12}/>
                  </button>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Phone
                  </div>
                  <div>{((_b = order === null || order === void 0 ? void 0 : order.shipping_address) === null || _b === void 0 ? void 0 : _b.phone) || "N/A"}</div>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Payment
                  </div>
                  <div>
                    {(_c = order === null || order === void 0 ? void 0 : order.payments) === null || _c === void 0 ? void 0 : _c.map(function (p) { return (0, lodash_1.capitalize)(p.provider_id); }).join(", ")}
                  </div>
                </div>
                <feature_toggle_1.default featureFlag="sales_channels">
                  <div className="flex flex-col pl-6">
                    <div className="inter-smaller-regular text-grey-50 mb-1 whitespace-nowrap">
                      Sales Channel
                    </div>
                    <div>{((_d = order === null || order === void 0 ? void 0 : order.sales_channel) === null || _d === void 0 ? void 0 : _d.name) || "N/A"}</div>
                  </div>
                </feature_toggle_1.default>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Summary">
              <div className="mt-6">
                {(_e = order === null || order === void 0 ? void 0 : order.items) === null || _e === void 0 ? void 0 : _e.map(function (item, i) { return (<order_line_1.default key={i} item={item} currencyCode={order === null || order === void 0 ? void 0 : order.currency_code}/>); })}
                <templates_1.DisplayTotal currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={order === null || order === void 0 ? void 0 : order.subtotal} totalTitle={"Subtotal"}/>
                {(_f = order === null || order === void 0 ? void 0 : order.discounts) === null || _f === void 0 ? void 0 : _f.map(function (discount, index) { return (<templates_1.DisplayTotal key={index} currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={-1 * (order === null || order === void 0 ? void 0 : order.discount_total)} totalTitle={<div className="flex inter-small-regular text-grey-90 items-center">
                        Discount:{" "}
                        <badge_1.default className="ml-3" variant="default">
                          {discount.code}
                        </badge_1.default>
                      </div>}/>); })}
                {(_g = order === null || order === void 0 ? void 0 : order.gift_cards) === null || _g === void 0 ? void 0 : _g.map(function (giftCard, index) { return (<templates_1.DisplayTotal key={index} currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={-1 * (order === null || order === void 0 ? void 0 : order.gift_card_total)} totalTitle={<div className="flex inter-small-regular text-grey-90 items-center">
                        Gift card:{" "}
                        <badge_1.default className="ml-3" variant="default">
                          {giftCard.code}
                        </badge_1.default>
                        <div className="ml-2">
                          <copy_to_clipboard_1.default value={giftCard.code} showValue={false} iconSize={16}/>
                        </div>
                      </div>}/>); })}
                <templates_1.DisplayTotal currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={order === null || order === void 0 ? void 0 : order.shipping_total} totalTitle={"Shipping"}/>
                <templates_1.DisplayTotal currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={order === null || order === void 0 ? void 0 : order.tax_total} totalTitle={"Tax"}/>
                <templates_1.DisplayTotal variant={"large"} currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={order === null || order === void 0 ? void 0 : order.total} totalTitle={hasMovements ? "Original Total" : "Total"}/>
                <templates_1.PaymentDetails manualRefund={manualRefund} swapAmount={swapAmount} swapRefund={swapRefund} returnRefund={returnRefund} paidTotal={order === null || order === void 0 ? void 0 : order.paid_total} refundedTotal={order === null || order === void 0 ? void 0 : order.refunded_total} currency={order === null || order === void 0 ? void 0 : order.currency_code}/>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Payment" status={<templates_1.PaymentStatusComponent status={order === null || order === void 0 ? void 0 : order.payment_status}/>} customActionable={<templates_1.PaymentActionables order={order} capturePayment={capturePayment} showRefundMenu={function () { return setShowRefund(true); }}/>}>
              <div className="mt-6">
                {order === null || order === void 0 ? void 0 : order.payments.map(function (payment) { return (<div className="flex flex-col">
                    <templates_1.DisplayTotal currency={order === null || order === void 0 ? void 0 : order.currency_code} totalAmount={payment === null || payment === void 0 ? void 0 : payment.amount} totalTitle={payment.id} subtitle={"".concat((0, moment_1.default)(payment === null || payment === void 0 ? void 0 : payment.created_at).format("DD MMM YYYY hh:mm"))}/>
                    {!!payment.amount_refunded && (<div className="flex justify-between mt-4">
                        <div className="flex">
                          <div className="text-grey-40 mr-2">
                            <corner_down_right_icon_1.default />
                          </div>
                          <div className="inter-small-regular text-grey-90">
                            Refunded
                          </div>
                        </div>
                        <div className="flex">
                          <div className="inter-small-regular text-grey-90 mr-3">
                            -
                            {(0, prices_1.formatAmountWithSymbol)({
                        amount: payment === null || payment === void 0 ? void 0 : payment.amount_refunded,
                        currency: order === null || order === void 0 ? void 0 : order.currency_code,
                    })}
                          </div>
                          <div className="inter-small-regular text-grey-50">
                            {order === null || order === void 0 ? void 0 : order.currency_code.toUpperCase()}
                          </div>
                        </div>
                      </div>)}
                  </div>); })}
                <div className="flex justify-between mt-4">
                  <div className="inter-small-semibold text-grey-90">
                    Total Paid
                  </div>
                  <div className="flex">
                    <div className="inter-small-semibold text-grey-90 mr-3">
                      {(0, prices_1.formatAmountWithSymbol)({
                amount: (order === null || order === void 0 ? void 0 : order.paid_total) - (order === null || order === void 0 ? void 0 : order.refunded_total),
                currency: order === null || order === void 0 ? void 0 : order.currency_code,
            })}
                    </div>
                    <div className="inter-small-regular text-grey-50">
                      {order === null || order === void 0 ? void 0 : order.currency_code.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Fulfillment" status={<templates_1.FulfillmentStatusComponent status={order === null || order === void 0 ? void 0 : order.fulfillment_status}/>} customActionable={order.fulfillment_status !== "fulfilled" &&
                order.status !== "canceled" &&
                order.fulfillment_status !== "shipped" && (<button_1.default variant="secondary" size="small" onClick={function () { return setShowFulfillment(true); }}>
                    Create Fulfillment
                  </button_1.default>)}>
              <div className="mt-6">
                {order === null || order === void 0 ? void 0 : order.shipping_methods.map(function (method) {
                var _a;
                return (<div className="flex flex-col">
                    <span className="inter-small-regular text-grey-50">
                      Shipping Method
                    </span>
                    <span className="inter-small-regular text-grey-90 mt-2">
                      {((_a = method === null || method === void 0 ? void 0 : method.shipping_option) === null || _a === void 0 ? void 0 : _a.name) || ""}
                    </span>
                    <div className="flex flex-col min-h-[100px] mt-8 bg-grey-5 px-3 py-2 h-full">
                      <span className="inter-base-semibold">
                        Data{" "}
                        <span className="text-grey-50 inter-base-regular">
                          (1 item)
                        </span>
                      </span>
                      <div className="flex flex-grow items-center mt-4">
                        <react_json_view_1.default name={false} collapsed={true} src={method === null || method === void 0 ? void 0 : method.data}/>
                      </div>
                    </div>
                  </div>);
            })}
                <div className="mt-6 inter-small-regular ">
                  {allFulfillments.map(function (fulfillmentObj, i) { return (<templates_1.FormattedFulfillment key={i} order={order} fulfillmentObj={fulfillmentObj} setFullfilmentToShip={setFullfilmentToShip}/>); })}
                </div>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Customer" actionables={customerActionables}>
              <div className="mt-6">
                <div className="flex w-full space-x-4 items-center">
                  <div className="flex w-[40px] h-[40px] ">
                    <avatar_1.default user={order === null || order === void 0 ? void 0 : order.customer} font="inter-large-semibold" color="bg-fuschia-40"/>
                  </div>
                  <div>
                    <h1 className="inter-large-semibold text-grey-90">
                      {"".concat(order === null || order === void 0 ? void 0 : order.shipping_address.first_name, " ").concat(order === null || order === void 0 ? void 0 : order.shipping_address.last_name)}
                    </h1>
                    <span className="inter-small-regular text-grey-50">
                      {order === null || order === void 0 ? void 0 : order.shipping_address.city},{" "}
                      {order === null || order === void 0 ? void 0 : order.shipping_address.country_code}
                    </span>
                  </div>
                </div>
                <div className="flex mt-6 space-x-6 divide-x">
                  <div className="flex flex-col">
                    <div className="inter-small-regular text-grey-50 mb-1">
                      Contact
                    </div>
                    <div className="flex flex-col inter-small-regular">
                      <span>{order === null || order === void 0 ? void 0 : order.email}</span>
                      <span>{((_h = order === null || order === void 0 ? void 0 : order.shipping_address) === null || _h === void 0 ? void 0 : _h.phone) || ""}</span>
                    </div>
                  </div>
                  <templates_1.FormattedAddress title={"Shipping"} addr={order === null || order === void 0 ? void 0 : order.shipping_address}/>
                  <templates_1.FormattedAddress title={"Billing"} addr={order === null || order === void 0 ? void 0 : order.billing_address}/>
                </div>
              </div>
            </body_card_1.default>
            <div className="mt-large">
              <raw_json_1.default data={order} title="Raw order"/>
            </div>
          </div>
          <timeline_1.default orderId={order.id}/>
        </div>)}
      {addressModal && (<address_modal_1.default handleClose={function () { return setAddressModal(null); }} handleSave={function (obj) { return handleUpdateAddress(obj); }} address={addressModal.address} type={addressModal.type} allowedCountries={region === null || region === void 0 ? void 0 : region.countries}/>)}
      {emailModal && (<email_modal_1.default handleClose={function () { return setEmailModal(null); }} handleSave={function (obj) { return handleUpdateEmail(obj); }} email={emailModal.email}/>)}
      {showFulfillment && order && (<create_fulfillment_1.default orderToFulfill={order} handleCancel={function () { return setShowFulfillment(false); }} orderId={order.id}/>)}
      {showRefund && order && (<refund_1.default order={order} onDismiss={function () { return setShowRefund(false); }}/>)}
      {fullfilmentToShip && order && (<mark_shipped_1.default orderToShip={order} handleCancel={function () { return setFullfilmentToShip(null); }} fulfillment={fullfilmentToShip} orderId={order.id}/>)}
    </div>);
};
exports.default = OrderDetails;
