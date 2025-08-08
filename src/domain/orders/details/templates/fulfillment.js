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
exports.FormattedFulfillment = void 0;
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var cancel_icon_1 = require("../../../../components/fundamentals/icons/cancel-icon");
var package_icon_1 = require("../../../../components/fundamentals/icons/package-icon");
var actionables_1 = require("../../../../components/molecules/actionables");
var use_imperative_dialog_1 = require("../../../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var tracking_link_1 = require("./tracking-link");
var FormattedFulfillment = function (_a) {
    var _b;
    var setFullfilmentToShip = _a.setFullfilmentToShip, order = _a.order, fulfillmentObj = _a.fulfillmentObj;
    var dialog = (0, use_imperative_dialog_1.default)();
    var notification = (0, use_notification_1.default)();
    var cancelFulfillment = (0, medusa_react_1.useAdminCancelFulfillment)(order.id);
    var cancelSwapFulfillment = (0, medusa_react_1.useAdminCancelSwapFulfillment)(order.id);
    var cancelClaimFulfillment = (0, medusa_react_1.useAdminCancelClaimFulfillment)(order.id);
    var fulfillment = fulfillmentObj.fulfillment;
    var hasLinks = !!((_b = fulfillment.tracking_links) === null || _b === void 0 ? void 0 : _b.length);
    var getData = function () {
        switch (true) {
            case !!(fulfillment === null || fulfillment === void 0 ? void 0 : fulfillment.claim_order_id):
                return {
                    resourceId: fulfillment.claim_order_id,
                    resourceType: "claim",
                };
            case !!(fulfillment === null || fulfillment === void 0 ? void 0 : fulfillment.swap_id):
                return {
                    resourceId: fulfillment.swap_id,
                    resourceType: "swap",
                };
            default:
                return { resourceId: order === null || order === void 0 ? void 0 : order.id, resourceType: "order" };
        }
    };
    var handleCancelFulfillment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, resourceId, resourceType, shouldCancel;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = getData(), resourceId = _a.resourceId, resourceType = _a.resourceType;
                    return [4 /*yield*/, dialog({
                            heading: "Cancel fulfillment?",
                            text: "Are you sure you want to cancel the fulfillment?",
                        })];
                case 1:
                    shouldCancel = _b.sent();
                    if (!shouldCancel) {
                        return [2 /*return*/];
                    }
                    switch (resourceType) {
                        case "swap":
                            return [2 /*return*/, cancelSwapFulfillment.mutate({ swap_id: resourceId, fulfillment_id: fulfillment.id }, {
                                    onSuccess: function () {
                                        return notification("Success", "Successfully canceled swap", "success");
                                    },
                                    onError: function (err) {
                                        return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                                    },
                                })];
                        case "claim":
                            return [2 /*return*/, cancelClaimFulfillment.mutate({ claim_id: resourceId, fulfillment_id: fulfillment.id }, {
                                    onSuccess: function () {
                                        return notification("Success", "Successfully canceled claim", "success");
                                    },
                                    onError: function (err) {
                                        return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                                    },
                                })];
                        default:
                            return [2 /*return*/, cancelFulfillment.mutate(fulfillment.id, {
                                    onSuccess: function () {
                                        return notification("Success", "Successfully canceled order", "success");
                                    },
                                    onError: function (err) {
                                        return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                                    },
                                })];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className="flex w-full justify-between">
      <div className="flex flex-col space-y-1 py-2">
        <div className="text-grey-90">
          {fulfillment.canceled_at
            ? "Fulfillment has been canceled"
            : "".concat(fulfillmentObj.title, " Fulfilled by ").concat((0, lodash_1.capitalize)(fulfillment.provider_id))}
        </div>
        <div className="flex text-grey-50">
          {!fulfillment.shipped_at ? "Not shipped" : "Tracking"}
          {hasLinks &&
            fulfillment.tracking_links.map(function (tl, j) { return (<tracking_link_1.TrackingLink key={j} trackingLink={tl}/>); })}
        </div>
      </div>
      {!fulfillment.canceled_at && !fulfillment.shipped_at && (<div className="flex items-center space-x-2">
          <actionables_1.default actions={[
                {
                    label: "Mark Shipped",
                    icon: <package_icon_1.default size={"20"}/>,
                    onClick: function () { return setFullfilmentToShip(fulfillment); },
                },
                {
                    label: "Cancel Fulfillment",
                    icon: <cancel_icon_1.default size={"20"}/>,
                    onClick: function () { return handleCancelFulfillment(); },
                },
            ]}/>
        </div>)}
    </div>);
};
exports.FormattedFulfillment = FormattedFulfillment;
