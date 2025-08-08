"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var layered_modal_1 = require("../../../../../../components/molecules/modal/layered-modal");
var conditions_provider_1 = require("../../../../details/conditions/add-condition/conditions-provider");
var DetailsConditionFooter = function (_a) {
    var type = _a.type, items = _a.items, operator = _a.operator, onClose = _a.onClose;
    var _b = (0, react_1.useContext)(layered_modal_1.LayeredModalContext), pop = _b.pop, reset = _b.reset;
    var _c = (0, conditions_provider_1.useConditions)(), updateCondition = _c.updateCondition, updateAndSave = _c.updateAndSave;
    return (<div className="w-full flex justify-end gap-x-xsmall">
      <button_1.default variant="ghost" size="small" onClick={onClose}>
        Cancel
      </button_1.default>
      <button_1.default variant="primary" size="small" onClick={function () {
            updateCondition({
                type: type,
                items: items,
                operator: operator,
            });
            pop();
        }}>
        Save and add more
      </button_1.default>
      <button_1.default variant="primary" size="small" onClick={function () {
            updateAndSave({ type: type, items: items, operator: operator });
            onClose();
            reset();
        }}>
        Save and close
      </button_1.default>
    </div>);
};
exports.default = DetailsConditionFooter;
