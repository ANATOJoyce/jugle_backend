"use strict";
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
var create_fulfillment_1 = require("../../../../domain/orders/details/create-fulfillment");
var prices_1 = require("../../../../utils/prices");
var alert_icon_1 = require("../../../fundamentals/icons/alert-icon");
var cancel_icon_1 = require("../../../fundamentals/icons/cancel-icon");
var check_circle_icon_1 = require("../../../fundamentals/icons/check-circle-icon");
var list_icon_1 = require("../../../fundamentals/icons/list-icon");
var trash_icon_1 = require("../../../fundamentals/icons/trash-icon");
var delete_prompt_1 = require("../../../organisms/delete-prompt");
var order_status_1 = require("../../order-status");
var event_actionables_1 = require("../event-actionables");
var event_container_1 = require("../event-container");
var event_item_container_1 = require("../event-item-container");
var details_1 = require("./details");
var Claim = function (_a) {
    var event = _a.event, refetch = _a.refetch;
    var cancelClaim = (0, medusa_react_1.useAdminCancelClaim)(event.orderId);
    var _b = (0, react_1.useState)(false), showDetails = _b[0], setShowDetails = _b[1];
    var _c = (0, react_1.useState)(false), showCancel = _c[0], setShowCancel = _c[1];
    var _d = (0, react_1.useState)(false), showFulfillment = _d[0], setShowFulfillment = _d[1];
    var handleCancel = function () {
        cancelClaim.mutate(event.id);
    };
    var handleCloseFulfillmentModal = function () {
        setShowFulfillment(false);
        refetch(); // We need to refetch the order to get the latest update
    };
    var claimItems = ClaimItems(event);
    var claimStatus = ClaimStatus(event);
    var refundOrReplacement = ClaimRefundOrReplacement(event);
    var actions = ClaimActions(event, function () { return setShowCancel(true); }, function () { return setShowFulfillment(true); }, function () { return setShowDetails(true); });
    var args = {
        icon: event.canceledAt ? <cancel_icon_1.default size={20}/> : <alert_icon_1.default size={20}/>,
        iconColor: event.canceledAt
            ? event_container_1.EventIconColor.DEFAULT
            : event_container_1.EventIconColor.ORANGE,
        time: event.canceledAt ? event.canceledAt : event.time,
        title: event.canceledAt ? "Claim Canceled" : "Claim Created",
        topNode: actions,
        children: [
            <div className="flex flex-col gap-y-base">
        {!event.canceledAt && (<>
            {claimStatus}
            {claimItems}
            {refundOrReplacement}
          </>)}
      </div>,
        ],
    };
    return (<>
      <event_container_1.default {...args}/>
      {showCancel && (<delete_prompt_1.default handleClose={function () { return setShowCancel(false); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleCancel()];
        }); }); }}/>)}
      {showDetails && (<details_1.default onDismiss={function () { return setShowDetails(false); }} claim={event.claim} order={event.order}/>)}
      {showFulfillment && (<create_fulfillment_1.default handleCancel={handleCloseFulfillmentModal} orderId={event.orderId} orderToFulfill={event.claim}/>)}
    </>);
};
function ClaimItems(event) {
    return (<div className="flex flex-col gap-y-small">
      <span className="inter-small-regular text-grey-50">Claimed items</span>
      <div>
        {event.claimItems.map(function (i) { return (<event_item_container_1.default item={i}/>); })}
      </div>
    </div>);
}
function ClaimStatus(event) {
    return event.claimType === "refund" && event.refundStatus ? (<div>
      <span className="text-grey-50 mb-2xsmall">Refund:</span>
      <order_status_1.RefundStatus refundStatus={event.refundStatus}/>
    </div>) : event.claimType === "return" && event.fulfillmentStatus ? (<div>
      <span className="text-grey-50 mb-2xsmall">Fulfillment:</span>
      <order_status_1.FulfillmentStatus fulfillmentStatus={event.fulfillmentStatus}/>
    </div>) : null;
}
function ClaimRefundOrReplacement(event) {
    return event.claimType === "replace" ? (<div className="flex flex-col gap-y-small">
      <span className="inter-small-regular text-grey-50">New items</span>
      <div>
        {event.newItems.map(function (i) { return (<event_item_container_1.default item={i}/>); })}
      </div>
    </div>) : (<div className="flex flex-col">
      <span className="text-grey-50 mb-2xsmall">{"".concat(event.refundStatus && event.refundStatus === "refunded"
            ? "Refunded"
            : "Refund", " amount:")}</span>
      <span className="inter-small-semibold">
        {(0, prices_1.formatAmountWithSymbol)({
            amount: event.refundAmount,
            currency: event.currencyCode,
        })}
      </span>
    </div>);
}
function ClaimActions(event, onCancel, onFulfill, onDetails) {
    var actions = [];
    actions.push({
        icon: <list_icon_1.default size={20}/>,
        label: "More Details",
        onClick: onDetails,
    });
    if (!event.canceledAt && !event.isCanceled) {
        if (event.claimType === "replace" &&
            (event.fulfillmentStatus === "not_fulfilled" ||
                event.fulfillmentStatus === "canceled")) {
            actions.push({
                icon: <check_circle_icon_1.default size={20}/>,
                label: "Fulfill Claim",
                onClick: onFulfill,
            });
        }
        if (event.refundStatus !== "refunded" && !event.isCanceled) {
            actions.push({
                icon: <trash_icon_1.default size={20}/>,
                label: "Cancel Claim",
                variant: "danger",
                onClick: onCancel,
            });
        }
    }
    return actions.length ? <event_actionables_1.default actions={actions}/> : null;
}
exports.default = Claim;
