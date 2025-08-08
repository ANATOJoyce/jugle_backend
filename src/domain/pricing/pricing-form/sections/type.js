"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var accordion_1 = require("../../../../components/organisms/accordion");
var radio_group_1 = require("../../../../components/organisms/radio-group");
var pricing_form_context_1 = require("../form/pricing-form-context");
var types_1 = require("../types");
var Type = function () {
    var control = (0, pricing_form_context_1.usePriceListForm)().control;
    return (<accordion_1.default.Item forceMountContent required value="type" title="Price list type" description="Select the type of the price list" tooltip="Unlike with sale prices a price override will not communicate to the customer that the price is part of a sale.">
      <react_hook_form_1.Controller name="type" control={control} rules={{ required: true }} render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<radio_group_1.default.Root value={value} onValueChange={onChange} className="flex items-center gap-base group-radix-state-open:mt-5 accordion-margin-transition">
              <radio_group_1.default.Item value={types_1.PriceListType.SALE} className="flex-1" label="Sale" description="Use this if you are creating prices for a sale."/>
              <radio_group_1.default.Item value={types_1.PriceListType.OVERRIDE} className="flex-1" label="Override" description="Use this to override prices."/>
            </radio_group_1.default.Root>);
        }}/>
    </accordion_1.default.Item>);
};
exports.default = Type;
