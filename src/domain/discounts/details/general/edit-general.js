"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../../components/fundamentals/button");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var select_1 = require("../../../../components/molecules/select");
var textarea_1 = require("../../../../components/molecules/textarea");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var EditGeneral = function (_a) {
    var discount = _a.discount, onClose = _a.onClose;
    var _b = (0, medusa_react_1.useAdminUpdateDiscount)(discount.id), mutate = _b.mutate, isLoading = _b.isLoading;
    var notification = (0, use_notification_1.default)();
    var _c = (0, react_hook_form_1.useForm)({
        defaultValues: mapGeneral(discount),
    }), control = _c.control, handleSubmit = _c.handleSubmit, reset = _c.reset, register = _c.register;
    var onSubmit = function (data) {
        mutate({
            regions: data.regions.map(function (r) { return r.value; }),
            code: data.code,
            rule: {
                id: discount.rule.id,
                description: data.description,
                value: data.value,
                allocation: discount.rule.allocation,
            },
        }, {
            onSuccess: function (_a) {
                var discount = _a.discount;
                notification("Success", "Discount updated successfully", "success");
                reset(mapGeneral(discount));
                onClose();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        reset(mapGeneral(discount));
    }, [discount]);
    var type = discount.rule.type;
    var regions = (0, medusa_react_1.useAdminRegions)().regions;
    var regionOptions = (0, react_1.useMemo)(function () {
        return regions
            ? regions.map(function (r) { return ({
                label: r.name,
                value: r.id,
            }); })
            : [];
    }, [regions]);
    var selectedRegions = (0, react_hook_form_1.useWatch)({
        control: control,
        name: "regions",
    });
    var fixedCurrency = (0, react_1.useMemo)(function () {
        var _a;
        if (type === "fixed" && (selectedRegions === null || selectedRegions === void 0 ? void 0 : selectedRegions.length)) {
            return (_a = regions === null || regions === void 0 ? void 0 : regions.find(function (r) { return r.id === selectedRegions[0].value; })) === null || _a === void 0 ? void 0 : _a.currency_code;
        }
    }, [selectedRegions, type, regions]);
    return (<modal_1.default handleClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onClose}>
            <h1 className="inter-xlarge-semibold">Edit general information</h1>
          </modal_1.default.Header>
          <modal_1.default.Content isLargeModal>
            <react_hook_form_1.Controller name="regions" control={control} rules={{
            required: "Atleast one region is required",
            validate: function (value) {
                return Array.isArray(value) ? value.length > 0 : !!value;
            },
        }} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<select_1.default value={value} onChange={function (value) {
                    onChange(type === "fixed" ? [value] : value);
                }} label="Choose valid regions" isMultiSelect={type !== "fixed"} hasSelectAll={type !== "fixed"} enableSearch required options={regionOptions}/>);
        }}/>
            <div className="flex gap-x-base gap-y-base my-base">
              <input_1.default label="Code" className="flex-1" placeholder="SUMMERSALE10" required name="code" ref={register({ required: "Code is required" })}/>

              {type !== "free_shipping" && (<>
                  {type === "fixed" ? (<div className="flex-1">
                      <currency_input_1.default size="small" currentCurrency={fixedCurrency !== null && fixedCurrency !== void 0 ? fixedCurrency : "USD"} readOnly hideCurrency>
                        <react_hook_form_1.Controller name="value" control={control} rules={{
                    required: "Amount is required",
                    min: 1,
                }} render={function (_a) {
                    var value = _a.value, onChange = _a.onChange;
                    return (<currency_input_1.default.AmountInput label={"Amount"} required amount={value} onChange={onChange}/>);
                }}/>
                      </currency_input_1.default>
                    </div>) : (<div className="flex-1">
                      <input_1.default label="Percentage" min={0} required type="number" placeholder="10" prefix={"%"} name="value" ref={register({
                    required: "Percentage is required",
                    valueAsNumber: true,
                })}/>
                    </div>)}
                </>)}
            </div>

            <div className="text-grey-50 inter-small-regular flex flex-col mb-6">
              <span>
                The code your customers will enter during checkout. This will
                appear on your customer’s invoice.
              </span>
              <span>Uppercase letters and numbers only.</span>
            </div>
            <textarea_1.default label="Description" required placeholder="Summer Sale 2022" rows={1} name="description" ref={register({
            required: "Description is required",
        })}/>
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
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
var mapGeneral = function (discount) {
    return {
        regions: discount.regions.map(function (r) { return ({ label: r.name, value: r.id }); }),
        code: discount.code,
        description: discount.rule.description,
        value: discount.rule.value,
    };
};
exports.default = EditGeneral;
