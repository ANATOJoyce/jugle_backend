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
var react_1 = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var plus_icon_1 = require("../../../../../../components/fundamentals/icons/plus-icon");
var add_conditions_modal_1 = require("../../add-conditions-modal");
var discount_form_context_1 = require("../../form/discount-form-context");
var condition_item_1 = require("./condition-item");
var Conditions = function (_a) {
    var _b;
    var discount = _a.discount;
    var _c = (0, discount_form_context_1.useDiscountForm)(), setConditions = _c.setConditions, conditions = _c.conditions, updateCondition = _c.updateCondition;
    var _d = (0, react_1.useState)(false), showConditionsModal = _d[0], setShowConditionsModal = _d[1];
    (0, react_1.useEffect)(function () {
        var _a;
        if ((_a = discount === null || discount === void 0 ? void 0 : discount.rule) === null || _a === void 0 ? void 0 : _a.conditions) {
            var _loop_1 = function (condtion) {
                setConditions(function (prevCond) {
                    var _a;
                    return (__assign(__assign({}, prevCond), (_a = {}, _a[condtion.type] = __assign(__assign({}, conditions[condtion.type]), { id: condtion.id, operator: condtion.operator, type: condtion.type }), _a)));
                });
            };
            for (var _i = 0, _b = discount.rule.conditions; _i < _b.length; _i++) {
                var condtion = _b[_i];
                _loop_1(condtion);
            }
        }
    }, [(_b = discount === null || discount === void 0 ? void 0 : discount.rule) === null || _b === void 0 ? void 0 : _b.conditions]);
    var allSet = (0, react_1.useMemo)(function () {
        var allSet = Object.values(conditions).every(function (condition) {
            return condition.items.length;
        });
        return allSet;
    }, [conditions]);
    var filteredConditions = (0, react_1.useMemo)(function () {
        return Object.values(conditions).filter(function (condition) {
            return condition.id || condition.items.length;
        });
    }, [conditions]);
    return (<div className="pt-5">
      <div className="flex flex-col gap-y-small">
        {filteredConditions.map(function (values, i) { return (<condition_item_1.default index={i} key={i} discountId={discount === null || discount === void 0 ? void 0 : discount.id} conditionId={values.id} type={values.type} setCondition={setConditions} items={values.items}/>); })}
      </div>
      {!allSet && (<button_1.default size="small" variant="ghost" onClick={function () { return setShowConditionsModal(true); }} className="mt-4 p-2 w-full rounded-rounded border">
          <plus_icon_1.default size={18}/>
          <span>Add Condition</span>
        </button_1.default>)}
      {showConditionsModal && (<add_conditions_modal_1.default onClose={function () { return setShowConditionsModal(false); }} conditions={conditions} updateCondition={updateCondition}/>)}
    </div>);
};
exports.default = Conditions;
