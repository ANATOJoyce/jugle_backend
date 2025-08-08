"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var radio_group_1 = require("../../../../../../components/organisms/radio-group");
var types_1 = require("../../../../types");
var ConditionOperator = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (<radio_group_1.default.Root value={value} onValueChange={onChange} className="grid grid-cols-2 gap-base mb-4">
      <radio_group_1.default.Item className="w-full" label="In" value={types_1.DiscountConditionOperator.IN} description="Applies to the selected items."/>
      <radio_group_1.default.Item className="w-full" label="Not in" value={types_1.DiscountConditionOperator.NOT_IN} description="Applies to all items except the selected items."/>
    </radio_group_1.default.Root>);
};
exports.default = ConditionOperator;
