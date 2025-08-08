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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../atoms/checkbox");
var button_1 = require("../../fundamentals/button");
var modal_1 = require("../../molecules/modal");
var radio_group_1 = require("../../organisms/radio-group");
var price_amount_1 = require("./price-amount");
var MODES = {
    APPLY_ALL: "all",
    SELECTED_ONLY: "selected",
};
var PriceOverrides = function (_a) {
    var onClose = _a.onClose, prices = _a.prices, variants = _a.variants, onSubmit = _a.onSubmit, defaultVariant = _a.defaultVariant, _b = _a.isEdit, isEdit = _b === void 0 ? false : _b;
    var _c = react_1.default.useState(MODES.SELECTED_ONLY), mode = _c[0], setMode = _c[1];
    var _d = (0, react_hook_form_1.useForm)({
        defaultValues: {
            variants: [],
            prices: prices,
        },
    }), handleSubmit = _d.handleSubmit, control = _d.control, reset = _d.reset;
    var onClick = handleSubmit(function (values) {
        var _a;
        if (mode === MODES.APPLY_ALL) {
            onSubmit(__assign(__assign({}, values), { variants: variants === null || variants === void 0 ? void 0 : variants.map(function (variant) { return variant.id; }) }));
        }
        else {
            onSubmit(__assign(__assign({}, values), { 
                // remove null or undefined
                variants: (_a = values.variants) === null || _a === void 0 ? void 0 : _a.filter(Boolean) }));
        }
    });
    // set default variant
    react_1.default.useEffect(function () {
        var _a;
        if (prices.length > 0 && (variants === null || variants === void 0 ? void 0 : variants.length) > 0) {
            var selectedVariantId_1 = defaultVariant
                ? defaultVariant.id
                : (_a = prices[0]) === null || _a === void 0 ? void 0 : _a.variant_id;
            var selectedIndex = variants.findIndex(function (variant) { return variant.id === selectedVariantId_1; });
            var variantOptions = Array(variants.length).fill(null);
            variantOptions[selectedIndex] = selectedVariantId_1;
            reset({
                prices: prices,
                variants: variantOptions,
            });
        }
    }, [variants, prices, defaultVariant]);
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {!isEdit && (<radio_group_1.default.Root value={mode} onValueChange={function (value) { return setMode(value); }} className="pt-2 flex items-center">
            <radio_group_1.default.SimpleItem value={MODES.SELECTED_ONLY} label="Apply overrides on selected variants"/>
            <radio_group_1.default.SimpleItem value={MODES.APPLY_ALL} label="Apply on all variants"/>
          </radio_group_1.default.Root>)}
        {mode === MODES.SELECTED_ONLY && !isEdit && (<div className="pt-6 flex flex-col gap-2">
            {variants.map(function (variant, idx) { return (<div id={variant.id} className="py-2.5 px-3 border border-grey-20 rounded-rounded">
                <ControlledCheckbox control={control} name="variants" label={"".concat(variant.title, " (SKU: ").concat(variant.sku, ")")} id={variant.id} index={idx} value={variant.id}/>
              </div>); })}
          </div>)}
        <div className="pt-8">
          <h6 className="inter-base-semibold">Prices</h6>
          <div className="pt-4">
            {prices.map(function (price, idx) { return (<react_hook_form_1.Controller control={control} name={"prices[".concat(idx, "]")} key={price.id} render={function (field) {
                return (<price_amount_1.default value={field.value} key={price.id} onChange={function (amount) {
                        field.onChange(__assign(__assign({}, field.value), { amount: amount }));
                    }}/>);
            }}/>); })}
          </div>
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <div className="flex w-full h-8 justify-end">
          <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center rounded-rounded" size="large" onClick={onClose}>
            Cancel
          </button_1.default>
          <button_1.default size="large" className="text-small justify-center rounded-rounded" variant="primary" onClick={onClick}>
            Save and close
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
var ControlledCheckbox = function (_a) {
    var control = _a.control, name = _a.name, id = _a.id, index = _a.index, value = _a.value, props = __rest(_a, ["control", "name", "id", "index", "value"]);
    var variants = (0, react_hook_form_1.useWatch)({
        control: control,
        name: name,
    });
    return (<react_hook_form_1.Controller control={control} name={name} render={function (field) {
            return (<checkbox_1.default className="shrink-0 inter-small-regular" {...props} {...field} checked={variants === null || variants === void 0 ? void 0 : variants.some(function (variant) { return variant === value; })} onChange={function (e) {
                    // copy field value
                    var valueCopy = __spreadArray([], (variants || []), true);
                    // update checkbox value
                    valueCopy[index] = e.target.checked ? id : null;
                    // update field value
                    field.onChange(valueCopy);
                }}/>);
        }}/>);
};
exports.default = PriceOverrides;
