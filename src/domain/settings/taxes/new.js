"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var layered_modal_1 = require("../../../components/molecules/modal/layered-modal");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var tax_rule_selector_1 = require("./tax-rule-selector");
var tax_rule_item_1 = require("./tax-rule-item");
var NewTaxRate = function (_a) {
    var regionId = _a.regionId, onDismiss = _a.onDismiss;
    var createTaxRate = (0, medusa_react_1.useAdminCreateTaxRate)();
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            products: [],
            product_types: [],
            shipping_options: [],
        },
    }), register = _b.register, setValue = _b.setValue, handleSubmit = _b.handleSubmit, watch = _b.watch;
    var notification = (0, use_notification_1.default)();
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var onSave = function (data) {
        createTaxRate.mutate(data, {
            onSuccess: function () {
                notification("Success", "Successfully created tax rate.", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        register("region_id");
        setValue("region_id", regionId);
        register("products");
        register("product_types");
        register("shipping_options");
    }, []);
    var rules = watch(["products", "product_types", "shipping_options"]);
    var handleOverridesSelected = function (rule) {
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
    return (<layered_modal_1.default isLargeModal context={layeredModalContext} handleClose={onDismiss}>
      <form onSubmit={handleSubmit(onSave)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onDismiss}>
            <div>
              <h1 className="inter-xlarge-semibold">Add Tax Rate</h1>
            </div>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div>
              <p className="inter-base-semibold mb-base">Details</p>
              <input_1.default name="name" label="Name" placeholder="Rate name" ref={register({ required: true })} className="mb-base min-w-[335px] w-full"/>
              <input_1.default type="number" min={0} max={100} step={0.01} name="rate" label="Rate" placeholder="12" ref={register({ min: 0, max: 100, required: true })} className="mb-base min-w-[335px] w-full"/>
              <input_1.default placeholder="1000" name="code" label="Code" ref={register({ required: true })} className="mb-base min-w-[335px] w-full"/>
            </div>
            <div>
              <p className="inter-base-semibold mb-base">Overrides</p>
              {(rules.product_types.length > 0 ||
            rules.products.length > 0 ||
            rules.shipping_options.length > 0) && (<div className="flex flex-col gap-base">
                  {rules.products.length > 0 && (<tax_rule_item_1.TaxRuleItem onDelete={function () {
                    return handleOverridesSelected({ type: "products", items: [] });
                }} onEdit={function () {
                    layeredModalContext.push(SelectOverridesScreen(layeredModalContext.pop, regionId, handleOverridesSelected, {
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
                    layeredModalContext.push(SelectOverridesScreen(layeredModalContext.pop, regionId, handleOverridesSelected, {
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
                    layeredModalContext.push(SelectOverridesScreen(layeredModalContext.pop, regionId, handleOverridesSelected, {
                        items: rules.shipping_options,
                        type: "shipping_options",
                    }));
                }} index={3} name="Shipping Option Rules" description={"Applies to ".concat(rules.shipping_options.length, " shipping option").concat(rules.shipping_options.length > 1 ? "s" : "")}/>)}
                </div>)}
              {!(rules.product_types.length > 0 &&
            rules.products.length > 0 &&
            rules.shipping_options.length > 0) && (<button_1.default type="button" onClick={function () {
                layeredModalContext.push(SelectOverridesScreen(layeredModalContext.pop, regionId, handleOverridesSelected));
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
                Create
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </layered_modal_1.default>);
};
var SelectOverridesScreen = function (pop, regionId, onOverridesSelected, options) {
    if (options === void 0) { options = {}; }
    return {
        title: "Add override",
        onBack: function () { return pop(); },
        view: (<tax_rule_selector_1.default regionId={regionId} onSubmit={onOverridesSelected} {...options}/>),
    };
};
exports.default = NewTaxRate;
