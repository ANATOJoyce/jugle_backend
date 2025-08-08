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
var spinner_1 = require("../../../components/atoms/spinner");
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var select_1 = require("../../../components/molecules/select");
var currency_input_1 = require("../../../components/organisms/currency-input");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var fulfillment_providers_mapper_1 = require("../../../utils/fulfillment-providers.mapper");
var NewShipping = function (_a) {
    var isReturn = _a.isReturn, region = _a.region, onCreated = _a.onCreated, onClick = _a.onClick;
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, setValue = _b.setValue, handleSubmit = _b.handleSubmit;
    var _c = (0, medusa_react_1.useAdminShippingProfiles)(), shipping_profiles = _c.shipping_profiles, isProfilesLoading = _c.isLoading;
    var fulfillment_options = (0, medusa_react_1.useAdminRegionFulfillmentOptions)(region.id).fulfillment_options;
    var _d = (0, react_1.useState)(false), adminOnly = _d[0], setAdminOnly = _d[1];
    var _e = (0, react_1.useState)([]), options = _e[0], setOptions = _e[1];
    var _f = (0, react_1.useState)(null), selectedOption = _f[0], setSelectedOption = _f[1];
    var _g = (0, react_1.useState)([]), profileOptions = _g[0], setProfileOptions = _g[1];
    var _h = (0, react_1.useState)(null), selectedProfile = _h[0], setSelectedProfile = _h[1];
    var createShippingOption = (0, medusa_react_1.useAdminCreateShippingOption)();
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        register("amount", { required: true });
        register("requirements.max_subtotal.amount");
        register("requirements.min_subtotal.amount");
    }, []);
    var handleAmountChange = function (fieldName, amount) {
        setValue(fieldName, amount);
    };
    var handleSave = function (data) {
        var _a;
        var fOptions = fulfillment_options === null || fulfillment_options === void 0 ? void 0 : fulfillment_options.map(function (provider) {
            var filtered = provider.options.filter(function (o) { return !!o.is_return === !!isReturn; });
            return __assign(__assign({}, provider), { options: filtered });
        });
        var _b = data.fulfillment_option.value.split("."), providerIndex = _b[0], optionIndex = _b[1];
        var _c = (fOptions === null || fOptions === void 0 ? void 0 : fOptions[providerIndex]) || {}, provider_id = _c.provider_id, options = _c.options;
        var reqs = [];
        if (data.requirements) {
            reqs = Object.entries(data.requirements).reduce(function (acc, _a) {
                var key = _a[0], value = _a[1];
                if (value.amount && value.amount > 0) {
                    acc.push({ type: key, amount: value.amount });
                    return acc;
                }
                else {
                    return acc;
                }
            }, []);
        }
        var payload = {
            name: data.name,
            data: options[optionIndex],
            region_id: region.id,
            profile_id: (_a = data.profile_id) === null || _a === void 0 ? void 0 : _a.value,
            requirements: reqs,
            price_type: "flat_rate",
            amount: data.amount,
            is_return: isReturn,
            provider_id: provider_id,
            admin_only: adminOnly,
        };
        createShippingOption.mutate(payload, {
            onSuccess: function () {
                notification("Success", "Successfully created shipping option", "success");
                if (onCreated) {
                    onCreated();
                }
                onClick();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        var opts = (fulfillment_options || []).reduce(function (acc, provider, p) {
            var filtered = provider.options.filter(function (o) { return !!o.is_return === !!isReturn; });
            return acc.concat(filtered.map(function (option, o) { return ({
                label: "".concat(option.name || option.id, " via ").concat((0, fulfillment_providers_mapper_1.default)(provider.provider_id).label),
                value: "".concat(p, ".").concat(o),
            }); }));
        }, []);
        setOptions(opts);
        register({ name: "fulfillment_option" }, { required: true });
    }, [fulfillment_options]);
    (0, react_1.useEffect)(function () {
        var opts = !shipping_profiles
            ? []
            : shipping_profiles.map(function (p) { return ({
                label: p.name,
                value: p.id,
            }); });
        setProfileOptions(opts);
        if (!isReturn) {
            register({ name: "profile_id" }, { required: true });
        }
    }, [isProfilesLoading, shipping_profiles]);
    var handleProfileChange = function (value) {
        setValue("profile_id", value);
        setSelectedProfile(value);
    };
    var handleFulfillmentChange = function (value) {
        setValue("fulfillment_option", value);
        setSelectedOption(value);
    };
    return (<modal_1.default handleClose={onClick}>
      <form onSubmit={handleSubmit(handleSave)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onClick}>
            <div>
              <h1 className="inter-xlarge-semibold">
                {isReturn
            ? "Add Return Shipping Option"
            : "Add Shipping Option"}
              </h1>
            </div>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div className="grid grid-cols-1 medium:grid-cols-2 gap-base">
              <input_1.default label="Name" name="name" ref={register({ required: true })} required placeholder="New Shipping Option" className="flex-grow"/>
              <currency_input_1.default currentCurrency={region.currency_code} readOnly size="small">
                <currency_input_1.default.AmountInput label="Price" onChange={function (v) { return handleAmountChange("amount", v); }} amount={undefined}/>
              </currency_input_1.default>
            </div>
            <div className="mt-large mb-xlarge">
              <label className="inline-flex items-center inter-base-semibold">
                <input type="checkbox" id="true" name="requires_shipping" value="true" checked={!adminOnly} onChange={function () { return setAdminOnly(!adminOnly); }} className="mr-small w-5 h-5 accent-violet-60 rounded-base"/>
                Show on website
              </label>
            </div>
            {!isReturn && (<div className="mb-base">
                {isProfilesLoading ? (<div className="flex flex-col items-center justify-center h-screen mt-auto">
                    <div className="h-[75px] w-[75px] mt-[50%]">
                      <spinner_1.default />
                    </div>
                  </div>) : (<select_1.default label="Shipping Profile" value={selectedProfile} onChange={handleProfileChange} required name="profile_id" options={profileOptions}/>)}
              </div>)}
            <div className="mb-base">
              <select_1.default label="Fulfillment Method" value={selectedOption} onChange={handleFulfillmentChange} required name="fulfillment_option" options={options}/>
            </div>
            {!isReturn && (<div>
                <p className="inter-base-semibold mb-base">Requirements</p>
                <div className="grid grid-cols-1 medium:grid-cols-2 gap-base">
                  <currency_input_1.default currentCurrency={region.currency_code} readOnly size="small">
                    <currency_input_1.default.AmountInput label="Price" onChange={function (v) {
                return handleAmountChange("requirements.min_subtotal.amount", v);
            }} amount={undefined}/>
                  </currency_input_1.default>
                  <currency_input_1.default currentCurrency={region.currency_code} readOnly size="small">
                    <currency_input_1.default.AmountInput label="Price" onChange={function (v) {
                return handleAmountChange("requirements.max_subtotal.amount", v);
            }} amount={undefined}/>
                  </currency_input_1.default>
                </div>
              </div>)}
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex justify-end w-full gap-x-xsmall">
              <button_1.default variant="secondary" size="small" className="justify-center w-eventButton" onClick={onClick}>
                Cancel
              </button_1.default>
              <button_1.default type="submit" variant="primary" size="small" className="justify-center w-eventButton">
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = NewShipping;
