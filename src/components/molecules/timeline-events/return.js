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
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var receive_menu_1 = require("../../../domain/orders/details/returns/receive-menu");
var button_1 = require("../../fundamentals/button");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
var cancel_icon_1 = require("../../fundamentals/icons/cancel-icon");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var delete_prompt_1 = require("../../organisms/delete-prompt");
var event_actionables_1 = require("./event-actionables");
var event_container_1 = require("./event-container");
var event_item_container_1 = require("./event-item-container");
var Return = function (_a) {
    var event = _a.event, refetch = _a.refetch;
    var _b = (0, react_1.useState)(false), showCancel = _b[0], setShowCancel = _b[1];
    var _c = (0, react_1.useState)(false), showReceive = _c[0], setShowReceive = _c[1];
    var cancelReturn = (0, medusa_react_1.useAdminCancelReturn)(event.id);
    var order = (0, medusa_react_1.useAdminOrder)(event.orderId).order;
    var handleCancel = function () {
        cancelReturn.mutate(undefined, {
            onSuccess: function () {
                refetch();
            },
        });
    };
    var receiveReturn = (0, medusa_react_1.useAdminReceiveReturn)(event.id).mutateAsync;
    var handleReceiveReturn = function (items, refund) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, receiveReturn({ items: items, refund: refund }, {
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
    var args = buildReturn(event, handleCancel, function () { return setShowReceive(true); });
    return (<>
      <event_container_1.default {...args}/>
      {showCancel && (<delete_prompt_1.default handleClose={function () { return setShowCancel(false); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleCancel()];
        }); }); }} heading="Cancel return" confirmText="Yes, cancel" successText="Canceled return" text="Are you sure you want to cancel this return?"/>)}
      {showReceive && order && (<receive_menu_1.default onDismiss={function () { return setShowReceive(false); }} onReceiveReturn={handleReceiveReturn} order={order} returnRequest={event.raw} refunded={event.refunded}/>)}
    </>);
};
function buildReturn(event, onCancel, onReceive) {
    var title = "Return";
    var icon;
    var button;
    var actions = [];
    switch (event.status) {
        case "requested":
            title = "Return Requested";
            icon = <alert_icon_1.default size={20} className="text-orange-40"/>;
            if (event.currentStatus === "requested") {
                button = event.currentStatus && event.currentStatus === "requested" && (<button_1.default variant="secondary" size="small" className={(0, clsx_1.default)("mt-large")} onClick={onReceive}>
            Receive Return
          </button_1.default>);
                actions.push({
                    icon: <trash_icon_1.default size={20}/>,
                    label: "Cancel return",
                    variant: "danger",
                    onClick: onCancel,
                });
            }
            break;
        case "received":
            title = "Return Received";
            icon = <check_circle_icon_1.default size={20} className="text-emerald-40"/>;
            break;
        case "canceled":
            title = "Return Canceled";
            icon = <cancel_icon_1.default size={20} className="text-grey-50"/>;
            break;
        case "requires_action":
            title = "Return Requires Action";
            icon = <alert_icon_1.default size={20} className="text-rose-50"/>;
            break;
        default:
            break;
    }
    return {
        title: title,
        icon: icon,
        time: event.time,
        topNode: actions.length > 0 && <event_actionables_1.default actions={actions}/>,
        noNotification: event.noNotification,
        children: event.status === "requested"
            ? [
                event.items.map(function (i) {
                    return <event_item_container_1.default item={i}/>;
                }),
                button,
            ]
            : event.status === "received"
                ? [
                    event.items.map(function (i) {
                        var _a;
                        return (<event_item_container_1.default item={__assign(__assign({}, i), { quantity: (_a = i.receivedQuantity) !== null && _a !== void 0 ? _a : i.quantity })}/>);
                    }),
                ]
                : null,
    };
}
exports.default = Return;
