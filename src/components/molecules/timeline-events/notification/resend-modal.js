"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../../components/fundamentals/button");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var ResendModal = function (_a) {
    var notificationId = _a.notificationId, email = _a.email, handleCancel = _a.handleCancel;
    var resendNotification = (0, medusa_react_1.useAdminResendNotification)(notificationId);
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: { to: email },
    }), register = _b.register, handleSubmit = _b.handleSubmit;
    var notification = (0, use_notification_1.default)();
    var handleResend = function (data) {
        resendNotification.mutate({
            to: data.to.trim(),
        }, {
            onSuccess: function () {
                notification("Success", "Notification re-send to ".concat(data.to), "success");
                handleCancel();
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<modal_1.default handleClose={handleCancel}>
      <form onSubmit={handleSubmit(handleResend)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={handleCancel}>
            <span className="inter-xlarge-semibold">Resend notification</span>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div className="flex flex-col">
              <div className="flex flex-col space-y-2">
                <input_1.default label={"Email"} type="text" placeholder={"Email"} name={"to"} ref={register({
            required: "Must be filled",
        })}/>
              </div>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex w-full h-8 justify-end">
              <div className="flex">
                <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleCancel}>
                  Cancel
                </button_1.default>
                <button_1.default size="large" className="w-32 text-small justify-center" variant="primary" type="submit">
                  Send
                </button_1.default>
              </div>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = ResendModal;
