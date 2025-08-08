"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var add_conditions_modal_1 = require("../../../new/discount-form/add-conditions-modal");
var conditions_provider_1 = require("./conditions-provider");
var AddCondition = function (_a) {
    var show = _a.show, onClose = _a.onClose;
    var _b = (0, conditions_provider_1.useConditions)(), conditions = _b.conditions, save = _b.save, reset = _b.reset;
    return (<div>
      {show && (<add_conditions_modal_1.default isDetails={true} onClose={function () {
                onClose();
                reset();
            }} conditions={conditions} save={save}/>)}
    </div>);
};
exports.default = AddCondition;
