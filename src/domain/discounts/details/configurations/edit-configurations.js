"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var date_picker_1 = require("../../../../components/atoms/date-picker/date-picker");
var time_picker_1 = require("../../../../components/atoms/date-picker/time-picker");
var button_1 = require("../../../../components/fundamentals/button");
var availability_duration_1 = require("../../../../components/molecules/availability-duration");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var switchable_item_1 = require("../../../../components/molecules/switchable-item");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var EditConfigurations = function (_a) {
    var discount = _a.discount, onClose = _a.onClose;
    var _b = (0, medusa_react_1.useAdminUpdateDiscount)(discount.id), mutate = _b.mutate, isLoading = _b.isLoading;
    var notification = (0, use_notification_1.default)();
    var _c = (0, react_hook_form_1.useForm)({
        defaultValues: mapConfigurations(discount),
    }), control = _c.control, handleSubmit = _c.handleSubmit, reset = _c.reset;
    var onSubmit = function (data) {
        var _a;
        mutate({
            starts_at: (_a = data.starts_at) !== null && _a !== void 0 ? _a : new Date(),
            ends_at: data.ends_at,
            usage_limit: data.usage_limit && data.usage_limit > 0 ? data.usage_limit : null,
            valid_duration: data.valid_duration,
        }, {
            onSuccess: function (_a) {
                var discount = _a.discount;
                notification("Success", "Discount updated successfully", "success");
                reset(mapConfigurations(discount));
                onClose();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        reset(mapConfigurations(discount));
    }, [discount]);
    return (<modal_1.default handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onClose}>
          <h1 className="inter-xlarge-semibold">Edit configurations</h1>
        </modal_1.default.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <modal_1.default.Content isLargeModal>
            <div className="flex flex-col gap-y-xlarge">
              <react_hook_form_1.Controller name="starts_at" defaultValue={discount.starts_at} control={control} render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<switchable_item_1.default open={!!value} onSwitch={function () {
                    if (value) {
                        onChange(null);
                    }
                    else {
                        onChange(new Date(discount.starts_at));
                    }
                }} title="Discount has a start date?" description="Schedule the discount to activate in the future.">
                      <div className="flex gap-x-xsmall items-center">
                        <date_picker_1.default date={value} label="Start date" onSubmitDate={onChange}/>
                        <time_picker_1.default label="Start time" date={value} onSubmitDate={onChange}/>
                      </div>
                    </switchable_item_1.default>);
        }}/>
              <react_hook_form_1.Controller name="ends_at" control={control} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<switchable_item_1.default open={!!value} onSwitch={function () {
                    if (value) {
                        onChange(null);
                    }
                    else {
                        onChange(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000));
                    }
                }} title="Discount has an expiry date?" description="Schedule the discount to deactivate in the future.">
                      <div className="flex gap-x-xsmall items-center">
                        <date_picker_1.default date={value} label="Expiry date" onSubmitDate={onChange}/>
                        <time_picker_1.default label="Expiry time" date={value} onSubmitDate={onChange}/>
                      </div>
                    </switchable_item_1.default>);
        }}/>
              <react_hook_form_1.Controller name="usage_limit" control={control} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<switchable_item_1.default open={!!value} onSwitch={function () {
                    if (value) {
                        onChange(null);
                    }
                    else {
                        onChange(10);
                    }
                }} title="Limit the number of redemtions?" description="Limit applies across all customers, not per customer.">
                      <input_1.default label="Number of redemptions" type="number" placeholder="5" min={1} defaultValue={value !== null && value !== void 0 ? value : undefined} onChange={function (value) {
                    return onChange(value.target.valueAsNumber);
                }}/>
                    </switchable_item_1.default>);
        }}/>
              {discount.is_dynamic && (<react_hook_form_1.Controller name="valid_duration" control={control} render={function (_a) {
                var onChange = _a.onChange, value = _a.value;
                return (<switchable_item_1.default open={!!value} onSwitch={function () {
                        if (value) {
                            onChange(null);
                        }
                        else {
                            onChange("P0Y0M0DT00H00M");
                        }
                    }} title="Availability duration?" description="Set the duration of the discount.">
                        <availability_duration_1.default value={value !== null && value !== void 0 ? value : undefined} onChange={onChange}/>
                      </switchable_item_1.default>);
            }}/>)}
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="gap-x-xsmall flex items-center justify-end w-full">
              <button_1.default variant="ghost" size="small" className="min-w-[128px]" type="button" onClick={onClose}>
                Cancel
              </button_1.default>
              <button_1.default variant="primary" size="small" className="min-w-[128px]" type="submit" loading={isLoading}>
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </form>
      </modal_1.default.Body>
    </modal_1.default>);
};
var mapConfigurations = function (discount) {
    return {
        starts_at: new Date(discount.starts_at),
        ends_at: discount.ends_at ? new Date(discount.ends_at) : null,
        usage_limit: discount.usage_limit,
        valid_duration: discount.valid_duration,
    };
};
exports.default = EditConfigurations;
