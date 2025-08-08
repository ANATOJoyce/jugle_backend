"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentActionables = void 0;
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var PaymentActionables = function (_a) {
    var _b;
    var order = _a.order, capturePayment = _a.capturePayment, showRefundMenu = _a.showRefundMenu;
    var notification = (0, use_notification_1.default)();
    var isSystemPayment = (_b = order === null || order === void 0 ? void 0 : order.payments) === null || _b === void 0 ? void 0 : _b.some(function (p) { return p.provider_id === "system"; });
    var payment_status = order.payment_status;
    // Default label and action
    var label = "Capture payment";
    var action = function () {
        capturePayment.mutate(void {}, {
            onSuccess: function () {
                return notification("Success", "Successfully captured payment", "success");
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    var loading = capturePayment.isLoading;
    var shouldShowNotice = false;
    // If payment is a system payment, we want to show a notice
    if (payment_status === "awaiting" && isSystemPayment) {
        shouldShowNotice = true;
    }
    if (payment_status === "requires_action" && isSystemPayment) {
        shouldShowNotice = true;
    }
    switch (true) {
        case payment_status === "captured" ||
            payment_status === "partially_refunded":
            {
                label = "Refund";
                action = function () { return showRefundMenu(); };
                break;
            }
        case shouldShowNotice: {
            action = function () {
                return console.log("TODO: Show alert indicating, that you are capturing a system payment");
            };
            break;
        }
        case payment_status === "requires_action": {
            return null;
        }
        default:
            break;
    }
    return (<button_1.default variant="secondary" size="small" onClick={action} loading={loading} className="min-w-[130px]">
      {label}
    </button_1.default>);
};
exports.PaymentActionables = PaymentActionables;
