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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../../../components/atoms/checkbox");
var button_1 = require("../../../../components/fundamentals/button");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var select_1 = require("../../../../components/molecules/select");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var convert_empty_string_to_null_1 = require("../../../../utils/convert-empty-string-to-null");
var countries_1 = require("../../../../utils/countries");
var focus_by_name_1 = require("../../../../utils/focus-by-name");
var usePricesFieldArray_1 = require("../../product-form/form/usePricesFieldArray");
var defaultVariant = {
    prices: [],
    origin_country: "",
    options: [],
};
var VariantEditor = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? defaultVariant : _b, onSubmit = _a.onSubmit, onCancel = _a.onCancel, title = _a.title, optionsMap = _a.optionsMap;
    var countryOptions = countries_1.countries.map(function (c) { return ({
        label: c.name,
        value: c.alpha2.toLowerCase(),
    }); });
    var store = (0, medusa_react_1.useAdminStore)().store;
    var _c = (0, react_1.useState)(function () {
        var defaultCountry = variant.origin_country
            ? countryOptions.find(function (cd) { return cd.label === variant.origin_country; })
            : null;
        return defaultCountry || null;
    }), selectedCountry = _c[0], setSelectedCountry = _c[1];
    var _d = (0, react_hook_form_1.useForm)({
        defaultValues: variant,
    }), control = _d.control, register = _d.register, reset = _d.reset, watch = _d.watch, handleSubmit = _d.handleSubmit;
    var _e = (0, usePricesFieldArray_1.default)((store === null || store === void 0 ? void 0 : store.currencies.map(function (c) { return c.code; })) || [], {
        control: control,
        name: "prices",
        keyName: "indexId",
    }, {
        defaultAmount: 1000,
        defaultCurrencyCode: (store === null || store === void 0 ? void 0 : store.default_currency.code) || (store === null || store === void 0 ? void 0 : store.currencies[0].code) || "usd",
    }), prices = _e.fields, appendPrice = _e.appendPrice, deletePrice = _e.deletePrice, availableCurrencies = _e.availableCurrencies;
    var fields = (0, react_hook_form_1.useFieldArray)({
        control: control,
        name: "options",
        keyName: "indexId",
    }).fields;
    (0, react_1.useEffect)(function () {
        reset(__assign(__assign({}, variant), { options: Object.values(optionsMap), prices: variant === null || variant === void 0 ? void 0 : variant.prices.map(function (p) { return ({
                price: __assign({}, p),
            }); }) }));
    }, [variant, store]);
    var handleSave = function (data) {
        if (!data.prices) {
            (0, focus_by_name_1.focusByName)("add-price");
            return;
        }
        if (!data.title) {
            data.title = data.options.map(function (o) { return o.value; }).join(" / ");
        }
        data.prices = data.prices.map(function (_a) {
            var _b = _a.price, currency_code = _b.currency_code, amount = _b.amount;
            return ({
                currency_code: currency_code,
                amount: Math.round(amount),
            });
        });
        data.options = data.options.map(function (option) { return (__assign({}, option)); });
        data.origin_country = selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.label;
        data.inventory_quantity = parseInt(data.inventory_quantity);
        data.weight = (data === null || data === void 0 ? void 0 : data.weight) ? parseInt(data.weight, 10) : undefined;
        data.height = (data === null || data === void 0 ? void 0 : data.height) ? parseInt(data.height, 10) : undefined;
        data.width = (data === null || data === void 0 ? void 0 : data.width) ? parseInt(data.width, 10) : undefined;
        data.length = (data === null || data === void 0 ? void 0 : data.length) ? parseInt(data.length, 10) : undefined;
        var cleaned = (0, convert_empty_string_to_null_1.convertEmptyStringToNull)(data);
        onSubmit(cleaned);
    };
    watch(["manage_inventory", "allow_backorder"]);
    var variantTitle = variant === null || variant === void 0 ? void 0 : variant.options.map(function (opt) { return (opt === null || opt === void 0 ? void 0 : opt.value) || ""; }).join(" / ");
    return (<modal_1.default handleClose={onCancel}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onCancel}>
          <h2 className="inter-xlarge-semibold">
            {title}{" "}
            {variantTitle && (<span className="text-grey-50 inter-xlarge-regular">
                ({variantTitle})
              </span>)}
          </h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="mb-8">
            <label tabIndex={0} className="inter-base-semibold mb-4 flex items-center gap-xsmall">
              {"General"}
            </label>

            <div className="grid grid-cols-1 gap-y-small">
              <input_1.default label="Title" name="title" ref={register}/>
              {fields.map(function (field, index) { return (<div key={field.indexId}>
                  <input_1.default ref={register({ required: true })} name={"options[".concat(index, "].value")} required={true} label={field.title} defaultValue={field.value}/>
                  <input ref={register()} type="hidden" name={"options[".concat(index, "].option_id")} defaultValue={field.option_id}/>
                </div>); })}
            </div>
          </div>
          <div className="mb-8">
            <label tabIndex={0} className="inter-base-semibold mb-4 flex items-center">
              {"Prices"}
              <span className="text-rose-50 mr-xsmall">*</span>
              <icon_tooltip_1.default content={"Variant prices"}/>
            </label>

            <div className="grid grid-cols-1 gap-y-xsmall">
              {prices.map(function (field, index) { return (<div className="flex items-center" key={field.indexId}>
                  <div className="w-full">
                    <react_hook_form_1.Controller control={control} key={field.indexId} name={"prices[".concat(index, "].price")} ref={register()} defaultValue={field.price} render={function (_a) {
                var onChange = _a.onChange, value = _a.value;
                var codes = availableCurrencies;
                if (value === null || value === void 0 ? void 0 : value.currency_code) {
                    codes = __spreadArray([value === null || value === void 0 ? void 0 : value.currency_code], availableCurrencies, true);
                }
                codes.sort();
                return (<currency_input_1.default currencyCodes={codes} currentCurrency={value === null || value === void 0 ? void 0 : value.currency_code} size="medium" readOnly={index === 0} onChange={function (code) {
                        return onChange(__assign(__assign({}, value), { currency_code: code }));
                    }}>
                            <currency_input_1.default.AmountInput label="Amount" onChange={function (amount) {
                        return onChange(__assign(__assign({}, value), { amount: amount }));
                    }} amount={value === null || value === void 0 ? void 0 : value.amount}/>
                          </currency_input_1.default>);
            }}/>
                  </div>

                  <button_1.default variant="ghost" size="small" className="ml-8 w-8 h-8 mr-2.5 text-grey-40 hover:text-grey-80 transition-colors" onClick={deletePrice(index)}>
                    <trash_icon_1.default />
                  </button_1.default>
                </div>); })}
            </div>
            <button_1.default className="mt-4" onClick={appendPrice} size="small" variant="ghost" name="add-price" disabled={(availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) === 0}>
              <plus_icon_1.default size={20}/> Add a price
            </button_1.default>
          </div>
          <div className="mb-8">
            <label className="inter-base-semibold flex items-center gap-xsmall">
              {"Stock & Inventory"}
              <icon_tooltip_1.default content={"Stock and inventory information"}/>
            </label>
            <div className="w-full mt-4 grid medium:grid-cols-2 grid-cols-1 gap-y-base gap-x-xsmall">
              <input_1.default label="SKU" name="sku" placeholder="SKU" ref={register}/>
              <input_1.default label="EAN" name="ean" placeholder="EAN" ref={register}/>
              <input_1.default label="Inventory quantity" name="inventory_quantity" placeholder="100" type="number" ref={register}/>

              <input_1.default label="UPC Barcode" name="barcode" placeholder="Barcode" ref={register}/>
            </div>

            <div className="flex items-center mt-6 gap-x-large">
              <div className="flex item-center gap-x-1.5">
                <checkbox_1.default name="manage_inventory" label="Manage Inventory" ref={register}/>
                <icon_tooltip_1.default content={"When checked Medusa will regulate the inventory when orders and returns are made."}/>
              </div>
              <div className="flex item-center gap-x-1.5">
                <checkbox_1.default name="allow_backorder" ref={register} label="Allow backorders"/>
                <icon_tooltip_1.default content={"When checked the product will be available for purchase despite the product being sold out."}/>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="inter-base-semibold flex items-center gap-xsmall">
              Dimensions <icon_tooltip_1.default content={"Variant dimensions"}/>
            </label>
            <div className="w-full mt-4 grid medium:grid-cols-2 grid-cols-1 gap-y-base gap-x-xsmall">
              <input_1.default label="Height" placeholder="Product Height" name="height" ref={register}/>
              <input_1.default label="Width" placeholder="Product Width" name="width" ref={register}/>
              <input_1.default label="Length" name="length" placeholder="Product Length" ref={register}/>
              <input_1.default label="Weight" name="weight" placeholder="Product Weight" ref={register}/>
            </div>
          </div>
          <div className="mb-8">
            <label className="inter-base-semibold flex items-center gap-xsmall">
              Customs <icon_tooltip_1.default content={"Variant customs information"}/>
            </label>
            <div className="w-full grid mt-4 medium:grid-cols-2 grid-cols-1 gap-y-base gap-x-xsmall">
              <input_1.default label="MID Code" placeholder="MID Code" name="mid_code" ref={register}/>
              <input_1.default label="HS Code" placeholder="HS Code" name="hs_code" ref={register}/>
              <select_1.default enableSearch label={"Country of origin"} options={countryOptions} value={selectedCountry} onChange={setSelectedCountry}/>
              <input_1.default label="Material" name="material" placeholder="Material" ref={register}/>
            </div>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end gap-x-base">
            <button_1.default className="w-[127px]" onClick={onCancel} size="small" variant="ghost">
              Cancel
            </button_1.default>
            <button_1.default onClick={handleSubmit(handleSave)} type="submit" className="w-[127px]" size="small" variant="primary">
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = VariantEditor;
