"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../../components/fundamentals/button");
var alert_icon_1 = require("../../../../components/fundamentals/icons/alert-icon");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var select_1 = require("../../../../components/molecules/select");
var textarea_1 = require("../../../../components/molecules/textarea");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var RefundMenu = function (_a) {
    var order = _a.order, onDismiss = _a.onDismiss;
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit, control = _b.control;
    var _c = (0, react_1.useState)(order.no_notification), noNotification = _c[0], setNoNotification = _c[1];
    var notification = (0, use_notification_1.default)();
    var createRefund = (0, medusa_react_1.useAdminRefundPayment)(order.id);
    var refundable = (0, react_1.useMemo)(function () {
        return order.paid_total - order.refunded_total;
    }, [order]);
    var reasonOptions = [
        { label: "Discount", value: "discount" },
        { label: "Other", value: "other" },
    ];
    var handleValidateRefundAmount = function (value) {
        return value <= refundable;
    };
    var onSubmit = function (data, e) {
        createRefund.mutate({
            amount: data.amount,
            reason: data.reason.value,
            no_notification: noNotification,
            note: data.note,
        }, {
            onSuccess: function () {
                notification("Success", "Successfully refunded order", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var isSystemPayment = order.payments.some(function (p) { return p.provider_id === "system"; });
    return (<modal_1.default handleClose={onDismiss}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onDismiss}>
            <h2 className="inter-xlarge-semibold">Create a refund</h2>
          </modal_1.default.Header>
          <modal_1.default.Content>
            {isSystemPayment && (<div className="inter-small-regular mb-6 p-4 text-orange-50 bg-orange-5 rounded-rounded flex text-grey-50">
                <div className="h-full mr-3">
                  <alert_icon_1.default size={20}/>
                </div>
                <div className="flex flex-col">
                  <span className="inter-small-semibold">Attention!</span>
                  One or more of your payments is a system payment. Be aware,
                  that captures and refunds are not handled by Medusa for such
                  payments.
                </div>
              </div>)}
            <span className="inter-base-semibold">Details</span>
            <div className="grid gap-y-base mt-4">
              <currency_input_1.default size="small" currentCurrency={order.currency_code} readOnly>
                <react_hook_form_1.Controller name="amount" control={control} rules={{ required: true, min: 1 }} render={function (props) { return (<currency_input_1.default.AmountInput label={"Refund Amount"} amount={props.value} invalidMessage={"Cannot refund more than the order's net total."} onValidate={handleValidateRefundAmount} onChange={props.onChange}/>); }}/>
              </currency_input_1.default>
              <react_hook_form_1.Controller name="reason" control={control} defaultValue={{ label: "Discount", value: "discount" }} rules={{ required: true }} render={function (props) { return (<select_1.default label="Reason" options={reasonOptions} value={props.value} onChange={props.onChange}/>); }}/>
              <textarea_1.default name="note" label="Note" placeholder="Discount for loyal customer" ref={register}/>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex w-full  justify-between">
              <div className="items-center h-full flex cursor-pointer" onClick={function () { return setNoNotification(!noNotification); }}>
                <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(!noNotification && "bg-violet-60")}>
                  <span className="self-center">
                    {!noNotification && <check_icon_1.default size={16}/>}
                  </span>
                </div>
                <input id="noNotification" className="hidden" name="noNotification" checked={!noNotification} onChange={function () { return setNoNotification(!noNotification); }} type="checkbox"/>
                <span className="ml-3 flex items-center text-grey-90 gap-x-xsmall">
                  Send notifications
                  <icon_tooltip_1.default content="Notify customer of created return"/>
                </span>
              </div>
              <div className="flex gap-x-xsmall">
                <button_1.default onClick={onDismiss} size="small" className="w-[112px]" variant="ghost">
                  Cancel
                </button_1.default>
                <button_1.default type="submit" size="small" className="w-[112px]" variant="primary">
                  Complete
                </button_1.default>
              </div>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = RefundMenu;
