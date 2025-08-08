"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var breadcrumb_1 = require("../../components/molecules/breadcrumb");
var input_1 = require("../../components/molecules/input");
var body_card_1 = require("../../components/organisms/body-card");
var use_notification_1 = require("../../hooks/use-notification");
var error_messages_1 = require("../../utils/error-messages");
var AccountDetails = function () {
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, reset = _a.reset, handleSubmit = _a.handleSubmit;
    var _b = (0, medusa_react_1.useAdminStore)(), store = _b.store, isSuccess = _b.isSuccess;
    var updateStore = (0, medusa_react_1.useAdminUpdateStore)();
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        if (!isSuccess) {
            return;
        }
        reset({
            name: store.name,
            swap_link_template: store.swap_link_template,
            payment_link_template: store.payment_link_template,
            invite_link_template: store.invite_link_template,
        });
    }, [store, isSuccess, reset]);
    var handleCancel = function () {
        reset({
            name: store.name,
            swap_link_template: store.swap_link_template,
            payment_link_template: store.payment_link_template,
            invite_link_template: store.invite_link_template,
        });
    };
    var onSubmit = function (data) {
        if (!validateUrl(data.swap_link_template) ||
            !validateUrl(data.payment_link_template) ||
            !validateUrl(data.invite_link_template)) {
            notification("Error", "Malformed url", "error");
            return;
        }
        updateStore.mutate(data, {
            onSuccess: function () {
                notification("Success", "Successfully updated store", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<form className="flex-col py-5">
      <div className="max-w-[632px]">
        <breadcrumb_1.default previousRoute="/a/settings/" previousBreadcrumb="Settings" currentPage="Store Details"/>
        <body_card_1.default events={[
            {
                label: "Save",
                type: "button",
                onClick: handleSubmit(onSubmit),
            },
            { label: "Cancel Changes", type: "button", onClick: handleCancel },
        ]} title="Store Details" subtitle="Manage your business details">
          <h6 className="mt-large inter-base-semibold">General</h6>
          <input_1.default className="mt-base" label="Store name" name="name" placeholder="Medusa Store" ref={register}/>
          <h6 className="mt-2xlarge inter-base-semibold">Advanced settings</h6>
          <input_1.default className="mt-base" label="Swap link template" name="swap_link_template" placeholder="https://acme.inc/swap" ref={register}/>
          <input_1.default className="mt-base" label="Draft order link template" name="payment_link_template" placeholder="https://acme.inc/swap" ref={register}/>
          <input_1.default className="mt-base" label="Invite link template" name="invite_link_template" placeholder="https://acme.inc/invite={invite_token}" ref={register}/>
        </body_card_1.default>
      </div>
    </form>);
};
var validateUrl = function (address) {
    if (!address || address === "") {
        return true;
    }
    try {
        var url = new URL(address);
        return url.protocol === "http:" || url.protocol === "https:";
    }
    catch (_) {
        return false;
    }
};
exports.default = AccountDetails;
