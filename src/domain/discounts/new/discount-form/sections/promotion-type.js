"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var radio_group_1 = require("../../../../../components/organisms/radio-group");
var types_1 = require("../../../types");
var discount_form_context_1 = require("../form/discount-form-context");
var PromotionType = function () {
    var control = (0, discount_form_context_1.useDiscountForm)().control;
    var regions = (0, react_hook_form_1.useWatch)({
        control: control,
        name: "regions",
    });
    return (<react_hook_form_1.Controller name="rule.type" control={control} rules={{ required: true }} render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<radio_group_1.default.Root value={value} onValueChange={onChange} className={(0, clsx_1.default)("flex items-center gap-base mt-base px-1")}>
            <radio_group_1.default.Item value={types_1.DiscountRuleType.PERCENTAGE} className="flex-1" label="Percentage" description={"Discount applied in %"}/>
            <radio_group_1.default.Item value={types_1.DiscountRuleType.FIXED} className="flex-1" label="Fixed amount" description={"Discount in whole numbers"} disabled={Array.isArray(regions) && regions.length > 1} disabledTooltip="You can only select one valid region if you want to use the fixed amount type"/>
            <radio_group_1.default.Item value={types_1.DiscountRuleType.FREE_SHIPPING} className="flex-1" label="Free shipping" description={"Override delivery amount"}/>
          </radio_group_1.default.Root>);
        }}/>);
};
exports.default = PromotionType;
