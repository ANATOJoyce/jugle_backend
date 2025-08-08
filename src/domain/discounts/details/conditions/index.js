"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var numbered_item_1 = require("../../../../components/molecules/numbered-item");
var body_card_1 = require("../../../../components/organisms/body-card");
var add_condition_1 = require("./add-condition");
var conditions_provider_1 = require("./add-condition/conditions-provider");
var use_discount_conditions_1 = require("./use-discount-conditions");
var Conditions = function (_a) {
    var discount = _a.discount;
    var _b = (0, react_1.useState)(false), show = _b[0], setShow = _b[1];
    var conditions = (0, use_discount_conditions_1.useDiscountConditions)(discount);
    return (<conditions_provider_1.ConditionsProvider discount={discount}>
      <body_card_1.default title="Conditions" className="min-h-[200px]" forceDropdown actionables={[
            {
                label: "Add condition",
                icon: <plus_icon_1.default size={16}/>,
                onClick: function () { return setShow(true); },
            },
        ]}>
        {conditions.length ? (<div style={{
                gridTemplateRows: "repeat(".concat(Math.ceil((conditions === null || conditions === void 0 ? void 0 : conditions.length) / 2), ", minmax(0, 1fr))"),
            }} className="grid grid-cols-2 grid-flow-col gap-y-base gap-x-xlarge">
            {conditions.map(function (condition, i) { return (<numbered_item_1.default key={i} title={condition.title} index={i + 1} description={condition.description} actions={condition.actions}/>); })}
          </div>) : (<div className="flex flex-col justify-center items-center flex-1 gap-y-small">
            <span className="inter-base-regular text-grey-50">
              This discount has no conditions
            </span>
          </div>)}
      </body_card_1.default>
      <add_condition_1.default show={show} onClose={function () { return setShow(false); }}/>
    </conditions_provider_1.ConditionsProvider>);
};
exports.default = Conditions;
