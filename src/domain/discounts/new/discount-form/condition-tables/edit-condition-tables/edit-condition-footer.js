"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var types_1 = require("../../../../types");
var discount_form_context_1 = require("../../form/discount-form-context");
var EditConditionFooter = function (_a) {
    var type = _a.type, items = _a.items, operator = _a.operator, onClose = _a.onClose;
    var updateCondition = (0, discount_form_context_1.useDiscountForm)().updateCondition;
    return (<div className="flex items-center justify-end w-full gap-x-xsmall">
      <button_1.default variant="secondary" size="small" onClick={onClose}>
        Cancel
      </button_1.default>
      <button_1.default variant="danger" size="small" onClick={function () {
            updateCondition({
                type: type,
                items: [],
                operator: types_1.DiscountConditionOperator.IN,
            });
            onClose();
        }}>
        Delete condition
      </button_1.default>
      <button_1.default variant="primary" size="small" onClick={function () {
            updateCondition({
                type: type,
                items: items,
                operator: operator,
            });
            onClose();
        }} className="min-w-[128px]">
        Save
      </button_1.default>
    </div>);
};
exports.default = EditConditionFooter;
