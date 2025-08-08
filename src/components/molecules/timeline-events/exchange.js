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
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var create_fulfillment_1 = require("../../../domain/orders/details/create-fulfillment");
var receive_menu_1 = require("../../../domain/orders/details/returns/receive-menu");
var use_notification_1 = require("../../../hooks/use-notification");
var api_1 = require("../../../services/api");
var error_messages_1 = require("../../../utils/error-messages");
var copy_to_clipboard_1 = require("../../atoms/copy-to-clipboard");
var button_1 = require("../../fundamentals/button");
var cancel_icon_1 = require("../../fundamentals/icons/cancel-icon");
var dollar_sign_icon_1 = require("../../fundamentals/icons/dollar-sign-icon");
var refresh_icon_1 = require("../../fundamentals/icons/refresh-icon");
var truck_icon_1 = require("../../fundamentals/icons/truck-icon");
var delete_prompt_1 = require("../../organisms/delete-prompt");
var icon_tooltip_1 = require("../icon-tooltip");
var order_status_1 = require("../order-status");
var event_actionables_1 = require("./event-actionables");
var event_container_1 = require("./event-container");
var event_item_container_1 = require("./event-item-container");
var ExchangeStatus = function (_a) {
    var event = _a.event;
    var divider = <div className="h-11 w-px bg-grey-20"/>;
    return (<div className="flex items-center inter-small-regular gap-x-base">
      <div className="flex flex-col gap-y-2xsmall">
        <span className="text-grey-50">Payment:</span>
        <order_status_1.PaymentStatus paymentStatus={event.paymentStatus}/>
      </div>
      {divider}
      <div className="flex flex-col gap-y-2xsmall">
        <span className="text-grey-50">Return:</span>
        <order_status_1.ReturnStatus returnStatus={event.returnStatus}/>
      </div>
      {divider}
      <div className="flex flex-col gap-y-2xsmall">
        <span className="text-grey-50">Fulfillment:</span>
        <order_status_1.FulfillmentStatus fulfillmentStatus={event.fulfillmentStatus}/>
      </div>
    </div>);
};
var Exchange = function (_a) {
    var event = _a.event, refetch = _a.refetch;
    var _b = (0, react_1.useState)(false), showCancel = _b[0], setShowCancel = _b[1];
    var _c = (0, react_1.useState)(false), showCancelReturn = _c[0], setShowCancelReturn = _c[1];
    var _d = (0, react_1.useState)(false), showReceiveReturn = _d[0], setShowReceiveReturn = _d[1];
    var _e = (0, react_1.useState)(false), showCreateFulfillment = _e[0], setShowCreateFulfillment = _e[1];
    var cancelExchange = (0, medusa_react_1.useAdminCancelSwap)(event.orderId);
    var cancelReturn = (0, medusa_react_1.useAdminCancelReturn)(event.returnId);
    var _f = (0, react_1.useState)(undefined), differenceCardId = _f[0], setDifferenceCardId = _f[1];
    var _g = (0, react_1.useState)(undefined), paymentFormatWarning = _g[0], setPaymentFormatWarning = _g[1];
    var _h = (0, react_1.useState)(true), payable = _h[0], setPayable = _h[1];
    var store = (0, medusa_react_1.useAdminStore)().store;
    var order = (0, medusa_react_1.useAdminOrder)(event.orderId).order;
    var receiveReturn = (0, medusa_react_1.useAdminReceiveReturn)(event.returnId).mutateAsync;
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (!store) {
            return;
        }
        if (event.paymentStatus !== "not_paid") {
            setPayable(false);
            return;
        }
        if (((_a = store.swap_link_template) === null || _a === void 0 ? void 0 : _a.indexOf("{cart_id}")) === -1) {
            setPaymentFormatWarning("Store payment link does not have the default format, as it does not contain '{cart_id}'. Either update the payment link to include '{cart_id}' or update this method to reflect the format of your payment link.");
        }
        if (!store.swap_link_template) {
            setPaymentFormatWarning("No payment link has been set for this store. Please update store settings.");
        }
        if (event.exchangeCartId) {
            setDifferenceCardId((_b = store.swap_link_template) === null || _b === void 0 ? void 0 : _b.replace(/\{cart_id\}/, event.exchangeCartId));
        }
    }, [store === null || store === void 0 ? void 0 : store.swap_link_template, event.exchangeCartId, event.paymentStatus]);
    var paymentLink = getPaymentLink(payable, differenceCardId, paymentFormatWarning, event.exchangeCartId);
    var handleCancelExchange = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cancelExchange.mutateAsync(event.id)];
                case 1:
                    _a.sent();
                    refetch();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCancelReturn = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cancelReturn.mutateAsync()];
                case 1:
                    _a.sent();
                    refetch();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleReceiveReturn = function (items) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, receiveReturn({ items: items }, {
                        onSuccess: function () {
                            refetch();
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleProcessSwapPayment = function () {
        api_1.default.orders
            .processSwapPayment(event.orderId, event.id)
            .then(function (_res) {
            notification("Success", "Payment processed successfully", "success");
            refetch();
        })
            .catch(function (err) {
            notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
        });
    };
    var returnItems = getReturnItems(event);
    var newItems = getNewItems(event);
    var actions = [];
    if (event.paymentStatus === "awaiting") {
        actions.push({
            label: "Capture payment",
            icon: <dollar_sign_icon_1.default size={20}/>,
            onClick: handleProcessSwapPayment,
        });
    }
    if (event.returnStatus === "requested") {
        actions.push({
            label: "Cancel return",
            icon: <truck_icon_1.default size={20}/>,
            onClick: function () { return setShowCancelReturn(!showCancelReturn); },
        });
    }
    if (!event.isCanceled &&
        !event.canceledAt &&
        event.fulfillmentStatus !== "fulfilled" &&
        event.fulfillmentStatus !== "shipped") {
        actions.push({
            label: "Cancel exchange",
            icon: <cancel_icon_1.default size={20}/>,
            onClick: function () { return setShowCancel(!showCancel); },
            variant: "danger",
        });
    }
    var args = {
        title: event.canceledAt ? "Exchange Cancelled" : "Exchange Requested",
        icon: event.canceledAt ? (<cancel_icon_1.default size={20}/>) : (<refresh_icon_1.default size={20}/>),
        expandable: !!event.canceledAt,
        iconColor: event.canceledAt
            ? event_container_1.EventIconColor.DEFAULT
            : event_container_1.EventIconColor.ORANGE,
        time: event.time,
        noNotification: event.noNotification,
        topNode: getActions(event, actions),
        children: [
            <div className="flex flex-col gap-y-base">
        {event.canceledAt && (<div>
            <span className="mr-2 inter-small-semibold">Requested on:</span>
            <span className="text-grey-50">
              {new Date(event.time).toUTCString()}
            </span>
          </div>)}
        {!event.canceledAt && <ExchangeStatus event={event}/>}
        {!event.canceledAt && paymentLink}
        {returnItems}
        {newItems}
        <div className="flex items-center gap-x-xsmall">
          {event.returnStatus === "requested" && (<button_1.default variant="secondary" size="small" onClick={function () { return setShowReceiveReturn(true); }}>
              Receive Return
            </button_1.default>)}
          {event.fulfillmentStatus === "not_fulfilled" && (<button_1.default variant="secondary" size="small" onClick={function () { return setShowCreateFulfillment(true); }}>
              Fulfill Exchange
            </button_1.default>)}
        </div>
      </div>,
        ],
    };
    return (<>
      <event_container_1.default {...args}/>
      {showCancel && (<delete_prompt_1.default handleClose={function () { return setShowCancel(!showCancel); }} onDelete={handleCancelExchange} confirmText="Yes, cancel" heading="Cancel exchange" text="Are you sure you want to cancel this exchange?" successText="Exchange cancelled"/>)}
      {showCancelReturn && (<delete_prompt_1.default handleClose={function () { return setShowCancelReturn(!showCancelReturn); }} onDelete={handleCancelReturn} confirmText="Yes, cancel" heading="Cancel return" text="Are you sure you want to cancel this return?" successText="Return cancelled"/>)}
      {showReceiveReturn && order && (<receive_menu_1.default order={order} returnRequest={event.raw.return_order} onReceiveSwap={handleReceiveReturn} onDismiss={function () { return setShowReceiveReturn(false); }}/>)}
      {showCreateFulfillment && (<create_fulfillment_1.default orderId={event.orderId} orderToFulfill={event.raw} handleCancel={function () { return setShowCreateFulfillment(false); }}/>)}
    </>);
};
function getNewItems(event) {
    return (<div className="flex flex-col gap-y-small">
      <span className="inter-small-regular text-grey-50">New Items</span>
      <div>
        {event.newItems.map(function (i) { return (<event_item_container_1.default item={i}/>); })}
      </div>
    </div>);
}
function getPaymentLink(payable, differenceCardId, paymentFormatWarning, exchangeCartId) {
    return payable ? (<div className="inter-small-regular text-grey-50 flex flex-col gap-y-xsmall">
      <div className="flex items-center gap-x-xsmall">
        {paymentFormatWarning && <icon_tooltip_1.default content={paymentFormatWarning}/>}
        <span>Payment link:</span>
      </div>
      {differenceCardId && (<copy_to_clipboard_1.default value={differenceCardId} displayValue={exchangeCartId}/>)}
    </div>) : null;
}
function getReturnItems(event) {
    return (<div className="flex flex-col gap-y-small">
      <span className="inter-small-regular text-grey-50">Return Items</span>
      <div>
        {event.returnItems.map(function (i) { return (<event_item_container_1.default item={__assign(__assign({}, i), { quantity: i.requestedQuantity })}/>); })}
      </div>
    </div>);
}
function getActions(event, actions) {
    if (actions.length === 0) {
        return null;
    }
    return <event_actionables_1.default actions={actions}/>;
}
exports.default = Exchange;
