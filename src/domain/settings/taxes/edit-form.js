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
exports.SimpleEditForm = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var modal_1 = require("../../../components/molecules/modal");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var tax_rule_selector_1 = require("./tax-rule-selector");
var edit_tax_rate_details_1 = require("./edit-tax-rate-details");
var tax_rule_item_1 = require("./tax-rule-item");
var EditTaxRate = function (_a) {
    var modalContext = _a.modalContext, regionId = _a.regionId, taxRate = _a.taxRate, onDismiss = _a.onDismiss;
    var updateTaxRate = (0, medusa_react_1.useAdminUpdateTaxRate)(taxRate.id);
    var _b = (0, react_1.useState)({}), updatedRules = _b[0], setUpdatedRules = _b[1];
    var _c = (0, react_hook_form_1.useForm)({
        defaultValues: __assign(__assign({}, taxRate), { products: taxRate.products.map(function (p) { return p.id; }), product_types: taxRate.product_types.map(function (p) { return p.id; }), shipping_options: taxRate.shipping_options.map(function (p) { return p.id; }) }),
    }), register = _c.register, setValue = _c.setValue, handleSubmit = _c.handleSubmit, watch = _c.watch;
    var notification = (0, use_notification_1.default)();
    var onSave = function (data) {
        var toSubmit = data;
        var conditionalFields = ["products", "product_types", "shipping_options"];
        for (var _i = 0, _a = Object.entries(updatedRules); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!value && key in toSubmit && conditionalFields.includes(key)) {
                delete toSubmit[key];
            }
        }
        updateTaxRate.mutate(toSubmit, {
            onSuccess: function () {
                notification("Success", "Successfully updated Tax Rate.", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        register("products");
        register("product_types");
        register("shipping_options");
    }, []);
    var rules = watch(["products", "product_types", "shipping_options"]);
    var handleOverridesSelected = function (rule) {
        setUpdatedRules(function (prev) {
            prev[rule.type] = true;
            return prev;
        });
        switch (rule.type) {
            case "products":
                setValue("products", rule.items);
                break;
            case "product_types":
                setValue("product_types", rule.items);
                break;
            case "shipping_options":
                setValue("shipping_options", rule.items);
                break;
            default:
                break;
        }
    };
    return (<form onSubmit={handleSubmit(onSave)}>
      <modal_1.default.Content>
        <edit_tax_rate_details_1.EditTaxRateDetails lockName={false} register={register}/>
        <div>
          <p className="inter-base-semibold mb-base">Overrides</p>
          {(rules.product_types.length > 0 ||
            rules.products.length > 0 ||
            rules.shipping_options.length > 0) && (<div className="flex flex-col gap-base">
              {rules.products.length > 0 && (<tax_rule_item_1.TaxRuleItem onDelete={function () {
                    return handleOverridesSelected({ type: "products", items: [] });
                }} onEdit={function () {
                    modalContext.push(SelectOverridesScreen(modalContext.pop, regionId, handleOverridesSelected, {
                        items: rules.products,
                        type: "products",
                    }));
                }} index={1} name="Product Rules" description={"Applies to ".concat(rules.products.length, " product").concat(rules.products.length > 1 ? "s" : "")}/>)}
              {rules.product_types.length > 0 && (<tax_rule_item_1.TaxRuleItem onDelete={function () {
                    return handleOverridesSelected({
                        type: "product_types",
                        items: [],
                    });
                }} onEdit={function () {
                    modalContext.push(SelectOverridesScreen(modalContext.pop, regionId, handleOverridesSelected, {
                        items: rules.product_types,
                        type: "product_types",
                    }));
                }} index={2} name="Product Type Rules" description={"Applies to ".concat(rules.product_types.length, " product type").concat(rules.product_types.length > 1 ? "s" : "")}/>)}
              {rules.shipping_options.length > 0 && (<tax_rule_item_1.TaxRuleItem onDelete={function () {
                    return handleOverridesSelected({
                        type: "shipping_options",
                        items: [],
                    });
                }} onEdit={function () {
                    modalContext.push(SelectOverridesScreen(modalContext.pop, regionId, handleOverridesSelected, {
                        items: rules.shipping_options,
                        type: "shipping_options",
                    }));
                }} index={3} name="Shipping Option Rules" description={"Applies to ".concat(rules.shipping_options.length, " shipping option").concat(rules.shipping_options.length > 1 ? "s" : "")}/>)}
            </div>)}
          {!(rules.product_types.length &&
            rules.products.length &&
            rules.shipping_options.length) && (<button_1.default type="button" onClick={function () {
                modalContext.push(SelectOverridesScreen(modalContext.pop, regionId, handleOverridesSelected));
            }} className="w-full mt-base" size="medium" variant="secondary">
              <plus_icon_1.default /> Add Overrides
            </button_1.default>)}
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer>
        <div className="flex items-center justify-end w-full">
          <button_1.default type="button" onClick={onDismiss} variant="ghost" size="small" className="w-eventButton justify-center">
            Cancel
          </button_1.default>
          <button_1.default type="submit" variant="primary" size="small" className="w-eventButton justify-center">
            Save
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </form>);
};
var SelectOverridesScreen = function (pop, regionId, onOverridesSelected, options) {
    if (options === void 0) { options = {}; }
    return {
        title: "Add override",
        onBack: function () { return pop(); },
        view: (<tax_rule_selector_1.default regionId={regionId} onSubmit={onOverridesSelected} {...options}/>),
    };
};
var SimpleEditForm = function (_a) {
    var onDismiss = _a.onDismiss, taxRate = _a.taxRate;
    var updateRegion = (0, medusa_react_1.useAdminUpdateRegion)(taxRate.id);
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            rate: taxRate.rate,
            code: taxRate.code,
        },
    }), register = _b.register, handleSubmit = _b.handleSubmit;
    var notification = (0, use_notification_1.default)();
    var onSave = function (data) {
        var toSubmit = {
            tax_rate: parseFloat(data.rate),
            tax_code: data.code,
        };
        updateRegion.mutate(toSubmit, {
            onSuccess: function () {
                notification("Success", "Successfully updated default rate.", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<form onSubmit={handleSubmit(onSave)}>
      <modal_1.default.Content>
        <edit_tax_rate_details_1.EditTaxRateDetails lockName register={register}/>
      </modal_1.default.Content>
      <modal_1.default.Footer>
        <div className="flex items-center justify-end w-full">
          <button_1.default type="button" onClick={onDismiss} variant="ghost" size="small" className="w-eventButton justify-center">
            Cancel
          </button_1.default>
          <button_1.default type="submit" variant="primary" size="small" className="w-eventButton justify-center">
            Save
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </form>);
};
exports.SimpleEditForm = SimpleEditForm;
exports.default = EditTaxRate;
