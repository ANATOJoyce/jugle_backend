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
exports.RegionTaxForm = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../../components/atoms/checkbox");
var button_1 = require("../../../components/fundamentals/button");
var icon_tooltip_1 = require("../../../components/molecules/icon-tooltip");
var select_1 = require("../../../components/molecules/select");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var RegionTaxForm = function (_a) {
    var region = _a.region;
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            automatic_taxes: region.automatic_taxes,
            gift_cards_taxable: region.gift_cards_taxable,
            tax_provider_id: {
                label: region.tax_provider_id === null
                    ? "System Tax Provider"
                    : region.tax_provider_id,
                value: region.tax_provider_id,
            },
        },
    }), register = _b.register, handleSubmit = _b.handleSubmit, control = _b.control, reset = _b.reset, isDirty = _b.formState.isDirty;
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        reset({
            automatic_taxes: region.automatic_taxes,
            gift_cards_taxable: region.gift_cards_taxable,
            tax_provider_id: {
                label: region.tax_provider_id === null
                    ? "System Tax Provider"
                    : region.tax_provider_id,
                value: region.tax_provider_id,
            },
        });
    }, [region]);
    var _c = (0, medusa_react_1.useAdminStoreTaxProviders)(), isProvidersLoading = _c.isLoading, tax_providers = _c.tax_providers;
    var updateRegion = (0, medusa_react_1.useAdminUpdateRegion)(region.id);
    var providerOptions = (0, react_1.useMemo)(function () {
        if (tax_providers) {
            return __spreadArray([
                {
                    label: "System Tax Provider",
                    value: null,
                }
            ], tax_providers.map(function (tp) { return ({
                label: tp.id,
                value: tp.id,
            }); }), true);
        }
        return [
            {
                label: "System Tax Provider",
                value: null,
            },
        ];
    }, [tax_providers]);
    var onSubmit = function (data) {
        var toSubmit = __assign(__assign({}, data), { tax_provider_id: data.tax_provider_id.value });
        updateRegion.mutate(toSubmit, {
            onSuccess: function () {
                notification("Success", "Region tax settings were successfully updated.", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<form className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-base flex-1">
        <react_hook_form_1.Controller name="tax_provider_id" control={control} defaultValue={region.tax_provider_id} rules={{ required: true }} render={function (props) { return (<select_1.default disabled={isProvidersLoading} label="Tax Provider" options={providerOptions} value={props.value} onChange={props.onChange} className="mb-base"/>); }}/>
        <div className="flex item-center gap-x-1.5">
          <checkbox_1.default className="inter-base-regular" name="automatic_taxes" ref={register} label="Calculate taxes automatically?"/>
          <icon_tooltip_1.default content={"When checked Medusa will automatically apply tax calculations to Carts in this Region. When unchecked you will have to manually compute taxes at checkout. Manual taxes are recommended if using a 3rd party tax provider to avoid performing too many requests"}/>
        </div>
        <div className="flex item-center gap-x-1.5">
          <checkbox_1.default className="inter-base-regular" name="gift_cards_taxable" ref={register} label="Apply tax to gift cards?"/>
          <icon_tooltip_1.default content={"When checked taxes will be applied to gift cards on checkout. In some contries tax regulations require that taxes are applied to gift cards on purchase."}/>
        </div>
      </div>
      <div className="flex justify-end">
        {isDirty && (<button_1.default loading={updateRegion.isLoading} variant="primary" size="medium" type="submit">
            Save
          </button_1.default>)}
      </div>
    </form>);
};
exports.RegionTaxForm = RegionTaxForm;
