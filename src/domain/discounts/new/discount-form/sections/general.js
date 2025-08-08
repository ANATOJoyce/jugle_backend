"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../../../../components/atoms/checkbox");
var icon_tooltip_1 = require("../../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../../components/molecules/input");
var select_1 = require("../../../../../components/molecules/select");
var textarea_1 = require("../../../../../components/molecules/textarea");
var currency_input_1 = require("../../../../../components/organisms/currency-input");
var discount_form_context_1 = require("../form/discount-form-context");
var General = function (_a) {
    var _b;
    var discount = _a.discount;
    var initialCurrency = ((_b = discount === null || discount === void 0 ? void 0 : discount.regions) === null || _b === void 0 ? void 0 : _b[0].currency_code) || undefined;
    var _c = (0, react_1.useState)(initialCurrency), fixedRegionCurrency = _c[0], setFixedRegionCurrency = _c[1];
    var opts = (0, medusa_react_1.useAdminRegions)().regions;
    var _d = (0, discount_form_context_1.useDiscountForm)(), register = _d.register, control = _d.control, type = _d.type;
    var regions = (0, react_hook_form_1.useWatch)({
        control: control,
        name: "regions",
    });
    (0, react_1.useEffect)(function () {
        if (type === "fixed" && regions) {
            var id_1;
            if (Array.isArray(regions) && regions.length) {
                id_1 = regions[0].value;
            }
            else {
                id_1 = regions.value; // if you change from fixed to percentage, unselect and select a region, and then change back to fixed it is possible to make useForm set regions to an object instead of an array
            }
            var reg = opts === null || opts === void 0 ? void 0 : opts.find(function (r) { return r.id === id_1; });
            if (reg) {
                setFixedRegionCurrency(reg.currency_code);
            }
        }
    }, [type, opts, regions]);
    var regionOptions = (0, react_1.useMemo)(function () {
        return (opts === null || opts === void 0 ? void 0 : opts.map(function (r) { return ({ value: r.id, label: r.name }); })) || [];
    }, [opts]);
    var _e = (0, react_1.useState)(false), render = _e[0], setRender = _e[1];
    (0, react_1.useEffect)(function () {
        setTimeout(function () { return setRender(true); }, 100);
    }, []);
    return (<div className="pt-5">
      {render && (<>
          <react_hook_form_1.Controller name="regions" control={control} rules={{
                required: "Atleast one region is required",
                validate: function (value) {
                    return Array.isArray(value) ? value.length > 0 : !!value;
                },
            }} render={function (_a) {
                var onChange = _a.onChange, value = _a.value;
                return (<select_1.default value={value || null} onChange={function (value) {
                        onChange(type === "fixed" ? [value] : value);
                    }} label="Choose valid regions" isMultiSelect={type !== "fixed"} hasSelectAll={type !== "fixed"} enableSearch required options={regionOptions}/>);
            }}/>
          <div className="flex gap-x-base gap-y-base my-base">
            <input_1.default label="Code" className="flex-1" placeholder="SUMMERSALE10" required name="code" ref={register({ required: "Code is required" })}/>

            {type !== "free_shipping" && (<>
                {type === "fixed" ? (<div className="flex-1">
                    <currency_input_1.default size="small" currentCurrency={fixedRegionCurrency} readOnly hideCurrency>
                      <react_hook_form_1.Controller name="rule.value" control={control} rules={{
                        required: "Amount is required",
                        min: 1,
                    }} render={function (_a) {
                        var value = _a.value, onChange = _a.onChange;
                        return (<currency_input_1.default.AmountInput label={"Amount"} required amount={value} onChange={onChange}/>);
                    }}/>
                    </currency_input_1.default>
                  </div>) : (<div className="flex-1">
                    <input_1.default label="Percentage" min={0} required type="number" placeholder="10" prefix={"%"} name="rule.value" ref={register({
                        required: true,
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
          <textarea_1.default label="Description" required placeholder="Summer Sale 2022" rows={1} name="rule.description" ref={register({
                required: true,
            })}/>
          <div className="mt-xlarge flex items-center">
            <react_hook_form_1.Controller name="is_dynamic" control={control} render={function (_a) {
                var onChange = _a.onChange, value = _a.value;
                return (<checkbox_1.default label="This is a template discount" name="is_dynamic" id="is_dynamic" checked={value} onChange={function (e) { return onChange(e.target.checked); }}/>);
            }}/>
            <icon_tooltip_1.default content={"Template discounts allow you to define a set of rules that can be used across a group of discounts. This is useful in campaigns that should generate unique codes for each user, but where the rules for all unique codes should be the same."}/>
          </div>
        </>)}
    </div>);
};
exports.default = General;
