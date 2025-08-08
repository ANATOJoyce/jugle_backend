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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var spinner_1 = require("../../../components/atoms/spinner");
var duplicate_icon_1 = require("../../../components/fundamentals/icons/duplicate-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var input_1 = require("../../../components/molecules/input");
var select_1 = require("../../../components/molecules/select");
var body_card_1 = require("../../../components/organisms/body-card");
var currency_input_1 = require("../../../components/organisms/currency-input");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var use_notification_1 = require("../../../hooks/use-notification");
var countries_1 = require("../../../utils/countries");
var error_messages_1 = require("../../../utils/error-messages");
var fulfillment_providers_mapper_1 = require("../../../utils/fulfillment-providers.mapper");
var payment_providers_mapper_1 = require("../../../utils/payment-providers-mapper");
var shipping_1 = require("./shipping");
var RegionDetails = function (_a) {
    var id = _a.id, onDelete = _a.onDelete, handleSelect = _a.handleSelect;
    var _b = (0, react_1.useState)([]), currencies = _b[0], setCurrencies = _b[1];
    var _c = (0, react_1.useState)([]), countries = _c[0], setCountries = _c[1];
    var _d = (0, react_1.useState)(), selectedCurrency = _d[0], setSelectedCurrency = _d[1];
    var _e = (0, react_1.useState)([]), paymentOptions = _e[0], setPaymentOptions = _e[1];
    var _f = (0, react_1.useState)([]), paymentProviders = _f[0], setPaymentProviders = _f[1];
    var _g = (0, react_1.useState)([]), fulfillmentOptions = _g[0], setFulfillmentOptions = _g[1];
    var _h = (0, react_1.useState)([]), fulfillmentProviders = _h[0], setFulfillmentProviders = _h[1];
    var _j = (0, react_hook_form_1.useForm)(), register = _j.register, reset = _j.reset, setValue = _j.setValue, handleSubmit = _j.handleSubmit;
    var notification = (0, use_notification_1.default)();
    var _k = (0, medusa_react_1.useAdminStore)(), store = _k.store, storeIsLoading = _k.isLoading;
    var fulfillment_providers = store.fulfillment_providers, payment_providers = store.payment_providers;
    var createRegion = (0, medusa_react_1.useAdminCreateRegion)();
    var deleteRegion = (0, medusa_react_1.useAdminDeleteRegion)(id);
    var _l = (0, medusa_react_1.useAdminRegion)(id), region = _l.region, regionIsLoading = _l.isLoading;
    var updateRegion = (0, medusa_react_1.useAdminUpdateRegion)(id);
    var _m = (0, react_1.useState)(false), showDanger = _m[0], setShowDanger = _m[1];
    (0, react_1.useEffect)(function () {
        if (!store || !region) {
            return;
        }
        register({ name: "currency_code" });
        setValue("currency_code", region.currency_code);
        setSelectedCurrency(region.currency_code);
        setCurrencies(getCurrencies(store.currencies));
    }, [store, region]);
    (0, react_1.useEffect)(function () {
        if (!payment_providers) {
            return;
        }
        setPaymentOptions(payment_providers.map(function (c) { return (0, payment_providers_mapper_1.default)(c.id); }));
    }, [payment_providers]);
    (0, react_1.useEffect)(function () {
        if (!fulfillment_providers) {
            return;
        }
        setFulfillmentOptions(fulfillment_providers.map(function (c) { return (0, fulfillment_providers_mapper_1.default)(c.id); }));
    }, [fulfillment_providers]);
    (0, react_1.useEffect)(function () {
        if (!region) {
            return;
        }
        reset(__assign({}, region));
        register({ name: "countries" });
        register({ name: "payment_providers" });
        register({ name: "fulfillment_providers" });
        setValue("countries", region.countries.map(function (c) { return c.iso_2; }));
        setCountries(region.countries.map(function (c) { return ({ value: c.iso_2, label: c.display_name }); }));
        setValue("payment_providers", region.payment_providers.map(function (v) { return v.id; }));
        setPaymentProviders(region.payment_providers.map(function (v) { return (0, payment_providers_mapper_1.default)(v.id); }));
        setValue("fulfillment_providers", region === null || region === void 0 ? void 0 : region.fulfillment_providers.map(function (v) { return v.id; }));
        setFulfillmentProviders(region.fulfillment_providers.map(function (v) { return (0, fulfillment_providers_mapper_1.default)(v.id); }));
    }, [region]);
    var getCurrencies = function (storeCurrencies) {
        var currs = storeCurrencies
            .filter(function (item) { return item.code !== (region === null || region === void 0 ? void 0 : region.currency_code); })
            .map(function (el) { return el.code; });
        currs.unshift(region === null || region === void 0 ? void 0 : region.currency_code);
        return currs !== null && currs !== void 0 ? currs : [];
    };
    var handlePaymentChange = function (values) {
        setPaymentProviders(values);
        setValue("payment_providers", values.map(function (v) { return v.value; }));
    };
    var handleFulfillmentChange = function (values) {
        var providers = values.map(function (v) { return ({ value: v.value }); });
        setFulfillmentProviders(providers);
        setValue("fulfillment_providers", values.map(function (v) { return v.value; }));
    };
    var handleChange = function (values) {
        setCountries(values);
        setValue("countries", values.map(function (c) { return c.value; }));
    };
    var handleChangeCurrency = function (value) {
        setValue("currency_code", value);
        setSelectedCurrency(value);
    };
    var onSave = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!data.countries || data.countries.length === 0) {
                return [2 /*return*/];
            }
            updateRegion.mutate(__assign(__assign({}, data), { currency_code: selectedCurrency }), {
                onSuccess: function () {
                    notification("Success", "Successfully updated region", "success");
                },
                onError: function (error) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var countryOptions = countries_1.countries.map(function (c) { return ({
        label: c.name,
        value: c.alpha2.toLowerCase(),
    }); });
    var handleDuplicate = function () {
        if (!region) {
            notification("Error", "Region not found", "error");
            return;
        }
        var payload = {
            currency_code: region.currency_code,
            payment_providers: region.payment_providers.map(function (p) { return p.id; }),
            fulfillment_providers: region.fulfillment_providers.map(function (f) { return f.id; }),
            countries: [], // As countries can't belong to more than one region at the same time we can just pass an empty array
            name: "".concat(region.name, " Copy"),
            tax_rate: region.tax_rate,
        };
        createRegion.mutate(payload, {
            onSuccess: function (_a) {
                var region = _a.region;
                notification("Success", "Successfully duplicated region", "success");
                handleSelect(region.id);
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deleteRegion.mutate(undefined, {
                onSuccess: function () {
                    if (onDelete) {
                        onDelete(null);
                    }
                },
                onError: function (error) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    if (storeIsLoading || !currencies.length) {
        return (<div className="flex flex-col items-center justify-center h-screen mt-auto">
        <div className="h-[75px] w-[75px] mt-[50%]">
          <spinner_1.default />
        </div>
      </div>);
    }
    return (<>
      <body_card_1.default title="Details" events={[{ label: "Save", onClick: handleSubmit(onSave) }]} actionables={[
            {
                label: "Duplicate Region",
                onClick: handleDuplicate,
                icon: <duplicate_icon_1.default />,
            },
            {
                label: "Delete Region",
                onClick: function () { return setShowDanger(true); },
                icon: <trash_icon_1.default />,
                variant: "danger",
            },
        ]}>
        <form onSubmit={handleSubmit(onSave)}>
          <div className="flex flex-col w-full">
            {regionIsLoading || storeIsLoading ? (<div className="flex flex-col items-center justify-center h-screen mt-auto">
                <div className="h-[75px] w-[75px] mt-[50%]">
                  <spinner_1.default />
                </div>
              </div>) : (<div className="w-full">
                <input_1.default name="name" label="Name" placeholder="Region name..." ref={register({ required: true })} className="mb-base"/>
                <currency_input_1.default currentCurrency={selectedCurrency} currencyCodes={currencies} onChange={handleChangeCurrency} className="mb-base"/>
                <select_1.default isMultiSelect enableSearch label="Countries" hasSelectAll options={countryOptions} value={countries} onChange={handleChange} className="mb-base"/>
                {!!paymentOptions.length && (<select_1.default isMultiSelect onChange={handlePaymentChange} options={paymentOptions} value={paymentProviders} label="Payment Providers" enableSearch className="mb-base"/>)}
                {!!fulfillmentOptions.length && (<select_1.default onChange={handleFulfillmentChange} options={fulfillmentOptions} value={fulfillmentProviders} label="Fulfillment Providers" enableSearch isMultiSelect/>)}
              </div>)}
          </div>
        </form>
        {region && fulfillmentOptions && (<div className="mt-2xlarge">
            <shipping_1.default region={region}/>
          </div>)}
      </body_card_1.default>
      {showDanger && (<delete_prompt_1.default handleClose={function () { return setShowDanger(!showDanger); }} text="Are you sure you want to delete this region from your Medusa Store?" heading="Delete region" onDelete={handleDelete} successText="Successfully deleted region" confirmText="Yes, delete"/>)}
    </>);
};
exports.default = RegionDetails;
