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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../../components/fundamentals/button");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var MarkShippedModal = function (_a) {
    var orderId = _a.orderId, orderToShip = _a.orderToShip, fulfillment = _a.fulfillment, handleCancel = _a.handleCancel;
    var _b = (0, react_hook_form_1.useForm)({}), control = _b.control, register = _b.register, watch = _b.watch;
    var _c = (0, react_1.useState)(false), noNotis = _c[0], setNoNotis = _c[1];
    var _d = (0, react_hook_form_1.useFieldArray)({
        control: control,
        name: "tracking_numbers",
    }), fields = _d.fields, appendTracking = _d.append, removeTracking = _d.remove;
    (0, react_1.useEffect)(function () {
        appendTracking({
            value: "",
        });
    }, []);
    var watchedFields = watch("tracking_numbers");
    // Allows us to listen to onChange events
    var trackingNumbers = fields.map(function (field, index) { return (__assign(__assign({}, field), watchedFields[index])); });
    var markOrderShipped = (0, medusa_react_1.useAdminCreateShipment)(orderId);
    var markSwapShipped = (0, medusa_react_1.useAdminCreateSwapShipment)(orderId);
    var markClaimShipped = (0, medusa_react_1.useAdminCreateClaimShipment)(orderId);
    var notification = (0, use_notification_1.default)();
    var markShipped = function () {
        var resourceId = fulfillment.claim_order_id || fulfillment.swap_id || fulfillment.order_id;
        var type = resourceId.split("_")[0];
        var tracking_numbers = trackingNumbers.map(function (_a) {
            var value = _a.value;
            return value;
        });
        var action = markOrderShipped;
        var successText = "Successfully marked order as shipped";
        var requestObj;
        switch (type) {
            case "swap":
                action = markSwapShipped;
                requestObj = {
                    fulfillment_id: fulfillment.id,
                    swap_id: resourceId,
                    tracking_numbers: tracking_numbers,
                    no_notification: noNotis,
                };
                successText = "Successfully marked swap as shipped";
                break;
            case "claim":
                action = markClaimShipped;
                requestObj = {
                    fulfillment_id: fulfillment.id,
                    claim_id: resourceId,
                    tracking_numbers: tracking_numbers,
                };
                successText = "Successfully marked claim as shipped";
                break;
            default:
                requestObj = {
                    fulfillment_id: fulfillment.id,
                    tracking_numbers: tracking_numbers,
                    no_notification: noNotis,
                };
                break;
        }
        action.mutate(requestObj, {
            onSuccess: function () {
                notification("Success", successText, "success");
                handleCancel();
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<modal_1.default handleClose={handleCancel}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleCancel}>
          <span className="inter-xlarge-semibold">
            Mark Fulfillment Shipped
          </span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="inter-base-semibold mb-2">Tracking</span>
            <div className="flex flex-col space-y-2">
              {trackingNumbers.map(function (tn, index) { return (<input_1.default key={tn.id} deletable={index !== 0} label={index === 0 ? "Tracking number" : ""} type="text" placeholder={"Tracking number..."} name={"tracking_numbers[".concat(index, "].value")} ref={register({
                required: "Must be filled",
            })} onDelete={function () { return removeTracking(index); }}/>); })}
            </div>
          </div>
          <div className="flex w-full justify-end mt-4">
            <button_1.default size="small" onClick={function () { return appendTracking({ key: "", value: "" }); }} variant="secondary" disabled={trackingNumbers.some(function (tn) { return !tn.value; })}>
              + Add Additional Tracking Number
            </button_1.default>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-between">
            <div className="items-center h-full flex cursor-pointer" onClick={function () { return setNoNotis(!noNotis); }}>
              <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(!noNotis && "bg-violet-60")}>
                <span className="self-center">
                  {!noNotis && <check_icon_1.default size={16}/>}
                </span>
              </div>
              <input id="noNotification" className="hidden" name="noNotification" checked={!noNotis} type="checkbox"/>
              <span className="ml-3 flex items-center text-grey-90 gap-x-xsmall">
                Send notifications
                <icon_tooltip_1.default content=""/>
              </span>
            </div>
            <div className="flex">
              <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleCancel}>
                Cancel
              </button_1.default>
              <button_1.default size="large" className="w-32 text-small justify-center" variant="primary" onClick={markShipped}>
                Complete
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = MarkShippedModal;
