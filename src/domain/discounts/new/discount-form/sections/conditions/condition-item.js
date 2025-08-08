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
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var badge_1 = require("../../../../../../components/fundamentals/badge");
var edit_icon_1 = require("../../../../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../../../../components/fundamentals/icons/trash-icon");
var actionables_1 = require("../../../../../../components/molecules/actionables");
var types_1 = require("../../../../types");
var edit_conditions_modal_1 = require("../../edit-conditions-modal");
var discount_form_context_1 = require("../../form/discount-form-context");
var ConditionItem = function (_a) {
    var index = _a.index, discountId = _a.discountId, conditionId = _a.conditionId, type = _a.type, setCondition = _a.setCondition, items = _a.items;
    var queryParams = (0, react_1.useMemo)(function () {
        switch (type) {
            case types_1.DiscountConditionType.PRODUCTS:
                return { expand: "products" };
            case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
                return { expand: "product_collections" };
            case types_1.DiscountConditionType.PRODUCT_TAGS:
                return { expand: "product_tags" };
            case types_1.DiscountConditionType.CUSTOMER_GROUPS:
                return { expand: "customer_groups" };
            case types_1.DiscountConditionType.PRODUCT_TYPES:
                return { expand: "product_types" };
        }
    }, [type]);
    var discount_condition = (0, medusa_react_1.useAdminGetDiscountCondition)(discountId, conditionId, queryParams, {
        enabled: !!discountId && !!conditionId,
        cacheTime: 0,
    }).discount_condition;
    var updateCondition = (0, discount_form_context_1.useDiscountForm)().updateCondition;
    var _b = (0, react_1.useState)(false), showEdit = _b[0], setShowEdit = _b[1];
    (0, react_1.useEffect)(function () {
        if (!discount_condition) {
            return;
        }
        switch (type) {
            case types_1.DiscountConditionType.PRODUCTS:
                setCondition(function (prevConditions) {
                    return __assign(__assign({}, prevConditions), { products: __assign(__assign({}, prevConditions.products), { id: discount_condition.id, operator: discount_condition.operator, items: discount_condition.products.map(function (p) { return ({
                                id: p.id,
                                label: p.title,
                            }); }) }) });
                });
                break;
            case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
                setCondition(function (prevConditions) {
                    return __assign(__assign({}, prevConditions), { product_collections: __assign(__assign({}, prevConditions.product_collections), { id: discount_condition.id, operator: discount_condition.operator, items: discount_condition.product_collections.map(function (p) { return ({
                                id: p.id,
                                label: p.title,
                            }); }) }) });
                });
                break;
            case types_1.DiscountConditionType.PRODUCT_TAGS:
                setCondition(function (prevConditions) {
                    return __assign(__assign({}, prevConditions), { product_tags: __assign(__assign({}, prevConditions.product_tags), { id: discount_condition.id, operator: discount_condition.operator, items: discount_condition.product_tags.map(function (p) { return ({
                                id: p.id,
                                label: p.value,
                            }); }) }) });
                });
                break;
            case types_1.DiscountConditionType.CUSTOMER_GROUPS:
                setCondition(function (prevConditions) {
                    return __assign(__assign({}, prevConditions), { customer_groups: __assign(__assign({}, prevConditions.customer_groups), { id: discount_condition.id, operator: discount_condition.operator, items: discount_condition.customer_groups.map(function (p) { return ({
                                id: p.id,
                                label: p.name,
                            }); }) }) });
                });
                break;
            case types_1.DiscountConditionType.PRODUCT_TYPES:
                setCondition(function (prevConditions) {
                    return __assign(__assign({}, prevConditions), { product_types: __assign(__assign({}, prevConditions.product_types), { id: discount_condition.id, operator: discount_condition.operator, items: discount_condition.product_types.map(function (p) { return ({
                                id: p.id,
                                label: p.value,
                            }); }) }) });
                });
                break;
        }
    }, [discount_condition, type]);
    var _c = (0, react_1.useMemo)(function () {
        var columns = Math.max(Math.floor(400 / 110) - 1, 1);
        var visibleItems = items.slice(0, columns);
        var remainder = items.length - columns;
        return [visibleItems, remainder];
    }, [items]), visibleItems = _c[0], remainder = _c[1];
    // If no items in the list, don't render anything
    if (!items.length) {
        return null;
    }
    return (<div>
      <div className="p-base border rounded-rounded flex gap-base justify-between items-center">
        <div className="flex overflow-hidden gap-base w-full">
          <div>
            <badge_1.default className="inter-base-semibold flex justify-center items-center w-[40px] h-[40px]" variant="default">
              §{index + 1}
            </badge_1.default>
          </div>
          <div className="truncate flex flex-col justify-center flex-1 w-full">
            <div className="inter-small-semibold">{getTitle(type)}</div>
            <div className="w-full flex items-center inter-small-regular gap-x-xsmall flex-1">
              <div className="gap-x-2xsmall text-grey-50 flex items-center w-full inter-small-regular flex-1">
                {visibleItems.map(function (item, i) {
            return (<span key={i}>
                      {type === types_1.DiscountConditionType.PRODUCT_TAGS && "#"}
                      {item.label}
                      {i !== visibleItems.length - 1 && ", "}
                    </span>);
        })}
                {remainder > 0 && (<span className="text-grey-40 ml-2">+{remainder} more</span>)}
              </div>
            </div>
          </div>
        </div>
        <div>
          <actionables_1.default forceDropdown actions={[
            {
                label: "Edit",
                onClick: function () { return setShowEdit(true); },
                icon: <edit_icon_1.default size={16}/>,
            },
            {
                label: "Delete condition",
                onClick: function () {
                    return updateCondition({
                        type: type,
                        items: [],
                        operator: types_1.DiscountConditionOperator.IN,
                        shouldDelete: true,
                    });
                },
                icon: <trash_icon_1.default size={16}/>,
                variant: "danger",
            },
        ]}/>
        </div>
      </div>
      {showEdit && (<edit_conditions_modal_1.default onClose={function () { return setShowEdit(false); }} view={type}/>)}
    </div>);
};
var getTitle = function (type) {
    switch (type) {
        case types_1.DiscountConditionType.PRODUCTS:
            return "Product";
        case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
            return "Collection";
        case types_1.DiscountConditionType.PRODUCT_TAGS:
            return "Tag";
        case types_1.DiscountConditionType.CUSTOMER_GROUPS:
            return "Customer group";
        case types_1.DiscountConditionType.PRODUCT_TYPES:
            return "Type";
    }
};
exports.default = ConditionItem;
