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
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var select_1 = require("../../../components/molecules/select");
var currency_input_1 = require("../../../components/organisms/currency-input");
var use_notification_1 = require("../../../hooks/use-notification");
var countries_1 = require("../../../utils/countries");
var error_messages_1 = require("../../../utils/error-messages");
var NewRegion = function (_a) {
    var onDone = _a.onDone, onClick = _a.onClick;
    var _b = (0, react_1.useState)([]), currencies = _b[0], setCurrencies = _b[1];
    var _c = (0, react_1.useState)(undefined), selectedCurrency = _c[0], setSelectedCurrency = _c[1];
    var _d = (0, react_1.useState)([]), countries = _d[0], setCountries = _d[1];
    var _e = (0, react_1.useState)([]), paymentOptions = _e[0], setPaymentOptions = _e[1];
    var _f = (0, react_1.useState)([]), paymentProviders = _f[0], setPaymentProviders = _f[1];
    var _g = (0, react_1.useState)([]), fulfillmentOptions = _g[0], setFulfillmentOptions = _g[1];
    var _h = (0, react_1.useState)([]), fulfillmentProviders = _h[0], setFulfillmentProviders = _h[1];
    var _j = (0, medusa_react_1.useAdminStore)(), store = _j.store, storeIsLoading = _j.isLoading;
    var createRegion = (0, medusa_react_1.useAdminCreateRegion)();
    var _k = (0, react_hook_form_1.useForm)(), register = _k.register, setValue = _k.setValue, handleSubmit = _k.handleSubmit;
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        if (storeIsLoading || !store) {
            return;
        }
        register({ name: "currency_code" });
        setCurrencies(store.currencies.map(function (currency) { return currency.code; }));
        setPaymentOptions(store.payment_providers.map(function (c) { return ({
            // Store Type is wrong, fix
            value: c.id,
            label: c.id,
        }); }));
        setFulfillmentOptions(store.fulfillment_providers.map(function (c) { return ({
            // Store Type is wrong, fix
            value: c.id,
            label: c.id,
        }); }));
    }, [store, storeIsLoading]);
    var handlePaymentChange = function (values) {
        setPaymentProviders(values);
        register({ name: "payment_providers" });
        setValue("payment_providers", values.map(function (c) { return c.value; }));
    };
    var handleFulfillmentChange = function (values) {
        setFulfillmentProviders(values);
        register({ name: "fulfillment_providers" });
        setValue("fulfillment_providers", values.map(function (c) { return c.value; }));
    };
    var handleChange = function (values) {
        setCountries(values);
        register({ name: "countries", required: true });
        setValue("countries", values.map(function (c) { return c.value; }));
    };
    var onSave = function (data) {
        var _a;
        if (!((_a = data.countries) === null || _a === void 0 ? void 0 : _a.length)) {
            notification("Success", "Choose at least one country", "error");
            return;
        }
        createRegion.mutate(__assign(__assign({}, data), { currency_code: data.currency_code, tax_rate: data.tax_rate * 100 }), {
            onSuccess: function (_a) {
                var region = _a.region;
                notification("Success", "Successfully created region", "success");
                if (onDone) {
                    onDone(region.id);
                }
                onClick();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var countryOptions = countries_1.countries.map(function (c) { return ({
        label: c.name,
        value: c.alpha2,
    }); });
    var handleChangeCurrency = function (currency) {
        setValue("currency_code", currency);
        setSelectedCurrency(currency);
    };
    return (<modal_1.default handleClose={onClick}>
      <form onSubmit={handleSubmit(onSave)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onClick}>
            <div>
              <h1 className="inter-xlarge-semibold">Add Region</h1>
            </div>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div>
              <p className="inter-base-semibold mb-base">General</p>
              <div className="grid grid-cols-1 medium:grid-cols-2 gap-y-xsmall gap-x-base">
                <input_1.default name="name" label="Name" placeholder="Region name..." ref={register({ required: true })} className="mb-base min-w-[335px] w-full"/>
                <currency_input_1.default currencyCodes={currencies} currentCurrency={selectedCurrency} onChange={handleChangeCurrency} className="items-baseline"/>
                <input_1.default className="mb-base min-w-[335px] w-full" type="number" placeholder="0.25" step="0.01" min={0} max={1} name="tax_rate" label="Tax Rate" ref={register({ max: 1, min: 0 })}/>
                <input_1.default placeholder="1000" name="tax_code" label="Tax Code" ref={register} className="mb-base min-w-[335px] w-full"/>
                <select_1.default isMultiSelect enableSearch label="Countries" hasSelectAll options={countryOptions} value={countries} onChange={handleChange} className="mb-base min-w-[335px] w-full"/>
              </div>
            </div>
            <div className="mt-xlarge mb-small">
              <p className="inter-base-semibold mb-base">Providers</p>
              <div className="grid grid-cols-1 medium:grid-cols-2 gap-base">
                {!!paymentOptions.length && (<select_1.default isMultiSelect onChange={handlePaymentChange} options={paymentOptions} value={paymentProviders} label="Payment Providers" enableSearch/>)}
                {!!fulfillmentOptions.length && (<select_1.default onChange={handleFulfillmentChange} options={fulfillmentOptions} value={fulfillmentProviders} label="Fulfillment Providers" enableSearch isMultiSelect/>)}
              </div>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex items-center justify-end w-full gap-x-xsmall">
              <button_1.default type="button" onClick={onClick} variant="secondary" size="small" className="w-eventButton justify-center">
                Cancel Changes
              </button_1.default>
              <button_1.default type="submit" variant="primary" size="small" className="w-eventButton justify-center">
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = NewRegion;
