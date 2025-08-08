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
var button_1 = require("../../components/fundamentals/button");
var input_1 = require("../../components/molecules/input");
var modal_1 = require("../../components/molecules/modal");
var select_1 = require("../../components/molecules/select");
var textarea_1 = require("../../components/molecules/textarea");
var currency_input_1 = require("../../components/organisms/currency-input");
var use_notification_1 = require("../../hooks/use-notification");
var error_messages_1 = require("../../utils/error-messages");
var focus_by_name_1 = require("../../utils/focus-by-name");
var validate_email_1 = require("../../utils/validate-email");
var CustomGiftcard = function (_a) {
    var _b;
    var onDismiss = _a.onDismiss;
    var _c = (0, medusa_react_1.useAdminRegions)(), isLoading = _c.isLoading, regions = _c.regions;
    var _d = (0, react_1.useState)(null), selectedRegion = _d[0], setSelectedRegion = _d[1];
    var _e = (0, react_1.useState)(0), giftCardAmount = _e[0], setGiftCardAmount = _e[1];
    var _f = (0, react_hook_form_1.useForm)(), register = _f.register, handleSubmit = _f.handleSubmit;
    var notification = (0, use_notification_1.default)();
    var createGiftCard = (0, medusa_react_1.useAdminCreateGiftCard)();
    (0, react_1.useEffect)(function () {
        if (!isLoading) {
            setSelectedRegion({
                value: regions[0],
                label: regions[0].name,
            });
        }
    }, [isLoading]);
    var onSubmit = function (data) {
        if (!giftCardAmount) {
            notification("Error", "Please enter an amount", "error");
            (0, focus_by_name_1.focusByName)("amount");
            return;
        }
        if (!(0, validate_email_1.validateEmail)(data.metadata.email)) {
            notification("Error", "Invalid email address", "error");
            (0, focus_by_name_1.focusByName)("metadata.email");
            return;
        }
        var update = __assign({ region_id: selectedRegion.value.id, value: Math.round(giftCardAmount / (1 + selectedRegion.value.tax_rate / 100)) }, data);
        createGiftCard.mutate(update, {
            onSuccess: function () {
                notification("Success", "Created Custom Gift Card", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                onDismiss();
            },
        });
    };
    return (<modal_1.default handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Custom Gift Card</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="inter-base-semibold">Value</span>
            <div className="flex gap-x-2xsmall mt-4">
              <div className="w-[267px]">
                <select_1.default label={"Region"} value={selectedRegion} onChange={function (value) { return setSelectedRegion(value); }} options={(regions === null || regions === void 0 ? void 0 : regions.map(function (r) { return ({
            value: r,
            label: r.name,
        }); })) || []}/>
              </div>
              <div className="w-[415px]">
                <currency_input_1.default size="medium" currencyCodes={isLoading ? undefined : regions === null || regions === void 0 ? void 0 : regions.map(function (r) { return r.currency_code; })} readOnly currentCurrency={(_b = selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.value) === null || _b === void 0 ? void 0 : _b.currency_code}>
                  <currency_input_1.default.AmountInput label={"Amount"} amount={giftCardAmount} onChange={function (value) {
            setGiftCardAmount(value || 0);
        }} name="amount" required={true}/>
                </currency_input_1.default>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <span className="inter-base-semibold">Receiver</span>
            <div className="grid grid-cols-1 gap-y-xsmall mt-4">
              <input_1.default label={"Email"} required name="metadata.email" placeholder="lebron@james.com" type="email" ref={register({ required: true })}/>
              <textarea_1.default label={"Personal Message"} rows={7} placeholder="Something nice to someone special" name="metadata.personal_message" ref={register()}/>
            </div>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end gap-x-xsmall">
            <button_1.default variant="ghost" onClick={onDismiss} size="small" className="w-[112px]">
              Cancel
            </button_1.default>
            <button_1.default variant="primary" type="submit" onClick={handleSubmit(onSubmit)} size="small" className="w-[112px]">
              Create & Send
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = CustomGiftcard;
